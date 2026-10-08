import type { Metadata } from 'next'
import { SHOP } from '@/lib/site'

// OGP画像（1200×630）。料金や営業時間を変えたら画像も作り直すこと
export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: '東中野のカラオケバー・ルード（RUDE）店内とテーブルチャージ500円＋1時間1,500円の料金',
}

// 各ページ用の metadata。openGraph はページ側で上書きすると丸ごと置き換わるので、共通項目もここで埋める
export const pageMetadata = ({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: `${title}｜${SHOP.name}`,
    description,
    url: path,
    siteName: SHOP.name,
    locale: 'ja_JP',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title}｜${SHOP.name}`,
    description,
    site: '@rude_rockers',
    creator: '@rude_rockers',
    images: [OG_IMAGE.url],
  },
})
