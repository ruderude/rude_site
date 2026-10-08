import Link from 'next/link'
import styles from './footer.module.scss'
import { SHOP } from '@/lib/site'
import { pages } from '@/data/contents'

// 全ページ共通のフッター。店名・住所・営業時間（NAP）を全ページに載せる
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.shop}>
          <p className={styles.shop_name}>{SHOP.name}（RUDE）</p>
          <address className={styles.address}>
            {SHOP.address.full}<br />
            {SHOP.access[0]}<br />
            営業時間：{SHOP.hours.text}／定休日：{SHOP.hours.closedText}<br />
            料金：テーブルチャージ500円＋1時間1,500円（飲み放題・歌い放題）
            {SHOP.telephone && (<><br />TEL：<a href={`tel:${SHOP.telephone}`}>{SHOP.telephone}</a></>)}
          </address>
        </div>

        <nav aria-label="サイト内リンク">
          <ul className={styles.links}>
            {pages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} scroll={false}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles.links}>
          <li><a href={SHOP.links.x} target="_blank" rel="noopener noreferrer">X（旧Twitter）</a></li>
          <li><a href={SHOP.links.line} target="_blank" rel="noopener noreferrer">公式LINE（混雑状況）</a></li>
          <li><a href={SHOP.links.googleMap} target="_blank" rel="noopener noreferrer">Googleマップ</a></li>
        </ul>

        <p className={styles.copyright}>&copy; {SHOP.name}</p>
      </div>
    </footer>
  )
}
