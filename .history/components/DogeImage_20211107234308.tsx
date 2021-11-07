import React, { useState } from "react";
import homestyles from "../styles/Home.module.css";

//Prop type check
export interface Props {
  url: string;
}

export default function DogeImage({ url }: Props) {
  const [modal, toggleModal] = useState<boolean>(true);
  const onImageClick = () => {
    toggleModal(!modal);
  };
  return <img onClick={onImageClick} className={homestyles.img} src={url} />;
}
