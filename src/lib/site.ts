// サイト全体で使う店舗情報・URL。
// 表記ゆれを防ぐため、店名・住所・営業時間などはここだけで管理する。

// 独自ドメインに移行したら環境変数 NEXT_PUBLIC_SITE_URL を設定するだけで全体が切り替わる
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rude-site.vercel.app').replace(/\/$/, '')

// サイトの内容を最後に更新した日（sitemap の lastmod に使う）。内容を更新したら書き換える
export const LAST_UPDATED = '2026-10-08'

export const SHOP = {
  name: 'カラオケバー・ルード',
  alternateNames: ['RUDE', 'ルード', 'カラオケバー・RUDE', 'カラオケバーるーど', 'Karaoke Bar RUDE'],
  catchCopy: '東中野駅前の飲み放題・歌い放題カラオケバー',
  description:
    '東中野駅前のカラオケバー・ルード（RUDE）。テーブルチャージ500円＋1時間1,500円で飲み放題・歌い放題。お一人さまも大歓迎。営業時間19:00〜翌2:00頃、定休日：木曜・日曜。',
  // 電話番号を公開する場合はここに記入（例: '03-xxxx-xxxx'）。空なら構造化データにも出さない
  telephone: '',
  address: {
    postalCode: '164-0003',
    region: '東京都',
    locality: '中野区',
    street: '東中野4丁目1-1 英ビル2階',
    full: '〒164-0003 東京都中野区東中野4丁目1-1 英ビル2階',
  },
  geo: { latitude: 35.70652, longitude: 139.68368 },
  access: [
    'JR中央線・総武線「東中野駅」東口北側を出て目の前（改札から徒歩約20秒）',
    '1階がトルコ料理店のビルの2階',
    '新宿駅から総武線で2駅、中野駅から1駅',
  ],
  hours: {
    text: '19:00〜翌2:00頃',
    opens: '19:00',
    closes: '02:00',
    openDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
    closedText: '木曜日・日曜日',
  },
  price: {
    tableCharge: 500,
    perHour: 1500,
    range: '¥2,000〜¥3,500',
  },
  payment: ['現金', 'クレジットカード', 'PayPay'],
  smoking: true,
  links: {
    x: 'https://x.com/rude_rockers',
    line: 'https://line.me/R/ti/p/@857qlwqm',
    googleMap: 'https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E9%87%8E%E5%8C%BA%E6%9D%B1%E4%B8%AD%E9%87%8E4-1-1+%E8%8B%B1%E3%83%93%E3%83%AB',
  },
  // Googleビジネスプロフィール・食べログなどに掲載したら URL を追加する（構造化データの sameAs に入る）
  sameAs: [] as string[],
  images: {
    exterior: '/images/shop/S__8183843-min.jpg',
    interior: '/images/shop/S__8183850-min.jpg',
    stage: '/images/shop/S__9019460-min.jpg',
    logo: '/images/contents/rude_logo_icon_white.png',
  },
} as const

export const absoluteUrl = (path: string) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

export const yen = (n: number) => `${n.toLocaleString('ja-JP')}円`
