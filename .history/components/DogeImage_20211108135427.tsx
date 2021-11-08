import React, { useState } from "react";
import { useRecoilState } from "recoil";

import homestyles from "../styles/Home.module.css";
import Modal from "./Modal";

//Prop type check
export interface Props {
  url: string;
}

export const listItem = atomFamily({
  key: "listItem",
  default: (id) => ({ id, count: 0 }),
});

export default function DogeImage({ url }: Props) {
  const [modal, toggleModal] = useState<boolean>(false);
  const [item, setItem] = useRecoilState(listItem(id));
  //Handle visibility of the Modal
  const onImageClick = () => {
    toggleModal(!modal);
  };
  return (
    <>
      <img onClick={onImageClick} className={homestyles.img} src={url} />
      {modal && <Modal toggleModal={onImageClick} url={url} />}
    </>
  );
}
