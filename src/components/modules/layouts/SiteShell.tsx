"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { MotionConfig, motion } from 'framer-motion'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { BsFillShiftFill } from 'react-icons/bs'
import styles from '@/app/page.module.scss'
import Header from '@/components/modules/layouts/Header'
import HamburgerMenu from '@/components/modules/layouts/HamburgerMenu'
import Footer from '@/components/modules/layouts/Footer'
import Character from '@/components/modules/characters/Character'
import { Content } from '@/components/modules/contents/Content'
import { useContents } from '@/hooks/useContents'
import { contents, pageTypeFromPath } from '@/data/contents'

// 全ページ共通の枠（ヘッダー・カード・キャラクター・フッター）。各ページの本文は children として受け取る
export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const activeType = pageTypeFromPath(pathname)
  const { comment, changeContent } = useContents()
  const contentArea = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  // ページ遷移したら本文エリアまでスクロールし、キャラのセリフをページに合わせる
  useEffect(() => {
    changeContent(activeType)

    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (contentArea.current) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const top = contentArea.current.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [pathname, activeType, changeContent])

  useEffect(() => {
    // 消さない
    console.log('こんなところのぞくんじゃないわよ！エッチねえ！！')
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <HamburgerMenu />

        <nav className={styles.all_contents_area} aria-label="コンテンツ">
          <div className={`${styles.parent} ${styles.contents_area}`}>
            {
              contents.map((item, index) => {
                const oddEven = index % 2 === 0
                return (
                  <div className={styles.children} key={item.name}>
                    <Content content={item} oddEvenType={oddEven} isActive={activeType === item.name} />
                  </div>
                )
              })
            }
          </div>
        </nav>

        <div className={styles.contents} ref={contentArea}>
          {children}
          <div className={styles.scroll_top}>
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <button type="button" onClick={scrollTop} aria-label="ページの先頭へ戻る">
                <BsFillShiftFill className={styles.scroll_btn} />
              </button>
            </motion.div>
          </div>
        </div>

        <Character changeContent={changeContent} comment={comment} ></Character>
        <br />

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
      <Footer />
    </MotionConfig>
  )
}
