"use client"

import { useRef, useState, useEffect } from "react"
import styles from './character.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion';

interface Params {
  text: string
  speed: number
}

interface Props {
  comment: string
  changeComment: () => void
}


// キャラクターの名前をクラス名にしても良い
export default function Character({ comment, changeComment }: Props) {
  const characterImg = '/images/character/kunshi_1_l-min.png'
  const commentArea = useRef<HTMLDivElement>(null!)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params = {
    text: comment,
    speed: 50
  }

  const typewriter = async (params: Params) => {
    commentArea.current.innerText = "";
    let speed = params.speed;
    let string = params.text.split("");
    for (let index = 0; index < string.length; index++) {
      // console.log(string[index])
      if (index !== (string.length - 1)) {
        setTimeout(() => {
          commentArea.current.innerText += string[index]
        }, speed * index);
      } else {
        setTimeout(() => {
          commentArea.current.innerText += string[index]
        }, speed * index);
      }
    }
  }

  useEffect(() => {
    typewriter(params).then(() => {
      console.log('typewriter end')
    })
  }, [params])

  return (<>
    <div className={`${styles.parent}`}>
      <div className={`${styles.comment} word_turn`}>
        <div className={`${styles.commentArea}`} ref={commentArea}></div>
      </div>
      <button className={`${styles.character}`} onClick={changeComment} >
        <Image
          className={`${styles.characterImg}`}
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
      </button>
  </div>
  </>)
}