import { MetadataRoute } from 'next';
import { SHOP } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SHOP.name}（RUDE）`,
    short_name: 'RUDE',
    description: SHOP.description,
    lang: 'ja',
    start_url: '/',
    display: 'standalone',
    background_color: '#343440',
    theme_color: '#343440',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
