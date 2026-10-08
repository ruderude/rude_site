export const CommentType = {
  character: "character",
  news: "news",
  what: "what",
  menu: "menu",
  contact: "contact",
  faq: "faq",
  super_1: "super_1",
  super_2: "super_2",
  super_3: "super_3",
} as const;

export interface ContentProps {
  content: {
    name: string
    href: string
    text: string
    detail: string
    image: string
    alt: string
  }
  oddEvenType: boolean
  isActive?: boolean
}

export interface FormInputs {
  to_name: string
  to_email: string
  message: string
  check: string | null
}
