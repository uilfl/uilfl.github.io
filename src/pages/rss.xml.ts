import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { sortByDate, getPostSlug } from '@/lib/posts';
import { siteConfig } from '@/config';

export async function GET(context: APIContext) {
  const posts = sortByDate(await getCollection('public'));

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date ?? new Date(),
      link: `/${getPostSlug(post)}/`,
      categories: post.data.categories,
    })),
  });
}
