"use client"

import { useRef, useState, useEffect } from "react"
import Image from 'next/image'
import styles from './content.module.scss'
import { ContentProps } from '@/types/types'

export default function Content({content, type}: ContentProps) {
  return (<>
    <div className={type ? styles.parent_left : styles.parent_right}>
      <div className={styles.image}>
        <Image
          src={content.image}
          alt="コンテンツ"
          width={400}
          height={400}
          sizes="auto"
          style={{
            width: '100%',
            height: 'auto',
            border: 'solid 6px rgb(28, 44, 171)',
            borderRadius: '50%',
          }}
        />
      </div>
      <div className={styles.text}>
        {content.text}
      </div>
    </div>
  </>)
}

