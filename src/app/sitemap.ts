import { MetadataRoute } from 'next';
import { LAST_UPDATED, absoluteUrl } from '@/lib/site';
import { pages } from '@/data/contents';

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: absoluteUrl(page.href),
    lastModified: LAST_UPDATED,
    changeFrequency: page.href === '/news' ? 'weekly' : 'monthly',
    priority: page.href === '/' ? 1 : 0.8,
  }));
}
