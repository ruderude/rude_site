import './globals.scss'
import './destyle.css'
import { Inter } from 'next/font/google'
import Header from '@/components/modules/layouts/Header'

const inter = Inter({ subsets: ['latin'] })
const siteTitle= '【カラオケバー・ルード】東中野';
const description = `東中野にあるカラオケバー・るーどは、小さなカラオケバーです。
お酒を飲みながら、カラオケを楽しむことができます。
お酒は、ビール、ハイボール、ウイスキー、焼酎、日本酒、ワイン、カクテルなどを ご用意しております。
メニューは、テーブルチャージが1,000円、１時間ごとに1,000円の飲み放題・歌い放題のシステムとなっております。
また、貸切イベントをやりたい方、一日店長をやりたい方などお気軽にお問い合わせください。（定休日の木曜日・日曜日推奨
カラオケバー・るーど
営業時間：18:00〜翌2:00
定休日：木曜日・日曜日
料金システム：テーブルチャージ1,000円、１時間ごとに1,000円の飲み放題・歌い放題（詳しくはMENUから）
住所：〒169-0073 東京都中野区東中野4-1-1 英ビル2F`;
const url = 'https://rude-site.vercel.app';

export const metadata = {
  title: siteTitle,
  description: description,
  openGraph: {
    title: siteTitle,
    description: description,
    url: url,
    siteName: siteTitle,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: description,
    site: '@rude_rockers',
    creator: '@rude_rockers',
  },
  verification: {
    google: 'E0WjjvGn8lXWZM6LFDUjpoNnNkqUE5bQCSbmX1mzq_A',
  },
  alternates: {
    canonical: url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="back_renga">
        <Header />
        {children}
      </body>
    </html>
  )
}
