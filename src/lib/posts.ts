import type { CollectionEntry } from 'astro:content';

/**
 * Generate a URL slug matching Jekyll's /:categories/:title/ pattern.
 * - Categories are slugified and joined with /
 * - Title comes from the filename (strip date prefix)
 */
export function getPostSlug(post: CollectionEntry<'public'>): string {
  const categories = post.data.categories ?? [];
  const categorySlug = categories.length > 0
    ? categories[0].toLowerCase().replace(/\s+/g, '-')
    : '';

  // The id from glob loader is the filename without extension
  // e.g. "2025-12-31-Yearlook-back-2025"
  const titleSlug = post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '').toLowerCase();

  return categorySlug
    ? `${categorySlug}/${titleSlug}`
    : titleSlug;
}

/**
 * Sort posts by date descending (newest first).
 */
export function sortByDate(posts: CollectionEntry<'public'>[]): CollectionEntry<'public'>[] {
  return posts.sort((a, b) => {
    const dateA = a.data.date?.getTime() ?? 0;
    const dateB = b.data.date?.getTime() ?? 0;
    return dateB - dateA;
  });
}

/**
 * Estimate reading time in minutes.
 */
export function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Format a date for display.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get all unique categories from posts.
 */
export function getAllCategories(posts: CollectionEntry<'public'>[]): Map<string, CollectionEntry<'public'>[]> {
  const map = new Map<string, CollectionEntry<'public'>[]>();
  for (const post of posts) {
    for (const cat of post.data.categories ?? []) {
      const existing = map.get(cat) ?? [];
      existing.push(post);
      map.set(cat, existing);
    }
  }
  return map;
}

/**
 * Get all unique tags from posts.
 */
export function getAllTags(posts: CollectionEntry<'public'>[]): Map<string, CollectionEntry<'public'>[]> {
  const map = new Map<string, CollectionEntry<'public'>[]>();
  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      const existing = map.get(tag) ?? [];
      existing.push(post);
      map.set(tag, existing);
    }
  }
  return map;
}
