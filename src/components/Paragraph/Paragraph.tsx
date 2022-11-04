import cn from "classnames"
import React from "react"

import styles from "./Paragraph.module.scss"
import { ParagraphProps } from "./Paragraph.props"

function Paragraph({ size, children }: ParagraphProps) {
  return (
    <p
      className={cn(styles.paragraph, {
        [styles.additional]: size === "add",
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
    >
      {children}
    </p>
  )
}

export default Paragraph
