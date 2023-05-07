"use client"

import { useEffect } from "react"
import Image from 'next/image'
import styles from './page.module.scss'
import Character from '@/components/modules/characters/Character'
import { useComment } from '@/hooks/useComment'

const btnImage = '/images/button/rude_logo_icon_white.png'

export default function Home() {
  const { comment, changeComment } = useComment()
  console.log('comment: ', comment)

  useEffect(() => {
    changeComment()
  }, [])

  return (
    <main>
      <div>
        メインコンテンツ
      </div>
      <Character comment={comment} changeComment={changeComment}></Character>
    </main>
  )
}
