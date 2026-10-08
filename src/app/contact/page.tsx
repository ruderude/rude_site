import { Contact } from '@/components/modules/contents'
import { JsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'お問い合わせ・アクセス',
  description: '東中野のカラオケバー・ルード（RUDE）へのお問い合わせとアクセス。東京都中野区東中野4丁目1-1 英ビル2階、JR東中野駅東口北側を出て目の前。貸切イベントや一日店長のご相談も受付中。',
  path: '/contact',
})

export default function ContactPage() {
  return (<>
    <JsonLd data={breadcrumbJsonLd([{ name: 'お問い合わせ・アクセス', path: '/contact' }])} />
    <Contact />
  </>)
}
