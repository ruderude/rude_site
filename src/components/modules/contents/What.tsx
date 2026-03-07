"use client"

import { useState, useCallback } from "react"
import Image from 'next/image'
import styles from './what.module.scss'
import { Map } from '@/components/blocks'
import { CommentType, WhatProps } from '@/types/types'
import { BiSearchAlt } from 'react-icons/bi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  { src: '/images/shop/S__9019455-min.jpg', alt: 'RUDE内観' },
  { src: '/images/shop/S__8183850-min.jpg', alt: 'RUDE内観' },
  { src: '/images/shop/S__9019460-min.jpg', alt: 'RUDE内観' },
  { src: '/images/shop/S__9019461-min.jpg', alt: 'RUDE内観' },
  { src: '/images/shop/S__9019462-min.jpg', alt: 'RUDE内観' },
  { src: '/images/shop/S__9019465-min.jpg', alt: 'RUDE内観' },
  { src: '/images/shop/S__9068570-min.jpg', alt: 'RUDE内観' },
  { src: '/images/shop/ai_kunshi.jpg', alt: 'RUDE内観' },
]

export const What = ({clickContent}: WhatProps) => {
  const image_gaikan_1 = '/images/shop/S__8183843-min.jpg'
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[number] | null>(null)
  const closeDialog = useCallback(() => setSelectedImage(null), [])


  return (<>
    <div className={styles.main}>
      <div className={styles.title_area}>
        <h1 className={styles.title}>
          <BiSearchAlt color={'#e94560'} />
          What
        </h1>
      </div>

      <br />

      <div className={styles.sub_title_area}>
        <h2 className={styles.sub_title}>
          東中野にあるカラオケバー・ルードってどんなお店？
        </h2>
      </div>

      <br />

      <div>
        <div className={styles.text}>
          　東中野にあるカラオケバー・ルードは、小さなカラオケバーです。<br />
          お酒を飲みながら、カラオケを楽しむことができます。<br />
          お酒は、ビール、ハイボール、焼酎、ワイン、カクテルなどを ご用意しております。<br />
          メニューは、テーブルチャージが500円、1時間ごとに1,500円の飲み放題・歌い放題のシステムとなっております。<br />
          お一人さまでも気軽に楽しめる店です。<br /><br />
          <div className={styles.text_title}><MdOutlineRestaurantMenu />システム</div><br />
          <div className={styles.text_detail}>
            ※喫煙可
          </div>
          <div className={styles.text_price}>
            テーブルチャージ：<span className={styles.big_text}>500円</span> <br />
            １時間（飲み歌い放題）：<span className={styles.big_text}>1,500円</span>
          </div><br />
          　入店時に発生するテーブルチャージが<b>500円</b>。<br />
          その後1時間ごとに<b>1,500円</b>が追加されます。<br /><br />

          詳しくはMENUから→<span className={styles.site_link} onClick={() => clickContent(CommentType.menu)}>MENU</span><br /><br />

          また、貸切イベントをやりたい方、一日店長をやりたい方などお気軽にお問い合わせください。（定休日の木曜日・日曜日推奨）→<span className={styles.site_link} onClick={() => clickContent(CommentType.contact)}>お問い合わせ</span>
          <br /><br />
          また、リアルタイムで店内の混雑状況が見れる公式LINEアカウントが便利です！<br />
          <span className={styles.site_link}><a href="https://line.me/R/ti/p/@857qlwqm" target="_blank" rel="noopener noreferrer">RUDE公式LINEアカウント</a></span>
          <br /><br />
          <span className={styles.shop_title}>カラオケバー・ルード</span><br />
          営業時間：18:00〜翌2:00くらい<br />
          定休日：木曜日・日曜日<br />
          料金システム：テーブルチャージ500円、1時間ごとに1,500円の飲み放題・歌い放題（詳しくはMENUから）<br />
          住所：〒164-0003 東京都中野区東中野4丁目1-1 英ビル2階<br />
        </div>
      </div>

      <br />

      <div>
        <Image
          src={image_gaikan_1}
          alt="RUDE外観"
          width={1108}
          height={1478}
          sizes="auto"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </div>

      <br />

      <Map />

      <br />

      <div className={styles.gallery_grid}>
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            className={styles.gallery_item}
            onClick={() => setSelectedImage(img)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1108}
              height={1478}
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </motion.div>
        ))}
      </div>

      <br />

      <p className={styles.text}>
        ぜひ一度遊びにきてください。
      </p>
    </div>

    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeDialog}
        >
          <motion.div
            className={styles.dialog}
            initial={{ scale: 0.8, opacity: 0, y: 80 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 80 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.notes_container} aria-hidden>
              {['♪', '♫', '♬', '♩', '♪', '♫', '♬', '♩', '♪', '♫'].map((note, i) => (
                <span
                  key={i}
                  className={styles.falling_note}
                  style={{
                    left: `${5 + i * 9.5}%`,
                    animationDelay: `${i * 0.4}s`,
                    animationDuration: `${4 + (i % 3) * 1}s`,
                    fontSize: `${1.2 + (i % 4) * 0.35}rem`,
                  }}
                >
                  {note}
                </span>
              ))}
            </div>
            <button className={styles.close_btn} onClick={closeDialog}>
              &times;
            </button>
            <motion.div
              className={styles.dialog_image}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1108}
                height={1478}
                sizes="90vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '12px',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>)
}

