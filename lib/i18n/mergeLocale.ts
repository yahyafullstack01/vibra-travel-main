import { deepMerge } from "@/lib/i18n/deepMerge";

export function mergeLocaleOverlay<T extends Record<string, unknown>>(
  base: T,
  ...overlays: Record<string, unknown>[]
): T {
  const clone = JSON.parse(JSON.stringify(base)) as T;
  return deepMerge(clone, ...overlays);
}
