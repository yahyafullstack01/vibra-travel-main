type TestimonialItem = {
  id?: string;
  variant?: string;
};

export function getStoryTestimonialItems<T extends TestimonialItem>(items: T[]): T[] {
  return items.filter((item) => item.variant !== "highlight");
}

export function getHighlightTestimonialItems<T extends TestimonialItem>(items: T[]): T[] {
  return items.filter((item) => item.variant === "highlight");
}

export function getPreviewTestimonialItems<T extends TestimonialItem>(
  items: T[],
  limit = 3,
): T[] {
  return getStoryTestimonialItems(items).slice(0, limit);
}
