import { useRef, useState, useEffect, useCallback } from "react"
import Image from 'next/image'
import styles from './character.module.scss'
import { motion } from 'framer-motion';
import { CommentType } from '@/types/types'

interface Props {
  changeContent: (type: string) => void
  comment: string
}

export default function Character({ changeContent, comment }: Props) {
  const characterImg = '/images/staff/kunshi-removebg-preview.png'
  const commentArea = useRef<HTMLDivElement>(null!)
  const canRef = useRef<boolean>(true)

  const typewriter = useCallback(async (text: string, speed: number) => {
    return new Promise(resolve => {
      if (!commentArea.current) return resolve('end')
      commentArea.current.innerText = "";
      const chars = text.split("");
      for (let index = 0; index < chars.length; index++) {
        if (index !== (chars.length - 1)) {
          setTimeout(() => {
            if (commentArea.current) commentArea.current.innerText += chars[index]
          }, speed * index);
        } else {
          setTimeout(() => {
            if (commentArea.current) commentArea.current.innerText += chars[index]
            resolve('end')
          }, speed * index);
        }
      }
    });
  }, [])

  useEffect(() => {
    if (canRef.current && comment) {
      canRef.current = false
      typewriter(comment, 50).then(() => {
        canRef.current = true
      })
    }
  }, [comment, typewriter])

  return (<>
    <div className={`${styles.parent}`}>
      <div className={`${styles.comment} word_turn`} onClick={() => changeContent(CommentType.character)}>
        <div className={`${styles.commentArea}`} ref={commentArea}></div>
      </div>
      <div className={`${styles.character}`} onClick={() => changeContent(CommentType.character)} >
        <Image
          src={characterImg}
          alt="画像"
          width={400}
          height={400}
          sizes="auto"
          style={{
            width: 'auto',
            height: '100%',
          }}
        />
      </div>
    </div>
  </>)
}
