import type { Metadata, Viewport } from 'next'
import './globals.scss'
import './destyle.css'
import { Noto_Sans_JP } from 'next/font/google'
import SiteShell from '@/components/modules/layouts/SiteShell'
import { JsonLd, barJsonLd, websiteJsonLd } from '@/lib/jsonld'
import { SHOP, SITE_URL } from '@/lib/site'
import { OG_IMAGE } from '@/lib/metadata'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '700', '900'] })

const defaultTitle = '東中野のカラオケバー・ルード（RUDE）｜飲み放題・歌い放題 1時間1,500円'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s｜東中野のカラオケバー・ルード（RUDE）`,
  },
  description: SHOP.description,
  applicationName: SHOP.name,
  keywords: ['東中野', 'カラオケバー', 'バー', '飲み放題', '歌い放題', '一人飲み', '中野区', 'ルード', 'RUDE'],
  openGraph: {
    title: defaultTitle,
    description: SHOP.description,
    url: '/',
    siteName: SHOP.name,
    locale: 'ja_JP',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: SHOP.description,
    site: '@rude_rockers',
    creator: '@rude_rockers',
    images: [OG_IMAGE.url],
  },
  verification: {
    google: 'E0WjjvGn8lXWZM6LFDUjpoNnNkqUE5bQCSbmX1mzq_A',
  },
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#343440',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body>
        <JsonLd data={[barJsonLd(), websiteJsonLd()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
