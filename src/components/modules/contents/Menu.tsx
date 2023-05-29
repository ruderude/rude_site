import { useRef, useState, useEffect } from "react"
import Image from 'next/image'
import styles from './menu.module.scss'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { MdLiquor, MdOutlineLiquor, MdOutlineRestaurantMenu } from 'react-icons/md'
import { AiOutlinePayCircle } from 'react-icons/ai'

export const Menu = () => {
  const image_gaikan_1 = '/images/shop/S__8183843-min.jpg'

  return (<>
    <div className={styles.main}>
      <div className={styles.title_area}>
        <h1 className={styles.title}>
          <HiOutlineInformationCircle color={'white'} />
          Menu
        </h1>
      </div>

      <br />

      <div className={styles.sub_title_area}>
        <h2 className={styles.sub_title}>
          東中野にあるカラオケバー・るーど：メニュー
        </h2>
      </div>

      <br />

      <div>
        <p className={styles.text}>
          <span className={styles.menu_title}><MdOutlineRestaurantMenu />システム</span><br /><br />
          　入店時に発生するテーブルチャージが<b>1,000円</b>。<br />
          その後1時間ごとに<b>1,000円</b>が追加されます。<br /><br />

          例）入店し、1時間以内に退店した場合、2,000円のお会計となります。<br /><br />

          飲み物は、飲み放題（一部追い金アリ）<br /><br />

          カラオケは歌い放題となります。<br /><br />

          ・お通しにスナックなど乾き物がでます。（おかわり可）<br />
          ・基本的にフードメニューはありません。<br />
          ・食べ物の持ち込み可能です。（持ち込み量無料です）<br /><br />

          <span className={styles.menu_title}><MdLiquor />ドリンクメニュー</span><br /><br />

          ※割もの代・ソフトドリンクは飲み放題に入っています。<br /><br />

          ▼焼酎<br />
          鏡月、黒霧島、喜界島、極上宝焼酎、などが飲み放題です。<br />
          吉四六、森以蔵など一部のものに関しては1杯あたり500円の追金となります。<br />
          日本酒は取り扱っていません。<br /><br />

          ▼ビール<br />
          瓶ビールが飲み放題となっております。<br /><br />

          ▼ウイスキー・バーボン・スコッチ<br />
          角、ジャックダニエルが飲み放題になります。<br />
          その他、グレンフィディック、I.W.ハーパー、メイカーズマーク、アードベック、ラフロイグなど一部のものに関しては1杯あたり500円の追金となります。<br /><br />

          ▼ワイン・シャンパン<br />
          グラスの赤ワインが飲み放題に入っています。<br />
          その他、ボトルの赤・白ワイン、スパークリングワイン、シャンパンなどについては以下の追加料金となります。<br /><br />

          <span className={styles.menu_title}><MdOutlineLiquor />ボトルメニュー</span><br /><br />
          ・ボトルワイン（赤・白）：5,000円<br />
          ・スパークリングワイン：6,000円<br />
          ・モエ・シャンドン・白：12,000円<br />
          ・ヴーヴ・クリコ・イエロー：14,000円<br />
          ・モエ・シャンドン・ロゼ：16,000円<br /><br />

          ▼テキーラ<br />
          クエルボのシルバー・ゴールドが飲み放題に入ります。<br />
          その他、アネホ1800など一部のものに関しては1杯あたり500円の追金となります。<br /><br />

          ▼その他カクテル<br />
          店内にあるリキュールからお好みのカクテルを注文できます。<br />
          飲み放題に入ります。<br /><br />

          ▼スタッフへのドリンク<br />
          ありがたく頂戴します。<br />
          １杯あたり1,000円いただきます。<br /><br />


          <span className={styles.menu_title}><AiOutlinePayCircle />支払い</span><br /><br />
          現金払いのほか、カード決済、PayPayでの決済がご利用できます。<br />
        </p>
      </div>
    </div>
  </>)
}


