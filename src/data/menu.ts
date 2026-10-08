// メニュー。画面表示・構造化データ（Menu）・llms.txt の元データ

export interface MenuItem {
  name: string
  price?: number
  note?: string
}

export interface MenuSection {
  name: string
  description: string
  // 飲み放題に含まれるか
  included: boolean
  items: MenuItem[]
}

export const drinkSections: MenuSection[] = [
  {
    name: '焼酎',
    description: '鏡月、いいちこ、黒霧島などが飲み放題です。',
    included: true,
    items: [{ name: '鏡月' }, { name: 'いいちこ' }, { name: '黒霧島' }],
  },
  {
    name: 'ビール',
    description: '瓶ビールが飲み放題となっております。',
    included: true,
    items: [{ name: '瓶ビール' }],
  },
  {
    name: 'ウイスキー・バーボン',
    description: '角、ジャックダニエル、ジムビームが飲み放題になります。',
    included: true,
    items: [{ name: '角' }, { name: 'ジャックダニエル' }, { name: 'ジムビーム' }],
  },
  {
    name: 'その他カクテル',
    description: '店内にあるリキュールからお好みのカクテルを注文できます。飲み放題に入ります。',
    included: true,
    items: [{ name: 'カクテル各種' }],
  },
  {
    name: 'ワイン',
    description: 'グラスの赤ワインが飲み放題に入っています。',
    included: true,
    items: [{ name: 'グラスワイン（赤）' }],
  },
  {
    name: 'ソフトドリンク・割りもの',
    description: '割もの代・ソフトドリンクは飲み放題に入っています。',
    included: true,
    items: [{ name: 'ソフトドリンク各種' }],
  },
  {
    name: 'テキーラ（別料金）',
    description: 'テキーラなど一部のショットは別料金です。',
    included: false,
    items: [
      { name: 'イエガー・マイスター', price: 500 },
      { name: 'クエルボ・シルバー', price: 500 },
      { name: 'クエルボ・ゴールド', price: 500 },
      { name: 'クエルボ1800', price: 1000 },
    ],
  },
  {
    name: 'ボトル（別料金）',
    description: 'ボトルの赤・白ワイン、スパークリングワイン、シャンパンは以下の追加料金となります。',
    included: false,
    items: [
      { name: 'ボトルワイン（赤・白）', price: 5000 },
      { name: 'スパークリングワイン', price: 6000 },
      { name: 'モエ・シャンドン・白', price: 16000 },
      { name: 'ヴーヴ・クリコ・イエロー', price: 18000 },
      { name: 'モエ・シャンドン・ロゼ', price: 18000 },
    ],
  },
  {
    name: 'スタッフへのドリンク',
    description: 'ありがたく頂戴します。',
    included: false,
    items: [{ name: 'スタッフドリンク（1杯）', price: 1000 }],
  },
]
