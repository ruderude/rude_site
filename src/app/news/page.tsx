import { NewsStaff } from '@/components/modules/contents'
import { JsonLd, breadcrumbJsonLd, eventsJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/metadata'
import { news } from '@/data/news'

export const metadata = pageMetadata({
  title: 'お知らせ・スタッフ紹介',
  description: '東中野のカラオケバー・ルード（RUDE）のイベント・お知らせとスタッフ紹介。カラオケ大会などのイベント情報や、テキーラ好きの個性豊かなスタッフをご紹介します。',
  path: '/news',
})

export default function NewsPage() {
  return (<>
    <JsonLd data={[breadcrumbJsonLd([{ name: 'お知らせ・スタッフ紹介', path: '/news' }]), ...eventsJsonLd(news)]} />
    <NewsStaff />
  </>)
}
