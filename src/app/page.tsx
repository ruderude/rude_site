"use client"

import { useEffect } from "react"
import Image from 'next/image'
import styles from './page.module.scss'
import Character from '@/components/modules/characters/Character'
import Content from '@/components/modules/contents/Content'
import { useComment } from '@/hooks/useComment'
import { CommentType } from '@/types/types'
import { contents } from '@/data/contents'

const btnImage = '/images/button/rude_logo_icon_white.png'

export default function Home() {
  const { comment, changeComment } = useComment()
  console.log('comment: ', comment)

  useEffect(() => {
    changeComment(CommentType.Character)
  }, [])

  return (
    <main>

      <div className={styles.parent}>
        {
          contents.map((content, index) => {
            // indexが偶数か奇数か
            const oddEvenType = index % 2 === 0
            return (
              <div className={styles.children} key={index}>
                <Content content={content} type={oddEvenType} />
              </div>
            )
          })
        }
      </div>
      <Character changeComment={changeComment} comment={comment} ></Character>
    </main>
  )
}
