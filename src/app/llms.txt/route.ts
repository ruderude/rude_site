import { SHOP, absoluteUrl, yen } from '@/lib/site'
import { pages } from '@/data/contents'
import { drinkSections } from '@/data/menu'
import { faqs } from '@/data/faq'

export const dynamic = 'force-static'

// AI アシスタント向けのサイト概要（https://llmstxt.org/）
export function GET() {
  const included = drinkSections.filter((section) => section.included)
  const extra = drinkSections.filter((section) => !section.included)

  const body = `# ${SHOP.name}（RUDE）

> ${SHOP.description}

## 店舗情報

- 店名: ${SHOP.name}（別表記: ${SHOP.alternateNames.join('、')}）
- 業態: カラオケバー（飲み放題・歌い放題）
- 住所: ${SHOP.address.full}
- アクセス: ${SHOP.access.join('／')}
- 営業時間: ${SHOP.hours.text}
- 定休日: ${SHOP.hours.closedText}
- 料金: テーブルチャージ${yen(SHOP.price.tableCharge)}＋1時間ごとに${yen(SHOP.price.perHour)}（飲み放題・歌い放題）。1時間以内${yen(SHOP.price.tableCharge + SHOP.price.perHour)}、2時間${yen(SHOP.price.tableCharge + SHOP.price.perHour * 2)}
- 支払い: ${SHOP.payment.join('、')}
- 喫煙: 可
- フード: 基本なし（お通しの乾き物はおかわり自由）、食べ物の持ち込み無料
- 一人客: 歓迎
- 混雑状況: 公式LINEでリアルタイムに確認可能（${SHOP.links.line}）
- X（旧Twitter）: ${SHOP.links.x}
${SHOP.telephone ? `- 電話: ${SHOP.telephone}\n` : ''}
## ページ

${pages.map((page) => `- [${page.title}](${absoluteUrl(page.href)})`).join('\n')}

## 飲み放題に含まれるドリンク

${included.map((section) => `- ${section.name}: ${section.description}`).join('\n')}

## 別料金メニュー

${extra.map((section) => `- ${section.name}: ${section.items.map((item) => `${item.name}${item.price ? ` ${yen(item.price)}` : ''}`).join('、')}`).join('\n')}

## よくある質問

${faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join('\n\n')}
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
