export const CommentType = {
  Character: "character",
} as const;

export interface ContentProps {
  content: {
    text: string
    image: string
  }
  type: boolean
}