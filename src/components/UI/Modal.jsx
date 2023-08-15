import { Fragment } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalEllement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalEllement)}
      {createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalEllement
      )}
    </Fragment>
  );
};

export default Modal;
