import { deepMerge } from "@/lib/i18n/deepMerge";

/** Deep-merge translation shards (same locale) into one object. Order matters for overrides. */
export function mergeMessageShards(
  ...parts: Record<string, unknown>[]
): Record<string, unknown> {
  if (parts.length === 0) return {};
  return parts.slice(1).reduce(
    (acc, part) => deepMerge(acc, part) as Record<string, unknown>,
    { ...parts[0] } as Record<string, unknown>,
  );
}
