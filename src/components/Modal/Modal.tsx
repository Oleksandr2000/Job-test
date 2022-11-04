import React from "react";
import { ModalProps } from "./Modal.props";
import cn from "classnames";

import styles from "./Modal.module.scss";
import { useAppDispatch } from "../../hooks/useContextHooks";
import { handleModal } from "../../redux/slice/AdverstaningSlice/AdversteningSlice";

const Modal = ({ children, open }: ModalProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={cn(styles.root, {
        [styles.active]: open,
      })}
      onClick={() => dispatch(handleModal(false))}>
      <div
        className={cn(styles.content, {
          [styles.scale]: open,
        })}
        onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
