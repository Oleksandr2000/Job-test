import cn from "classnames"
import React from "react"

import styles from "./Button.module.scss"
import { ButtonProps } from "./Button.props"

function Button({ children, size, variant, color, widthContent = false, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className={cn(styles.button, {
        [styles.medium]: size === "medium",
        [styles.content]: size === "content",
        [styles.large]: size === "large",
        [styles.outline]: variant === "outline",
        [styles.fill]: variant === "fill",
        [styles.text]: variant === "text",
        [styles.textActive]: variant === "text-active",
        [styles.lightGold]: color === "light-gold",
        [styles.lightBlue]: color === "light-blue",
        [styles.darkBlue]: color === "dark-blue",
        [styles.exit]: color === "exit",
        [styles.widthContent]: widthContent,
      })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
