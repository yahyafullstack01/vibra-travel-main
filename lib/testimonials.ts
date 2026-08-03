export function getStoryTestimonialItems<T extends { variant?: string }>(
  items: readonly T[],
): T[] {
  return items.filter((item) => item.variant !== "highlight");
}

export function getHighlightTestimonialItems<T extends { variant?: string }>(
  items: readonly T[],
): T[] {
  return items.filter((item) => item.variant === "highlight");
}

export function getPreviewTestimonialItems<T extends { variant?: string }>(
  items: readonly T[],
  limit = 3,
): T[] {
  return getStoryTestimonialItems(items).slice(0, limit);
}
