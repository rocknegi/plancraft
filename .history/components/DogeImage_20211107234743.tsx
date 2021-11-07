import React, { useState } from "react";
import homestyles from "../styles/Home.module.css";
import Modal from "./Modal";

//Prop type check
export interface Props {
  url: string;
}

export default function DogeImage({ url }: Props) {
  const [modal, toggleModal] = useState<boolean>(false);

  const onImageClick = (url: string) => {
    toggleModal(true);
  };
  return (
    <>
      <img
        onClick={() => onImageClick(url)}
        className={homestyles.img}
        src={url}
      />
      {modal && <Modal url="f" />}
    </>
  );
}
