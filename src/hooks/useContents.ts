"use client"

import { useState, useCallback } from "react"
import { characterComments, whatComments, menuComments, newsComments, contactComments } from "@/data/character"
import { CommentType } from '@/types/types'

export const useContents = () => {
  const [comment, setComment] = useState<string>("");
  const [contentType, setContentType] = useState<string>("character")

  // コンテンツがクリックされたら、コンテンツの表示を切り替え、コメントを返す関数
  const changeContent = useCallback(async (type: string) => {
    console.log("type", type)
    // キャラがクリックされたら、キャラのコメントを返す、それ以外はコンテンツの表示切替
    let comments: string[] = [];
    switch (type) {
      case CommentType.character:
        // setContentType(() => CommentType.character)
        comments = characterComments
        break;
      case CommentType.what:
        setContentType(() => CommentType.what)
        comments = whatComments
        break;
      case CommentType.menu:
        setContentType(() => CommentType.menu)
        comments = menuComments
        break;
      case CommentType.news:
        setContentType(() => CommentType.news)
        comments = newsComments
        break;
      case CommentType.contact:
        setContentType(() => CommentType.contact)
        comments = contactComments
        break;
      default:
        setContentType(() => CommentType.character)
        comments = characterComments
        break;
    }

    await setComment(() => "")
    const random = Math.floor(Math.random() * comments.length)
    setComment(() => comments[random])
  }, [])

  return { comment, contentType, changeContent }
};