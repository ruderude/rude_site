import { CommentType } from '@/types/types'

// トップのカードとハンバーガーメニューに並ぶページ
export const contents = [
  {
    name: CommentType.news,
    href: '/news',
    text: "News & Staff",
    detail: "（お知らせとスタッフ紹介）",
    image: '/images/contents/rude_logo_icon_white.png',
    alt: 'カラオケバー・ルードのロゴ',
  },
  {
    name: CommentType.what,
    href: '/',
    text: "What's Rude?",
    detail: "（どんなお店？）",
    image: '/images/contents/microphone-min.jpg',
    alt: 'カラオケのマイク',
  },
  {
    name: CommentType.menu,
    href: '/menu',
    text: "Grand menu",
    detail: "（メニュー）",
    image: '/images/contents/menu-min.jpg',
    alt: 'ドリンクメニュー',
  },
  {
    name: CommentType.contact,
    href: '/contact',
    text: "Contact",
    detail: "（お問い合わせ）",
    image: '/images/contents/contact-min.png',
    alt: 'お問い合わせ',
  },
];

// カード以外も含めた全ページ（ハンバーガーメニュー・フッター・sitemap・llms.txt で使う）
export const pages = [
  { name: CommentType.what, href: '/', text: "What's Rude?", detail: '（どんなお店？）', title: 'トップ・店舗情報' },
  { name: CommentType.news, href: '/news', text: 'News & Staff', detail: '（お知らせとスタッフ紹介）', title: 'お知らせ・スタッフ紹介' },
  { name: CommentType.menu, href: '/menu', text: 'Grand menu', detail: '（メニュー・料金）', title: 'メニュー・料金システム' },
  { name: CommentType.faq, href: '/faq', text: 'FAQ', detail: '（よくある質問）', title: 'よくある質問' },
  { name: CommentType.contact, href: '/contact', text: 'Contact', detail: '（お問い合わせ・アクセス）', title: 'お問い合わせ・アクセス' },
] as const

export const pageTypeFromPath = (pathname: string) =>
  pages.find((page) => page.href === pathname)?.name ?? CommentType.what
