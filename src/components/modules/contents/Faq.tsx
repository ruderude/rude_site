import Link from 'next/link'
import styles from './faq.module.scss'
import { MdOutlineQuiz } from 'react-icons/md'
import { faqs } from '@/data/faq'

export const Faq = () => {
  return (<>
    <div className={styles.main}>
      <div className={styles.title_area}>
        <p className={styles.title}>
          <MdOutlineQuiz color={'#e94560'} />
          FAQ
        </p>
      </div>

      <br />

      <div className={styles.sub_title_area}>
        <h1 className={styles.sub_title}>
          東中野のカラオケバー・ルード：よくある質問
        </h1>
      </div>

      <div className={styles.list}>
        {faqs.map((faq) => (
          <details key={faq.question} className={styles.item} open>
            <summary className={styles.question}>
              <h2>Q. {faq.question}</h2>
            </summary>
            <p className={styles.answer}>A. {faq.answer}</p>
          </details>
        ))}
      </div>

      <p className={styles.more}>
        ほかにも気になることがあれば<Link href="/contact" scroll={false}>お問い合わせ</Link>からどうぞ。
      </p>
    </div>
  </>)
}
