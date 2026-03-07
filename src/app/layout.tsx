import type { Metadata } from 'next'
import './globals.scss'
import './destyle.css'
import { Noto_Sans_JP } from 'next/font/google'
import Header from '@/components/modules/layouts/Header'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: '【カラオケバー・ルード】東中野',
  description: '東中野駅前のカラオケバー・ルード。テーブルチャージ500円＋1時間1,500円で飲み放題・歌い放題。お一人さまも大歓迎。営業時間19:00〜翌2:00頃、定休日：木曜・日曜。',
  metadataBase: new URL('https://rude-site.vercel.app'),
  openGraph: {
    title: '【カラオケバー・ルード】東中野',
    description: '東中野駅前のカラオケバー・ルード。テーブルチャージ500円＋1時間1,500円で飲み放題・歌い放題。お一人さまも大歓迎。営業時間19:00〜翌2:00頃、定休日：木曜・日曜。',
    url: 'https://rude-site.vercel.app',
    siteName: '【カラオケバー・ルード】東中野',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/shop/rude_site_3.jpg',
        width: 1200,
        height: 630,
        alt: '東中野【カラオケバー・ルード】',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【カラオケバー・ルード】東中野',
    description: '東中野駅前のカラオケバー・ルード。テーブルチャージ500円＋1時間1,500円で飲み放題・歌い放題。お一人さまも大歓迎。営業時間19:00〜翌2:00頃、定休日：木曜・日曜。',
    site: '@rude_rockers',
    creator: '@rude_rockers',
    images: ['/images/shop/rude_site_3.jpg'],
  },
  verification: {
    google: 'E0WjjvGn8lXWZM6LFDUjpoNnNkqUE5bQCSbmX1mzq_A',
  },
  alternates: {
    canonical: 'https://rude-site.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
