import React from "react";
import modalStyle from "../styles/Modal.module.css";

export interface Props {
  url: string;
  toggleModal: object;
}
export default function Modal({ url, toggleModal }: Props) {
  return (
    <div onClick={toggleModal} className={modalStyle.container}>
      MODAL
      {/* <img className={modalStyle.img} src={url} /> */}
    </div>
  );
}