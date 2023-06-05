import React, { useRef, useState, useEffect, memo } from "react"
import Script from 'next/script';
import Image from 'next/image'
import styles from './contact.module.scss'
import { FiMail } from 'react-icons/fi'

// eslint-disable-next-line react/display-name
export const Contact = memo(() => {
  return (<>
    <div className={styles.main}>
      <div className={styles.title_area}>
        <h1 className={styles.title}>
          <FiMail color={'white'} />
          Contact
        </h1>
      </div>

      <br />

      <div className={styles.sub_title_area}>
        <h2 className={styles.sub_title}>
        東中野にあるカラオケバー・るーど：お問い合わせ
        </h2>
      </div>

      <br />

      <div>
        <p className={styles.text}>
          当店に関するお問い合わせは、以下のフォームかTwitterのDMにてお願いします。<br />
          貸切イベントをやりたい方、一日店長をやりたい方などもお気軽にお問い合わせください。（定休日の木曜日・日曜日推奨）<br /><br />
          Twitter：<span className={styles.out_link}><a href="https://twitter.com/rude_rockers" target="_blank" rel="noopener noreferrer">訓志@バーテンエンジニア</a></span><br />
        </p>
      </div>

      <br />
    </div>
  </>)
})