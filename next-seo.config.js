const siteTitle = "【カラオケバー・ルード】東中野";
const description = `東中野にあるカラオケバー・ルードは、小さなカラオケバーです。
お酒を飲みながら、カラオケを楽しむことができます。
お酒は、ビール、ハイボール、焼酎、ワイン、カクテルなどを ご用意しております。
メニューは、テーブルチャージが500円、1時間ごとに1,500円の飲み放題・歌い放題のシステムとなっております。
カラオケバー・ルード
営業時間：18:00〜翌2:00くらい
定休日：木曜日・日曜日
料金システム：テーブルチャージ500円、1時間ごとに1,500円の飲み放題・歌い放題（詳しくはMENUから）
住所：〒164-0003 東京都中野区東中野4丁目1-1 英ビル2階`;
const url = "https://rude-site.vercel.app";
const image_naikan_5 = "/images/shop/S__9019461-min.jpg";

const seoConfig = {
  title: siteTitle,
  description: description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: url,
    site_name: siteTitle,
    images: [
      {
        url: image_naikan_5,
        width: 1200,
        height: 630,
        alt: "東中野【カラオケバー・ルード】",
      },
    ],
  },
  twitter: {
    handle: "@rude_rockers",
    site: "@rude_rockers",
    cardType: "summary_large_image",
  },
};

export default seoConfig;
