"use client"

import { useRef, useState, useEffect } from "react"
import styles from './header.module.scss'
import { motion } from 'framer-motion';

export default function Header() {

  const title = "カラオケバー・RUDE"
  const titleArray = title.split('');
  
  return (<>
    <br />
    <h1 className={`${styles.title} ${styles.neontext}`}>
      <motion.div
        animate={{ y: '0px' }}
        transition={{ type: 'spring', bounce: 0.5, delay: 0 }}
        initial={{ y: '-200px' }}
      >
        <span></span>
      </motion.div>
      {titleArray.map((char, index) => (
        <motion.div
          key={index}
          animate={{ y: '0px' }}
          transition={{ type: 'spring', bounce: 0.5, delay: 0.1 * (index + 1) }}
          initial={{ y: '-200px' }}
        >
          <span>{char}</span>
        </motion.div>
      ))}
    </h1>
  </>)
}

