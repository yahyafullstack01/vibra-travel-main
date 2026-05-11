export function deepMerge<T extends Record<string, unknown>>(
  target: T,
  ...sources: Record<string, unknown>[]
): T {
  const out = { ...target };
  for (const src of sources) {
    for (const key of Object.keys(src)) {
      const v = src[key];
      const cur = out[key as keyof T];
      if (
        v &&
        typeof v === "object" &&
        !Array.isArray(v) &&
        cur &&
        typeof cur === "object" &&
        !Array.isArray(cur)
      ) {
        (out as Record<string, unknown>)[key] = deepMerge(
          { ...(cur as Record<string, unknown>) },
          v as Record<string, unknown>,
        );
      } else {
        (out as Record<string, unknown>)[key] = v;
      }
    }
  }
  return out;
}
