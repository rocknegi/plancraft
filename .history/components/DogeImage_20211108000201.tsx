import React, { useState } from "react";
import homestyles from "../styles/Home.module.css";
import Modal from "./Modal";

//Prop type check
export interface Props {
  url: string;
}

export default function DogeImage({ url }: Props) {
  const [modal, toggleModal] = useState<boolean>(false);

  const onImageClick = () => {
    toggleModal(!modal);
  };
  return (
    <div style={{ width: "100%" }}>
      <img onClick={onImageClick} className={homestyles.img} src={url} />
      {modal && <Modal toggleModal={onImageClick} url="f" />}
    </div>
  );
}
