import React, { useState } from "react";
import Image from "next/image";

import homestyles from "../styles/Home.module.css";
import Modal from "./Modal";

//Prop type check
export interface Props {
  url: string;
}

export default function DogeImage({ url }: Props) {
  const [modal, toggleModal] = useState<boolean>(false);

  //Handle visibility of the Modal
  const onImageClick = () => {
    toggleModal(!modal);
  };
  return (
    <>
      <Image
        onClick={onImageClick}
        className={homestyles.img}
        src={url}
        alt="DOGE picture"
        height={500}
        width={500}
        // layout="fill"
      />
      {modal && <Modal toggleModal={onImageClick} url={url} />}
    </>
  );
}
