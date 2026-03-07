"use client"

import styles from './header.module.scss'
import { motion } from 'framer-motion';

const neonColors = [
  '#ff0080', '#ff00ff', '#00ffff', '#00ff80',
  '#ffff00', '#ff4400', '#8000ff', '#00aaff',
]

const glowMap: Record<string, string> = {
  '#ff0080': '0 0 10px #ff0080, 0 0 30px #ff0080, 0 0 60px #ff0080',
  '#ff00ff': '0 0 10px #ff00ff, 0 0 30px #ff00ff, 0 0 60px #ff00ff',
  '#00ffff': '0 0 10px #00ffff, 0 0 30px #00ffff, 0 0 60px #00ffff',
  '#00ff80': '0 0 10px #00ff80, 0 0 30px #00ff80, 0 0 60px #00ff80',
  '#ffff00': '0 0 10px #ffff00, 0 0 30px #ffff00, 0 0 60px #ffff00',
  '#ff4400': '0 0 10px #ff4400, 0 0 30px #ff4400, 0 0 60px #ff4400',
  '#8000ff': '0 0 10px #8000ff, 0 0 30px #8000ff, 0 0 60px #8000ff',
  '#00aaff': '0 0 10px #00aaff, 0 0 30px #00aaff, 0 0 60px #00aaff',
}

export default function Header() {
  const title = "カラオケバー・RUDE"
  const titleArray = title.split('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header className={styles.header} onClick={scrollToTop}>
      <div className={styles.bg_flash} />
      <div className={styles.scanlines} />

      <h1 className={styles.title}>
        {titleArray.map((char, index) => {
          const color1 = neonColors[index % neonColors.length];
          const color2 = neonColors[(index + 3) % neonColors.length];

          return (
            <motion.span
              key={index}
              className={styles.char}
              initial={{
                y: -200,
                opacity: 0,
                scale: 0,
                rotateX: 720,
                rotateY: 360,
              }}
              animate={{
                y: [0, -20, 0, -8, 0],
                opacity: 1,
                scale: [1, 1.4, 0.9, 1.15, 1],
                rotateX: [0, 15, -15, 0],
                rotateY: 0,
                color: [color1, color2, color1],
                textShadow: [
                  glowMap[color1],
                  glowMap[color2],
                  glowMap[color1],
                ],
              }}
              transition={{
                y: {
                  delay: 2 + index * 0.1,
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: titleArray.length * 0.1 + 0.5,
                  ease: 'easeInOut',
                },
                opacity: { duration: 0.3, delay: index * 0.06 },
                scale: {
                  delay: 2 + index * 0.1,
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: titleArray.length * 0.1 + 0.5,
                  ease: 'easeInOut',
                },
                rotateX: {
                  delay: 2 + index * 0.1,
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: titleArray.length * 0.1 + 0.5,
                  ease: 'easeInOut',
                },
                rotateY: {
                  type: 'spring',
                  stiffness: 150,
                  damping: 10,
                  delay: index * 0.06,
                },
                color: {
                  delay: 1 + index * 0.12,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                },
                textShadow: {
                  delay: 1 + index * 0.12,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                },
              }}
              whileHover={{
                scale: 1.8,
                rotate: [0, -15, 15, 0],
                transition: { duration: 0.3 },
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </h1>

      <div className={styles.shine_sweep} />

      <div className={styles.glow_bar}>
        <motion.div
          className={styles.glow_inner}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 1, 0],
            scaleY: [1, 2, 2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </header>
  )
}
