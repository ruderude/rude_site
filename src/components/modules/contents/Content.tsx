import { memo } from "react"
import Image from 'next/image'
import Link from 'next/link'
import styles from './content.module.scss'
import { ContentProps } from '@/types/types'

export const Content = memo(function Content({content, oddEvenType, isActive}: ContentProps) {
  return (
    <Link
      href={content.href}
      scroll={false}
      className={`${oddEvenType ? styles.parent_left : styles.parent_right} ${styles.parent} ${isActive ? styles.active : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      <div className={styles.image}>
        <Image
          src={content.image}
          alt={content.alt}
          width={400}
          height={400}
          sizes="(max-width: 767px) 50vw, 230px"
          preload
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
      <div className={styles.text_area}>
        <div className={styles.text}>
          {content.text}
        </div>
        <div className={styles.detail}>
          {content.detail}
        </div>
        {isActive && (
          <div className={styles.eq_bars}>
            <span /><span /><span /><span /><span />
          </div>
        )}
      </div>
    </Link>
  )
})
