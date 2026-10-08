import { Faq } from '@/components/modules/contents'
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'よくある質問',
  description: '東中野のカラオケバー・ルード（RUDE）のよくある質問。一人でも入れる？料金は？何時まで？タバコは吸える？食べ物の持ち込みは？などにお答えします。',
  path: '/faq',
})

export default function FaqPage() {
  return (<>
    <JsonLd data={[breadcrumbJsonLd([{ name: 'よくある質問', path: '/faq' }]), faqJsonLd()]} />
    <Faq />
  </>)
}
