import { useState, useEffect } from "react"
import styles from './fadetoblack.module.scss'
import Image from 'next/image'

interface Props {
  num: Number
  setSuperIn: (flag: boolean) => void
}

export const FadeToBlack = ({num, setSuperIn}: Props) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [imageIn, setImageIn] = useState(false);
  let super_image = '';
  let timestamp = new Date().getTime();
  switch (num) {
    case 1:
      super_image = '/images/effect/super_1.gif?'+timestamp
      break;
    case 2:
      super_image = '/images/effect/super_2.gif?'+timestamp
      break;
    case 3:
      super_image = '/images/effect/super_3.gif?'+timestamp
      break;
    default:
      super_image = '/images/effect/super_1.gif?'+timestamp
      break;
  }

  useEffect(() => {
    // 1秒後に背景を真っ黒に変更
    setFadeIn(true);
    setTimeout(() => {
      setImageIn(true);
    }, 1000);
    setTimeout(() => {
      setFadeIn(false);
      setImageIn(false);
      setTimeout(() => {
        setSuperIn(false);
      }, 1000);
    }, 3000);
  }, []);

  return (
    <div className={`${styles.fade_container} ${fadeIn ? styles.fade_in : styles.fade_out}`}>
      {
        imageIn &&
        <div className={styles.super_area}>
            <Image
              src={super_image}
              alt="必殺技"
              width={1108}
              height={1478}
              sizes="auto"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
        </div>
      }
    </div>
  );
};