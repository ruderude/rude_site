export const CommentType = {
  character: "character",
  what: "what",
  menu: "menu",
  blog: "blog",
  contact: "contact",
} as const;

export interface ContentProps {
  content: {
    name: string
    text: string
    image: string
  }
  type: boolean
  changeComment: (event: any) => void
}