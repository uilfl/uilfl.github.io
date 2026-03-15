import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  categories: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  excerpt: z.string().optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  heroImage: z.object({
    src: z.string(),
    alt: z.string().optional(),
    color: z.string().optional(),
  }).optional(),
});

const publicCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/public' }),
  schema: postSchema,
});

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: postSchema,
});

const draftsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/drafts' }),
  schema: postSchema,
});

export const collections = {
  public: publicCollection,
  posts: postsCollection,
  drafts: draftsCollection,
};
