import type { Metadata } from 'next'
import './globals.scss'
import './destyle.css'
import { Noto_Sans_JP } from 'next/font/google'
import Header from '@/components/modules/layouts/Header'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: '【カラオケバー・ルード】東中野',
  description: `東中野にあるカラオケバー・ルードは、小さなカラオケバーです。
お酒を飲みながら、カラオケを楽しむことができます。
お酒は、ビール、ハイボール、焼酎、ワイン、カクテルなどを ご用意しております。
メニューは、テーブルチャージが500円、1時間ごとに1,500円の飲み放題・歌い放題のシステムとなっており、お一人さまでも気軽に楽しめる店です。
カラオケバー・ルード
営業時間：18:00〜翌2:00くらい
定休日：木曜日・日曜日
料金システム：テーブルチャージ500円、1時間ごとに1,500円の飲み放題・歌い放題（詳しくはMENUから）
住所：〒164-0003 東京都中野区東中野4丁目1-1 英ビル2階`,
  metadataBase: new URL('https://rude-site.vercel.app'),
  openGraph: {
    title: '【カラオケバー・ルード】東中野',
    description: '東中野にあるカラオケバー・ルードは、小さなカラオケバーです。',
    url: 'https://rude-site.vercel.app',
    siteName: '【カラオケバー・ルード】東中野',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/shop/S__9019461-min.jpg',
        width: 1200,
        height: 630,
        alt: '東中野【カラオケバー・ルード】',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【カラオケバー・ルード】東中野',
    description: '東中野にあるカラオケバー・ルードは、小さなカラオケバーです。',
    site: '@rude_rockers',
    creator: '@rude_rockers',
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
