"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import styles from './page.module.scss'
import Character from '@/components/modules/characters/Character'
import { Content, What, Menu, NewsStaff, Contact } from '@/components/modules/contents'
import { useContents } from '@/hooks/useContents'
import { CommentType } from '@/types/types'
import { contents } from '@/data/contents'
import HamburgerMenu from '@/components/modules/layouts/HamburgerMenu'
import { BsFillShiftFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const { comment, contentType, changeContent } = useContents()
  const [selectedContent, setSelectedContent] = useState<string>(CommentType.what);
  const contentArea = useRef<HTMLDivElement>(null)
  const shouldScroll = useRef(false)

  const clickContent = useCallback((type: string) => {
    setSelectedContent(type)
    changeContent(type)
    shouldScroll.current = true
  }, [changeContent])

  useEffect(() => {
    if (shouldScroll.current && contentArea.current) {
      shouldScroll.current = false
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const top = contentArea.current.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [contentType])

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
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    // 消さない
    console.log('こんなところのぞくんじゃないわよ！エッチねえ！！')
    changeContent(selectedContent)
  }, [changeContent, selectedContent])

  return (<>
    <main>
      <HamburgerMenu clickContent={clickContent} />

      <div className={styles.all_contents_area}>
        <div className={`${styles.parent} ${styles.contents_area}`}>
          {
            contents.map((item, index) => {
              const oddEven = index % 2 === 0
              return (
                <div className={styles.children} key={index}>
                  <Content content={item} oddEvenType={oddEven} clickContent={clickContent} isActive={contentType === item.name} />
                </div>
              )
            })
          }
        </div>
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
