import Image from 'next/image'
import Link from 'next/link'
import styles from './what.module.scss'
import { Map } from '@/components/blocks'
import { Gallery } from './Gallery'
import { BiSearchAlt } from 'react-icons/bi'
import { MdOutlineRestaurantMenu, MdOutlineStorefront, MdOutlineTrain } from 'react-icons/md'
import { SHOP } from '@/lib/site'

export const What = () => {
  return (<>
    <div className={styles.main}>
      <div className={styles.title_area}>
        <p className={styles.title}>
          <BiSearchAlt color={'#e94560'} />
          What
        </p>
      </div>

      <br />

      <div className={styles.sub_title_area}>
        <h1 className={styles.sub_title}>
          東中野にあるカラオケバー・ルードってどんなお店？
        </h1>
      </div>

      <br />

      <div>
        <div className={styles.text}>
          <p>
            　東中野にあるカラオケバー・ルード（RUDE）は、JR東中野駅の目の前にある小さなカラオケバーです。<br />
            お酒を飲みながら、カラオケを楽しむことができます。<br />
            お酒は、ビール、ハイボール、焼酎、ワイン、カクテルなどを ご用意しております。<br />
            メニューは、テーブルチャージが500円、1時間ごとに1,500円の飲み放題・歌い放題のシステムとなっております。<br />
            お一人さまでも気軽に楽しめる店です。昭和・平成・令和の曲まで、世代を問わず好きな歌を歌えます。<br /><br />
          </p>
          <h2 className={styles.text_title}><MdOutlineRestaurantMenu />システム</h2><br />
          <div className={styles.text_detail}>
            ※喫煙可
          </div>
          <div className={styles.text_price}>
            テーブルチャージ：<span className={styles.big_text}>500円</span> <br />
            １時間（飲み歌い放題）：<span className={styles.big_text}>1,500円</span>
          </div><br />
          <p>
            　入店時に発生するテーブルチャージが<b>500円</b>。<br />
            その後1時間ごとに<b>1,500円</b>が追加されます。<br />
            例）1時間以内なら2,000円、2時間なら3,500円のお会計です。<br /><br />

            詳しくはMENUから→<Link href="/menu" scroll={false} className={styles.site_link}>MENU</Link><br /><br />

            また、貸切イベントをやりたい方、一日店長をやりたい方などお気軽にお問い合わせください。（定休日の木曜日・日曜日推奨）→<Link href="/contact" scroll={false} className={styles.site_link}>お問い合わせ</Link>
            <br /><br />
            また、リアルタイムで店内の混雑状況が見れる公式LINEアカウントが便利です！<br />
            <span className={styles.site_link}><a href={SHOP.links.line} target="_blank" rel="noopener noreferrer">RUDE公式LINEアカウント</a></span>
            <br /><br />
            よくある質問は→<Link href="/faq" scroll={false} className={styles.site_link}>FAQ</Link>
            <br /><br />
          </p>

          <h2 className={styles.text_title}><MdOutlineStorefront />店舗情報</h2>
          <dl className={styles.shop_info}>
            <dt>店名</dt>
            <dd>{SHOP.name}（RUDE）</dd>
            <dt>住所</dt>
            <dd>{SHOP.address.full}</dd>
            <dt>営業時間</dt>
            <dd>{SHOP.hours.text}</dd>
            <dt>定休日</dt>
            <dd>{SHOP.hours.closedText}</dd>
            <dt>料金</dt>
            <dd>テーブルチャージ500円、1時間ごとに1,500円の飲み放題・歌い放題（詳しくは<Link href="/menu" scroll={false} className={styles.site_link}>MENU</Link>から）</dd>
            <dt>支払い</dt>
            <dd>{SHOP.payment.join('・')}</dd>
            <dt>喫煙</dt>
            <dd>喫煙可</dd>
            <dt>持ち込み</dt>
            <dd>食べ物の持ち込み無料</dd>
          </dl>
          <br />

          <h2 className={styles.text_title}><MdOutlineTrain />アクセス</h2>
          <ul className={styles.access_list}>
            {SHOP.access.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li>駅の目の前なので、終電ギリギリまで楽しめます</li>
          </ul>
        </div>
      </div>

      <br />

      <div>
        <Image
          src={SHOP.images.exterior}
          alt="東中野駅前のカラオケバー・ルードが入るビルの外観（2階に「RUDE カラオケバーるーど」の看板）"
          width={1108}
          height={1478}
          sizes="(max-width: 432px) 100vw, 400px"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </div>

      <br />

      <Map />

      <br />

      <h2 className={styles.text_title_center}>店内の様子</h2>
      <Gallery />

      <br />

      <p className={styles.text}>
        ぜひ一度遊びにきてください。
      </p>
    </div>
  </>)
}
