"use client"

import React, { useState, useCallback, useEffect, memo } from "react"
import Image from 'next/image'
import styles from './newsstaff.module.scss'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

interface Staff {
  name: string
  image: string
  drink: string
  song: string
  word: string
  color: string
}

const SEAT_WATCH_URL = 'https://rude-karaoke.com/api/seat-watch/image/shop_20260321173046_c08d4ba6'

const staffList: Staff[] = [
  {
    name: 'くんし',
    image: '/images/staff/kunshi-removebg-preview.png',
    drink: 'テキーラ・日本酒',
    song: '尾崎豊、浜田省吾など',
    word: 'テキーラ飲んで熱唱しようぜ！',
    color: 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)',
  },
  {
    name: 'あい',
    image: '/images/staff/ai-removebg-preview.png',
    drink: 'テキーラ・ビール',
    song: 'GAO、中村あゆみなど',
    word: '帰るまでが遠足！！',
    color: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
  },
  {
    name: 'かおり',
    image: '/images/staff/kaori_2.png',
    drink: 'テキーラ・日本酒・ほぼ全て',
    song: '喧嘩上等、相川七瀬など',
    word: '難しいことはわかりません…',
    color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
  {
    name: 'たつや',
    image: '/images/staff/tatuya-removebg-preview.png',
    drink: 'テキーラ、焼酎など',
    song: 'BOØWY、T-BOLAN、など',
    word: 'ギターボーカルのバンドマンです！ようやくお酒が飲める年齢になりました。',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
]

export const NewsStaff = memo(function NewsStaff() {
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null)
  const closeDialog = useCallback(() => setSelectedStaff(null), [])
  const [seatImageStatus, setSeatImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const [seatImageSrc, setSeatImageSrc] = useState(SEAT_WATCH_URL)

  useEffect(() => {
    setSeatImageStatus('loading')
    const img = new window.Image()
    img.onload = () => setSeatImageStatus('loaded')
    img.onerror = () => setSeatImageStatus('error')
    img.src = seatImageSrc
  }, [seatImageSrc])

  return (<>
    <div className={styles.main}>
      <div className={styles.title_area}>
        <h1 className={styles.title}>
          <HiOutlineNewspaper color={'#c9a84c'} />
          News
        </h1>
      </div>

      <br />

      <div className={styles.sub_title_area}>
        <h2 className={styles.sub_title}>
        店舗イベント、その他のお知らせはこちらから
        </h2>
      </div>

      <div>
        <p className={styles.text}>
          カラオケ大会など、様々なイベントを開催しています。<br />
          店主のブログやTwitterでもお知らせしていますので、ぜひご覧ください。<br />
          Twitter店主：<span className={styles.out_link}><a href="https://x.com/rude_rockers" target="_blank" rel="noopener noreferrer">訓志@バーテンエンジニア</a></span><br />
          また、リアルタイムで店内の混雑状況が見れる公式LINEアカウントが便利です！<br />
          <span className={styles.out_link}><a href="https://line.me/R/ti/p/@857qlwqm" target="_blank" rel="noopener noreferrer">RUDE公式LINEアカウント</a></span>
        </p>
      </div>

      <br />

      <div className={styles.staff_section}>
        <h2 className={styles.staff_heading}>Staff</h2>
        <div className={styles.staff_grid}>
          {staffList.map((staff, i) => (
            <motion.div
              key={staff.name}
              className={styles.staff_card}
              style={{ background: staff.color }}
              onClick={() => setSelectedStaff(staff)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className={styles.staff_image_wrap}>
                <Image
                  src={staff.image}
                  alt={staff.name}
                  width={300}
                  height={300}
                  sizes="(max-width: 767px) 40vw, 20vw"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className={styles.staff_name}>{staff.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <br />

      <div className={styles.seat_watch}>
        <h3 className={styles.seat_watch_title}>現在の店内状況</h3>
        {seatImageStatus === 'loading' && (
          <div className={styles.seat_watch_placeholder}>読み込み中...</div>
        )}
        {seatImageStatus === 'error' && (
          <div className={styles.seat_watch_placeholder}>
            <p>画像を取得できませんでした</p>
            <button className={styles.seat_watch_retry} onClick={() => setSeatImageSrc(SEAT_WATCH_URL + '?t=' + Date.now())}>
              再読み込み
            </button>
          </div>
        )}
        {seatImageStatus === 'loaded' && (
          <img
            className={styles.seat_watch_image}
            src={seatImageSrc}
            alt="混雑状況"
          />
        )}
      </div>

      <br />
    </div>

    <AnimatePresence>
      {selectedStaff && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeDialog}
        >
          <motion.div
            className={styles.dialog}
            style={{ background: selectedStaff.color }}
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
                src={selectedStaff.image}
                alt={selectedStaff.name}
                width={300}
                height={300}
                sizes="60vw"
                style={{
                  width: 'auto',
                  height: '100%',
                  maxHeight: '220px',
                  display: 'block',
                  margin: '0 auto',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
            <motion.div
              className={styles.dialog_body}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            >
              <motion.h3
                className={styles.dialog_name}
                initial={{ opacity: 0, scale: 0.5, y: -15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.25, type: 'spring', stiffness: 350, damping: 18 }}
              >
                {selectedStaff.name}
              </motion.h3>
              <div className={styles.dialog_eq}>
                <span /><span /><span /><span /><span /><span /><span />
              </div>
              <motion.dl
                className={styles.dialog_dl}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <dt>好きなお酒</dt>
                <dd>{selectedStaff.drink}</dd>
                <dt>よく歌う曲</dt>
                <dd>{selectedStaff.song}</dd>
                <dt>ひとこと</dt>
                <dd>{selectedStaff.word || '―'}</dd>
              </motion.dl>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>)
})
