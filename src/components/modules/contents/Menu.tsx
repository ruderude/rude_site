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
          東中野にあるカラオケバー・ルード：メニュー
        </h2>
      </div>

      <br />

      <div>
        <div className={styles.text}>
          <span className={styles.menu_title}><MdOutlineRestaurantMenu />システム</span><br /><br />
          <div className={styles.text_detail}>
            ※喫煙可
          </div>
          <div className={styles.text_price}>
            テーブルチャージ：<span className={styles.big_text}>500円</span> <br />
            １時間：<span className={styles.big_text}>1,500円</span>
          </div><br />

          　入店時に発生するテーブルチャージが<b>500円</b>。<br />
          その後1時間ごとに<b>1,500円</b>が追加されます。<br /><br />

          例）入店し、1時間以内に退店した場合、2,000円のお会計となります。<br />
          例）2時間滞在した場合、3,500円のお会計となります。<br /><br />

          飲み物は、飲み放題（一部追い金アリ）<br /><br />

          カラオケは歌い放題となります。<br /><br />

          ・店舗のLINE公式を追加いただく事でお通しにスナックなど乾き物がでます（おかわり自由）<br />
          ・基本的にフードメニューはありません。<br />
          ・食べ物の持ち込み可能です。（持ち込み料無料です）<br /><br />

          <span className={styles.menu_title}><MdLiquor />ドリンクメニュー</span><br /><br />

          ※割もの代・ソフトドリンクは飲み放題に入っています。<br /><br />

          <span className={styles.drink_title}>▼焼酎</span><br />
          鏡月、いいちこ、黒霧島などが飲み放題です。<br /><br />

          <span className={styles.drink_title}>▼ビール</span><br />
          瓶ビールが飲み放題となっております。<br /><br />

          <span className={styles.drink_title}>▼ウイスキー・バーボン</span><br />
          角、ジャックダニエル、ジムビームが飲み放題になります。<br /><br />

          <span className={styles.drink_title}>▼テキーラ（別料金）</span><br />
          イエガー・マイスター　500円<br />
          クエルボ・シルバー　500円<br />
          クエルボ・ゴールド　500円<br />
          クエルボ1800　1,000円br<br /><br />

          <span className={styles.drink_title}>▼その他カクテル</span><br />
          店内にあるリキュールからお好みのカクテルを注文できます。<br />
          飲み放題に入ります。<br /><br />

          <span className={styles.drink_title}>▼ワイン・シャンパン</span><br />
          グラスの赤ワインが飲み放題に入っています。<br />
          その他、ボトルの赤・白ワイン、スパークリングワイン、シャンパンなどについては以下の追加料金となります。<br /><br />

          <span className={styles.menu_title}><MdOutlineLiquor />ボトルメニュー</span><br /><br />
          ・ボトルワイン（赤・白）：5,000円<br />
          ・スパークリングワイン：6,000円<br />
          ・モエ・シャンドン・白：16,000円<br />
          ・ヴーヴ・クリコ・イエロー：18,000円<br />
          ・モエ・シャンドン・ロゼ：18,000円<br /><br />

          <span className={styles.drink_title}>▼スタッフへのドリンク</span><br />
          ありがたく頂戴します。<br />
          １杯あたり1,000円になります。<br /><br />


          <span className={styles.menu_title}><AiOutlinePayCircle />支払い</span><br /><br />
          現金払いのほか、カード決済、PayPayでの決済がご利用できます。<br />
        </div>
      </div>
    </div>
  </>)
}


