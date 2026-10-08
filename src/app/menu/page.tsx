import { Menu } from '@/components/modules/contents'
import { JsonLd, breadcrumbJsonLd, menuJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'メニュー・料金システム',
  description: '東中野のカラオケバー・ルード（RUDE）のメニューと料金。テーブルチャージ500円＋1時間1,500円でビール・焼酎・ウイスキー・カクテルが飲み放題、カラオケ歌い放題。1時間2,000円、2時間3,500円が目安。',
  path: '/menu',
})

export default function MenuPage() {
  return (<>
    <JsonLd data={[breadcrumbJsonLd([{ name: 'メニュー・料金システム', path: '/menu' }]), menuJsonLd()]} />
    <Menu />
  </>)
}
