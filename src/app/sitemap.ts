import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rude-site.vercel.app',
      lastModified: new Date(),
    },
  ];
}