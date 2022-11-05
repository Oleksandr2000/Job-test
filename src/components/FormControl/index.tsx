import cn from "classnames"
import React from "react"

import styles from "./FormControl.module.scss"
import { FormControlProps } from "./FormControl.props"

function Input({
  placeholder,
  label,
  variant,
  error,
  value,
  name,
  type,
  handlerVlue,
  touched,
  onBlur,
}: FormControlProps) {
  return (
    <div
      className={cn(styles.root, {
        [styles.large]: variant === "large",
        [styles.medium]: variant === "medium",
        [styles.small]: variant === "small",
      })}
    >
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        onBlur={onBlur}
        onChange={(e) => handlerVlue(name, e.target.value)}
      />
      {error && touched ? <div className={styles.error}>{error}</div> : null}
    </div>
  )
}

export default Input
