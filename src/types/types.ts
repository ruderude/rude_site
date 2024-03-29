export const CommentType = {
  character: "character",
  news: "news",
  what: "what",
  menu: "menu",
  contact: "contact",
  super_1: "super_1",
  super_2: "super_2",
  super_3: "super_3",
} as const;

export interface ContentProps {
  content: {
    name: string
    text: string
    detail: string
    image: string
  }
  oddEvenType: boolean
  clickContent: (event: any) => void
}

export interface WhatProps {
  clickContent: (name: string) => void
}

export interface FormInputs {
  to_name: string
  to_email: string
  message: string
  check: string | null
}
