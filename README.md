# カラオケバー・ルード（RUDE）公式サイト

東中野駅前のカラオケバー・ルードの公式サイト。Next.js（App Router）製、Vercel にデプロイしている。

## 開発

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

## ページ構成

| URL | 内容 |
| --- | --- |
| `/` | どんなお店？（店舗情報・アクセス・店内写真） |
| `/news` | お知らせ・スタッフ紹介 |
| `/menu` | メニュー・料金システム |
| `/faq` | よくある質問 |
| `/contact` | お問い合わせ・アクセス |
| `/llms.txt` | AI アシスタント向けのサイト概要 |
| `/sitemap.xml` `/robots.txt` `/manifest.webmanifest` | 自動生成 |

## 情報を更新するとき

店舗情報は 1 か所にまとめてあり、画面・構造化データ（JSON-LD）・llms.txt に自動で反映される。

- 店名・住所・営業時間・料金・SNS: `src/lib/site.ts`
  - 内容を更新したら `LAST_UPDATED` も書き換える（sitemap の更新日になる）
  - 電話番号を公開する場合は `telephone` に記入
  - Googleビジネスプロフィール・食べログ等に掲載したら `sameAs` に URL を追加
- ドリンクメニュー: `src/data/menu.ts`
- よくある質問: `src/data/faq.ts`
- お知らせ・イベント: `src/data/news.ts`（`startDate` を入れると Event の構造化データも出力される）

料金や営業時間を変えたときは、OGP 画像 `public/og-image.png` にも料金が書かれているので作り直すこと。

## 環境変数

| 変数 | 内容 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 本番 URL（独自ドメインに移行したら設定。未設定時は `https://rude-site.vercel.app`） |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` / `NEXT_PUBLIC_EMAILJS_SERVICE_ID` / `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | お問い合わせフォーム（EmailJS） |
