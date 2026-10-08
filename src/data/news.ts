// お知らせ・イベント。新しいものを先頭に追加する
// startDate / endDate を入れたものはイベントとして構造化データ（Event）にも出力される
// 例:
// {
//   date: '2026-10-01',
//   title: 'カラオケ大会開催！',
//   body: '優勝者にはテキーラ1本プレゼント。',
//   startDate: '2026-10-24T19:00:00+09:00',
//   endDate: '2026-10-25T02:00:00+09:00',
// },

export interface NewsItem {
  date: string
  title: string
  body: string
  startDate?: string
  endDate?: string
}

export const news: NewsItem[] = []
