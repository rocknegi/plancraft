import React from "react";
import modalStyle from "../styles/Modal.module.css";

export interface Props {
  url: string;
}
export default function Modal({ url }: Props) {
  return (
    <div className={modalStyle.container}>
      MODAL
      {/* <img className={modalStyle.img} src={url} /> */}
    </div>
  );
}
