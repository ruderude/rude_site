import { useRef, useState, useEffect, memo } from "react"
import Image from 'next/image'
import styles from './content.module.scss'
import { ContentProps } from '@/types/types'

// eslint-disable-next-line react/display-name
export const Content = memo(({content, oddEvenType, clickContent}: ContentProps) => {
  return (<>
    <div className={`${oddEvenType ? styles.parent_left : styles.parent_right} ${styles.parent}`} onClick={() => clickContent(content.name)}>
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
})

