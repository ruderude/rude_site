"use client"

import { useEffect, useState, useRef } from "react"
import Image from 'next/image'
import styles from './page.module.scss'
import Character from '@/components/modules/characters/Character'
import { Content, What, Menu, News, Contact } from '@/components/modules/contents'
import { useContents } from '@/hooks/useContents'
import { CommentType } from '@/types/types'
import { contents } from '@/data/contents'
import { BsFillShiftFill } from 'react-icons/bs'
import { motion } from 'framer-motion';

const btnImage = '/images/button/rude_logo_icon_white.png'

export default function Home() {
  const { comment, contentType, changeContent } = useContents()
  console.log('comment: ', comment)

  const contentArea = useRef<HTMLDivElement>(null)

  const scrollContent = () => {
    contentArea?.current?.scrollIntoView({behavior: "smooth"});
  }

  const clickContent = (type: string) => {
    changeContent(type)
    scrollContent()
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
    changeContent(CommentType.news)
  }, [])

  return (
    <main>

      <div className={styles.parent}>
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
    </main>
  )
}
