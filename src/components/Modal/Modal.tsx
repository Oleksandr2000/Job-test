import cn from "classnames"
import React from "react"

import styles from "./Modal.module.scss"
import { ModalProps } from "./Modal.props"

import { useAppDispatch } from "../../hooks/useContextHooks"
import { handleModal } from "../../redux/slice/AdverstaningSlice/AdversteningSlice"

function Modal({ children, open }: ModalProps) {
  const dispatch = useAppDispatch()

  return (
    <div
      className={cn(styles.root, {
        [styles.active]: open,
      })}
      onClick={() => dispatch(handleModal(false))}
    >
      <div
        className={cn(styles.content, {
          [styles.scale]: open,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
