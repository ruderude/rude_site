"use client"

import { useState } from "react"
import { characterComments } from "@/data/character"
import { CommentType } from '@/types/types'

export const useComment = () => {
  const [comment, setComment] = useState("");

  // ランダムにコメントを返す関数
  const changeComment = async (event: any) => {
    console.log("event", event)
    let comments: string[] = [];
    if (event === CommentType.Character) {
      comments = characterComments
    } else {
      comments = characterComments
    }
    await setComment(() => "")
    const random = Math.floor(Math.random() * comments.length)
    setComment(() => comments[random])
  }
  return { comment, changeComment }
};