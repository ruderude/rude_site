"use client"

import { useEffect, useState, useRef } from "react"
import Image from 'next/image'
import styles from './page.module.scss'
import Character from '@/components/modules/characters/Character'
import { Content, What, Menu, NewsStaff, Contact, SuperBlow, FadeToBlack } from '@/components/modules/contents'
import { useContents } from '@/hooks/useContents'
import { CommentType } from '@/types/types'
import { contents } from '@/data/contents'
import { BsFillShiftFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
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
        return <NewsStaff />
      case CommentType.what:
        return <What clickContent={clickContent} />
      case CommentType.menu:
        return <Menu />
      case CommentType.contact:
        return <Contact />
    }

    switch (content) {
      case CommentType.news:
        return <NewsStaff />
      case CommentType.what:
        return <What clickContent={clickContent} />
      case CommentType.menu:
        return <Menu />
      case CommentType.contact:
        return <Contact />
    }

  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    console.log('こんなところのぞくんじゃないわよ！エッチねえ！！')
    changeContent(content)
  }, [])

  return (<>
    <main>
      {
        superIn && <FadeToBlack num={num} setSuperIn={setSuperIn} />
      }

      <div className={styles.all_contents_area}>
        <div className={`${styles.parent} ${styles.contents_area}`}>
          {
            contents.map((content, index) => {
              const oddEven = index % 2 === 0
              return (
                <div className={styles.children} key={index}>
                  <Content content={content} oddEvenType={oddEven} clickContent={clickContent} isActive={contentType === content.name} />
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
            <BsFillShiftFill className={styles.scroll_btn} onClick={scrollTop}/>
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
        theme="dark"
      />

    </main>
  </>)
}
