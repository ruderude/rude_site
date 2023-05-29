export const CommentType = {
  character: "character",
  news: "news",
  what: "what",
  menu: "menu",
  contact: "contact",
} as const;

export interface ContentProps {
  content: {
    name: string
    text: string
    image: string
  }
  oddEvenType: boolean
  clickContent: (event: any) => void
}