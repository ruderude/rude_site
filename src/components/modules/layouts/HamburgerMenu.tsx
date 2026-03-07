"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./hamburgermenu.module.scss"
import { contents } from "@/data/contents"

interface Props {
  clickContent: (type: string) => void
}

const neonColors = [
  "#ff0080", "#00ffff", "#ff00ff", "#00ff80",
  "#ffff00", "#ff4400", "#8000ff", "#00aaff",
]

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, delay: 0.2, ease: "easeIn" as const },
  },
}

const menuContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 200,
    scale: 0.3,
    rotateY: 90,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    scale: 0.3,
    rotateY: -90,
    filter: "blur(20px)",
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: -80, scale: 0.5, rotateX: 45 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 10,
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
}

export default function HamburgerMenu({ clickContent }: Props) {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((prev) => !prev), [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open])

  const handleClick = (name: string) => {
    clickContent(name)
    setOpen(false)
  }

  return (
    <>
      <button
        className={`${styles.burger} ${open ? styles.open : ""}`}
        onClick={toggle}
        aria-label="メニューを開く"
      >
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.fullscreen}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.bg_grid} />
            <div className={styles.scanlines} />

            <motion.div
              className={styles.glow_orb}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className={`${styles.glow_orb} ${styles.glow_orb_2}`}
              animate={{
                scale: [1.2, 0.8, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.h2
              className={styles.menu_title}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {"MENU".split("").map((char, i) => (
                <motion.span
                  key={i}
                  animate={{
                    color: [neonColors[i % neonColors.length], neonColors[(i + 3) % neonColors.length], neonColors[i % neonColors.length]],
                    textShadow: [
                      `0 0 10px ${neonColors[i % neonColors.length]}, 0 0 40px ${neonColors[i % neonColors.length]}`,
                      `0 0 10px ${neonColors[(i + 3) % neonColors.length]}, 0 0 40px ${neonColors[(i + 3) % neonColors.length]}`,
                      `0 0 10px ${neonColors[i % neonColors.length]}, 0 0 40px ${neonColors[i % neonColors.length]}`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: i * 0.2,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>

            <motion.nav
              className={styles.menu}
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {contents.map((item, index) => {
                const neon = neonColors[index % neonColors.length]
                return (
                  <motion.button
                    key={item.name}
                    className={styles.menu_item}
                    variants={itemVariants}
                    onClick={() => handleClick(item.name)}
                    whileHover={{
                      scale: 1.08,
                      x: 10,
                      boxShadow: `0 0 20px ${neon}, 0 0 40px ${neon}, inset 0 0 20px ${neon}33`,
                      borderColor: neon,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      ["--neon-color" as string]: neon,
                    }}
                  >
                    <motion.span
                      className={styles.item_index}
                      animate={{
                        color: [neon, "#fff", neon],
                        textShadow: [
                          `0 0 8px ${neon}`,
                          `0 0 16px ${neon}`,
                          `0 0 8px ${neon}`,
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>
                    <div className={styles.item_content}>
                      <span className={styles.menu_text}>{item.text}</span>
                      <span className={styles.menu_detail}>{item.detail}</span>
                    </div>
                    <motion.div
                      className={styles.item_arrow}
                      animate={{ x: [0, 8, 0] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: index * 0.15,
                      }}
                    >
                      →
                    </motion.div>
                  </motion.button>
                )
              })}
            </motion.nav>

            <motion.div
              className={styles.close_hint}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                TAP BURGER TO CLOSE
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
