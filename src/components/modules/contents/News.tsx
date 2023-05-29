import React, { useRef, useState, useEffect, memo } from "react"
import Script from 'next/script';
import { Tweet } from '@/components/blocks/Tweet';
import Image from 'next/image'
import styles from './news.module.scss'
import { HiOutlineNewspaper } from 'react-icons/hi'

// eslint-disable-next-line react/display-name
export const News = memo(() => {
  return (<>
    <div className={styles.main}>
      <div className={styles.title_area}>
        <h1 className={styles.title}>
          <HiOutlineNewspaper color={'white'} />
          News
        </h1>
      </div>

      <br />

      <div className={styles.sub_title_area}>
        <h2 className={styles.sub_title}>
        店舗イベント、その他のお知らせはこちらから
        </h2>
      </div>

      <div className={styles.tweet_area}>
        <Tweet id="1653293994179432448?s=46&t=4u19217SUnB1lBYPA_o65A" />
        <Script
          src="https://platform.twitter.com/widgets.js"
          strategy="lazyOnload"
        />
      </div>
    </div>
  </>)
})