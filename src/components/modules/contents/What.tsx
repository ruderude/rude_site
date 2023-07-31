import { useRef, useState, useEffect } from "react"
import Image from 'next/image'
import styles from './what.module.scss'
import { Map } from '@/components/blocks'
import { CommentType, WhatProps } from '@/types/types'
import { BiSearchAlt } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { MdLiquor, MdOutlineLiquor, MdOutlineRestaurantMenu } from 'react-icons/md'


export const What = ({clickContent}: WhatProps) => {
  const image_gaikan_1 = '/images/shop/S__8183843-min.jpg'
  const image_naikan_1 = '/images/shop/S__9019455-min.jpg'
  const image_naikan_2 = '/images/shop/S__8183850-min.jpg'
  const image_naikan_3 = '/images/shop/S__9019458-min.jpg'
  const image_naikan_4 = '/images/shop/S__9019460-min.jpg'
  const image_naikan_5 = '/images/shop/S__9019461-min.jpg'
  const image_naikan_6 = '/images/shop/S__9019462-min.jpg'
  const image_naikan_7 = '/images/shop/S__9019465-min.jpg'
  const image_naikan_8 = '/images/shop/S__9068570-min.jpg'


  return (<>
    <div className={styles.main}>
      <div className={styles.title_area}>
        <h1 className={styles.title}>
          <BiSearchAlt color={'white'} />
          What
        </h1>
      </div>

      <br />

      <div className={styles.sub_title_area}>
        <h2 className={styles.sub_title}>
          東中野にあるカラオケバー・るーどってどんなお店？
        </h2>
      </div>

      <br />

      <div>
        <div className={styles.text}>
          　東中野にあるカラオケバー・るーどは、小さなカラオケバーです。<br />
          お酒を飲みながら、カラオケを楽しむことができます。<br /><br />
          <div className={styles.text_title}><MdOutlineRestaurantMenu />システム</div><br />
          <div className={styles.text_detail}>
            ※喫煙可
          </div>
          <div className={styles.text_price}>
            テーブルチャージ：<span className={styles.big_text}>1,000円</span> <br />
            １時間（飲み歌い放題）：<span className={styles.big_text}>1,000円</span>
          </div><br />
          　入店時に発生するテーブルチャージが<b>1,000円</b>。<br />
          その後1時間ごとに<b>1,000円</b>が追加されます。<br /><br />

          詳しくはMENUから→<span className={styles.site_link} onClick={() => clickContent(CommentType.menu)}>MENU</span><br /><br />

          また、貸切イベントをやりたい方、一日店長をやりたい方などお気軽にお問い合わせください。（定休日の木曜日・日曜日推奨）→<span className={styles.site_link} onClick={() => clickContent(CommentType.contact)}>お問い合わせ</span>
          <br /><br />
          <span className={styles.shop_title}>カラオケバー・るーど</span><br />
          営業時間：18:00〜翌2:00くらい<br />
          定休日：木曜日・日曜日<br />
          料金システム：テーブルチャージ1,000円、１時間ごとに1,000円の飲み放題・歌い放題（詳しくはMENUから）<br />
          住所：〒164-0003 東京都中野区東中野4丁目1-1 英ビル2階<br />
        </div>
      </div>

      <br />

      <div className={styles.image}>
        <Image
          src={image_gaikan_1}
          alt="RUDE外観"
          width={1108}
          height={1478}
          sizes="auto"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
          }}
        />
      </div>

      <br />

      <Map />

      <br />

      <div>
        <br />

        <div className={styles.image}>
          <Image
            src={image_naikan_1}
            alt="RUDE内観"
            width={1108}
            height={1478}
            sizes="auto"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.image}>
          <Image
            src={image_naikan_2}
            alt="RUDE内観"
            width={1108}
            height={1478}
            sizes="auto"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.image}>
          <Image
            src={image_naikan_4}
            alt="RUDE内観"
            width={1108}
            height={1478}
            sizes="auto"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.image}>
          <Image
            src={image_naikan_5}
            alt="RUDE内観"
            width={1108}
            height={1478}
            sizes="auto"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.image}>
          <Image
            src={image_naikan_6}
            alt="RUDE内観"
            width={1108}
            height={1478}
            sizes="auto"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.image}>
          <Image
            src={image_naikan_7}
            alt="RUDE内観"
            width={1108}
            height={1478}
            sizes="auto"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.image}>
          <Image
            src={image_naikan_8}
            alt="RUDE内観"
            width={1108}
            height={1478}
            sizes="auto"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
          />
        </div>

        <br />

        <p className={styles.text}>
          ぜひ一度遊びにきてください。
        </p>
      </div>
    </div>
  </>)
}

