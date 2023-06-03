import { useRef, useState, useEffect } from "react"
import Image from 'next/image'
import styles from './what.module.scss'
import { Map } from '@/components/blocks'
import { CommentType, WhatProps } from '@/types/types'
import { BiSearchAlt } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import { HiOutlineInformationCircle } from 'react-icons/hi'


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
        <p className={styles.text}>
          　東中野にあるカラオケバー・るーどは、小さなカラオケバーです。<br />
          お酒を飲みながら、カラオケを楽しむことができます。<br />
          お酒は、ビール、ハイボール、ウイスキー、焼酎、日本酒、ワイン、カクテルなどを
          ご用意しております。<br />
          メニューは、テーブルチャージが1,000円、１時間ごとに1,000円の飲み放題・歌い放題のシステムとなっております。詳しくはMENUから→<span className={styles.site_link} onClick={() => clickContent(CommentType.menu)}>MENU</span><br /><br />
          また、貸切イベントをやりたい方、一日店長をやりたい方などお気軽にお問い合わせください。（定休日の木曜日・日曜日推奨）→<span className={styles.site_link} onClick={() => clickContent(CommentType.contact)}>お問い合わせ</span>
          <br /><br />
          <span className={styles.shop_title}>カラオケバー・るーど</span><br />
          営業時間：18:00〜翌2:00<br />
          定休日：木曜日・日曜日<br />
          料金システム：テーブルチャージ1,000円、１時間ごとに1,000円の飲み放題・歌い放題（詳しくはMENUから）<br />
          住所：〒169-0073 東京都中野区東中野4-1-1 英ビル2F<br />
        </p>
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

