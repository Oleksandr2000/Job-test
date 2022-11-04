import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface FormControlProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder: string
  variant?: "large" | "medium" | "small"
  error?: any
  label: string
  value?: string
  handlerVlue: (prop: string, value: any) => void
  name: string
  touched: unknown
}
