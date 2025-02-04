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

      <div>
        <p className={styles.text}>
          カラオケ大会、テキーラ・THE・マウンテン、プログラミング勉強会など、様々なイベントを開催しています。<br />
          店主のブログやTwitterでもお知らせしていますので、ぜひご覧ください。<br />
          {/* Twitterお店：<span className={styles.out_link}><a href="https://twitter.com/rude_rockers" target="_blank" rel="noopener noreferrer">訓志@バーテンエンジニア</a></span><br /> */}
          Twitter店主：<span className={styles.out_link}><a href="https://twitter.com/rude_rockers" target="_blank" rel="noopener noreferrer">訓志@バーテンエンジニア</a></span><br />
        </p>
      </div>

      {/* <br />

      <div className={styles.tweet_area}>
        <Tweet id="1675098780289622016" />
        <Script
          src="https://platform.twitter.com/widgets.js"
          strategy="lazyOnload"
        />
      </div>

      <br />

      <div className={styles.tweet_area}>
        <Tweet id="1666338388268711936" />
        <Script
          src="https://platform.twitter.com/widgets.js"
          strategy="lazyOnload"
        />
      </div>

      <br />

      <div className={styles.tweet_area}>
        <Tweet id="1653293994179432448?s=46&t=4u19217SUnB1lBYPA_o65A" />
        <Script
          src="https://platform.twitter.com/widgets.js"
          strategy="lazyOnload"
        />
      </div> */}

      <br />
    </div>
  </>)
})