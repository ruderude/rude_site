"use client"

import { useState } from "react"
import { characterComments, whatComments, menuComments, blogComments, contactComments } from "@/data/character"
import { CommentType } from '@/types/types'

export const useComment = () => {
  const [comment, setComment] = useState("");

  // ランダムにコメントを返す関数
  const changeComment = async (type: string) => {
    console.log("type", type)
    let comments: string[] = [];
    switch (type) {
      case CommentType.character:
        comments = characterComments
        break;
      case CommentType.what:
        comments = whatComments
        break;
      case CommentType.menu:
        comments = menuComments
        break;
      case CommentType.blog:
        comments = blogComments
        break;
      case CommentType.contact:
        comments = contactComments
        break;
      default:
        comments = characterComments
        break;
    }
    
    await setComment(() => "")
    const random = Math.floor(Math.random() * comments.length)
    setComment(() => comments[random])
  }

  return { comment, changeComment }
};