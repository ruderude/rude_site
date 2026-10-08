"use client"

import { useState, useCallback } from "react"
import Image from 'next/image'
import styles from './what.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  { src: '/images/shop/S__9019455-min.jpg', alt: '「Shot bar RUDE」の手書き看板がかかった黒い入口ドア' },
  { src: '/images/shop/S__8183850-min.jpg', alt: 'ボトルが並ぶ棚の前のカウンター席でくつろぐお客さん' },
  { src: '/images/shop/S__9019460-min.jpg', alt: 'カウンター席から見たカラオケステージとソファ席' },
  { src: '/images/shop/S__9019461-min.jpg', alt: 'ウイスキーやシャンパンのボトルが並ぶバーカウンターとカラオケ画面' },
  { src: '/images/shop/S__9019462-min.jpg', alt: 'スタンドマイクとスポットライトのあるカラオケステージ' },
  { src: '/images/shop/S__9019465-min.jpg', alt: '窓際に並ぶ黒いソファ席と丸テーブル、カラオケモニター' },
  { src: '/images/shop/S__9068570-min.jpg', alt: 'スポットライトに照らされたヴィンテージ風のマイク' },
  { src: '/images/shop/ai_kunshi.jpg', alt: '「テキーラが飲みたい」Tシャツを着たスタッフ2人のイラスト' },
]

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[number] | null>(null)
  const closeDialog = useCallback(() => setSelectedImage(null), [])

  return (<>
    <div className={styles.gallery_grid}>
      {galleryImages.map((img, i) => (
        <motion.button
          type="button"
          key={img.src}
          className={styles.gallery_item}
          onClick={() => setSelectedImage(img)}
          aria-label={`写真を拡大：${img.alt}`}
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
        </motion.button>
      ))}
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
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
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
            <button className={styles.close_btn} onClick={closeDialog} aria-label="閉じる">
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
