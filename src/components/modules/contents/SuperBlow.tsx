import { useRef, useState, useEffect, memo } from "react"
import styles from './superblow.module.scss'
import { ContentProps } from '@/types/types'

// eslint-disable-next-line react/display-name
export const SuperBlow = memo(({clickSuper}: any) => {
  return (<>
    <div className={styles.flex}>
      <div className={styles.btn} onClick={() => clickSuper(1)}>
        必①
      </div>
      <div className={styles.btn} onClick={() => clickSuper(2)}>
        必②
      </div>
      <div className={styles.btn} onClick={() => clickSuper(3)}>
        必③
      </div>
    </div>
  </>)
})

