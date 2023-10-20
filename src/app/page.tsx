"use client"

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
import 'react-toastify/dist/ReactToastify.css'

// const btnImage = '/images/button/rude_logo_icon_white.png'

export default function Home() {
  const { comment, contentType, changeContent } = useContents()
  const [superIn, setSuperIn] = useState<boolean>(false);
  const [num, setNum] = useState<number>(1);
  const contentArea = useRef<HTMLDivElement>(null)

  const scrollContent = () => {
    contentArea?.current?.scrollIntoView({behavior: "smooth"});
  }

  const clickContent = (type: string) => {
    changeContent(type)
    scrollContent()
  }

  // 必殺技ボタン
  const clickSuper = (number: any) => {
    setNum(number)
    setSuperIn(true)
    let comment = ''
    switch (number) {
      case 1:
        comment = CommentType.super_1
        break;
      case 2:
        comment = CommentType.super_2
        break;
      case 3:
        comment = CommentType.super_3
        break;
      default:
        comment = '必殺技です。'
        break;
    }
    setTimeout(() => {
      changeContent(comment)
    }, 4000)
  }

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
      default:
        return null
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
    changeContent(CommentType.what)
  }, [])

  return (
    <main>
      {
        superIn && <FadeToBlack num={num} setSuperIn={setSuperIn} />
      }

      <div className={styles.mb_3}>
        <div className={`${styles.parent} ${styles.mb_2}`}>
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
        <SuperBlow clickSuper={clickSuper} />
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
  )
}
