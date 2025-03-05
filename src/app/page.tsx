"use client"

import type { Metadata } from 'next'
import { useEffect, useState, useRef } from "react"
import Image from 'next/image'
import styles from './page.module.scss'
import Character from '@/components/modules/characters/Character'
import { Content, What, Menu, News, Contact, SuperBlow, FadeToBlack } from '@/components/modules/contents'
import { useContents } from '@/hooks/useContents'
import { CommentType } from '@/types/types'
import { contents } from '@/data/contents'
import { BsFillShiftFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { ToastContainer } from "react-toastify"
import { NextSeo } from "next-seo";
import 'react-toastify/dist/ReactToastify.css'

const siteTitle= '【カラオケバー・ルード】東中野'
const description = `東中野にあるカラオケバー・ルードは、小さなカラオケバーです。
お酒を飲みながら、カラオケを楽しむことができます。
お酒は、ビール、ハイボール、焼酎、ワイン、カクテルなどを ご用意しております。
メニューは、テーブルチャージが500円、1時間ごとに1,500円の飲み放題・歌い放題のシステムとなっております。
カラオケバー・ルード
営業時間：18:00〜翌2:00くらい
定休日：木曜日・日曜日
料金システム：テーブルチャージ500円、1時間ごとに1,500円の飲み放題・歌い放題（詳しくはMENUから）
住所：〒164-0003 東京都中野区東中野4丁目1-1 英ビル2階`;
const url = 'https://rude-site.vercel.app';

export default function Home() {
  const metadata: Metadata = {
    title: siteTitle,
    description: description,
    openGraph: {
      title: siteTitle,
      description: description,
      url: url,
      siteName: siteTitle,
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: description,
      site: '@rude_rockers',
      creator: '@rude_rockers',
    },
    verification: {
      google: 'E0WjjvGn8lXWZM6LFDUjpoNnNkqUE5bQCSbmX1mzq_A',
    },
    alternates: {
      canonical: url,
    },
  }
  const { comment, contentType, changeContent } = useContents()
  const [content, setContent] = useState<string>(CommentType.what);
  const [superIn, setSuperIn] = useState<boolean>(false);
  const [num, setNum] = useState<number>(1);
  const contentArea = useRef<HTMLDivElement>(null)

  const scrollContent = () => {
    contentArea?.current?.scrollIntoView({behavior: "smooth"});
  }

  const clickContent = (type: string) => {
    setContent(type)
    changeContent(type)
    scrollContent()
  }

  // 必殺技ボタン
  // const clickSuper = (number: any) => {
  //   setNum(number)
  //   setSuperIn(true)
  //   let comment = ''
  //   switch (number) {
  //     case 1:
  //       comment = CommentType.super_1
  //       break;
  //     case 2:
  //       comment = CommentType.super_2
  //       break;
  //     case 3:
  //       comment = CommentType.super_3
  //       break;
  //     default:
  //       comment = '必殺技です。'
  //       break;
  //   }
  //   setTimeout(() => {
  //     changeContent(comment)
  //   }, 4000)
  // }

  const choiceContent = (type: string) => {
    switch (type) {
      case CommentType.news:
        return <News />
      case CommentType.what:
        return <What clickContent={clickContent} />
      case CommentType.menu:
        return <Menu />
      case CommentType.contact:
        return <Contact />
    }

    switch (content) {
      case CommentType.news:
        return <News />
      case CommentType.what:
        return <What clickContent={clickContent} />
      case CommentType.menu:
        return <Menu />
      case CommentType.contact:
        return <Contact />
    }

  }

  const scrollTop = () => {
    // トップへスクロール
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    console.log('こんなところのぞくんじゃねえよ！')
    changeContent(content)
  }, [])

  return (<>
    <NextSeo
      title={siteTitle}
      description={description}
      openGraph={{
        title: siteTitle,
        description: description,
        url: url,
        type: 'website',
        site_name: siteTitle,
      }}
    />
    
    <main>
      {
        superIn && <FadeToBlack num={num} setSuperIn={setSuperIn} />
      }

      <div className={styles.all_contents_area}>
        <div className={`${styles.parent} ${styles.contents_area}`}>
          {
            contents.map((content, index) => {
              // indexが偶数か奇数か(CSSのため)
              const oddEven = index % 2 === 0
              return (
                <div className={styles.children} key={index}>
                  <Content content={content} oddEvenType={oddEven} clickContent={clickContent} />
                </div>
              )
            })
          }
        </div>
        {/* <SuperBlow clickSuper={clickSuper} /> */}
      </div>

      <div className={styles.contents} ref={contentArea}>
        {
          choiceContent(contentType)
        }
        <div className={styles.scroll_top}>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <BsFillShiftFill className={styles.scroll_btn} color={'yellow'} onClick={scrollTop}/>
          </motion.div>
        </div>
      </div>

      <Character changeContent={changeContent} comment={comment} ></Character>
      <br />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </main>
  </>)
}
