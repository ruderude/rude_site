"use client"

import { useState } from "react"

export const useComment = () => {
  const [comment, setComment] = useState("");
  const comments = [
    "Hello world!!",
  
    `こんにちは！
  
    今日はいい天気ですね！`,
  
    `おはようございます。
  
    朝は気持ちいいですね！`,
  ];

  // ランダムにコメントを返す関数
  const changeComment = async () => {
    await setComment(() => "")
    const random = Math.floor(Math.random() * comments.length)
    setComment(() => comments[random])
  }
  return { comment, changeComment }
};