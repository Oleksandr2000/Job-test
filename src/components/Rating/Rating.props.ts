import { HTMLAttributes, DetailedHTMLProps } from "react"

export interface RaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number
  advertisement?: string
}
