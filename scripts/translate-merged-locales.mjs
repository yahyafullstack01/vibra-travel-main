/**
 * One-off: reads English from messages/merged/en/*.json (merged) and writes
 * messages/merged/{locale}.json using MyMemory public API (rate-limited).
 * Run: node scripts/translate-merged-locales.mjs
 */
import fs from "fs";
import path from "path";

function deepMerge(target, ...sources) {
  const out = { ...target };
  for (const src of sources) {
    for (const key of Object.keys(src)) {
      const v = src[key];
      const cur = out[key];
      if (
        v &&
        typeof v === "object" &&
        !Array.isArray(v) &&
        cur &&
        typeof cur === "object" &&
        !Array.isArray(cur)
      ) {
        out[key] = deepMerge({ ...cur }, v);
      } else {
        out[key] = v;
      }
    }
  }
  return out;
}

const EN_SHARDS_DIR = "messages/merged/en";
const EN_SHARD_FILES = [
  "nav-footer-home.json",
  "groups-experiences.json",
  "corporate-schools.json",
  "story-contact-legal.json",
];
const TARGETS = [
  ["ru", "ru"],
  ["ar", "ar"],
  ["es", "es"],
  ["fr", "fr"],
];

async function translateChunk(text, to) {
  const max = 450;
  const q = text.length > max ? text.slice(0, max) : text;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=en|${to}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(String(res.status));
  const j = await res.json();
  const out = j?.responseData?.translatedText;
  if (!out) throw new Error(JSON.stringify(j).slice(0, 200));
  if (text.length > max) {
    const rest = await translateChunk(text.slice(max), to);
    return out + rest;
  }
  return out;
}

async function walk(value, to) {
  if (typeof value === "string") {
    if (!value.trim()) return value;
    await new Promise((r) => setTimeout(r, 350));
    return translateChunk(value, to);
  }
  if (Array.isArray(value)) {
    const arr = [];
    for (const item of value) {
      arr.push(await walk(item, to));
    }
    return arr;
  }
  if (value && typeof value === "object") {
    const o = {};
    for (const k of Object.keys(value)) {
      o[k] = await walk(value[k], to);
    }
    return o;
  }
  return value;
}

let en = {};
for (const f of EN_SHARD_FILES) {
  const p = path.join(EN_SHARDS_DIR, f);
  en = deepMerge(en, JSON.parse(fs.readFileSync(p, "utf8")));
}

for (const [code, api] of TARGETS) {
  console.log("Translating to", code);
  const out = await walk(en, api);
  fs.writeFileSync(`messages/merged/${code}.json`, JSON.stringify(out, null, 2));
  console.log("Wrote", code);
}
