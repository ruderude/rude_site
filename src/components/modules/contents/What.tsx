import { useRef, useState, useEffect } from "react"
import Image from 'next/image'
import styles from './what.module.scss'
import { Map } from '@/components/blocks'
import { BiSearchAlt } from 'react-icons/bi'

export const What = () => {
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
        <p className={styles.text}>
          　東中野にあるカラオケバー・るーどは、小さなカラオケバーです。<br />
          お酒を飲みながら、カラオケを楽しむことができます。<br />
          お酒は、ビール、ハイボール、ウイスキー、焼酎、日本酒、ワイン、カクテルなどを
          ご用意しております。<br />
          メニューは、テーブルチャージが千円、１時間ごとに千円の飲み放題・歌い放題のシステムとなっております。
        </p>

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

