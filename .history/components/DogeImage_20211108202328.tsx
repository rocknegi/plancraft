import React, { useState } from "react";
import { atomFamily, useRecoilState } from "recoil";

import homestyles from "../styles/Home.module.css";
import Modal from "./Modal";

//Prop type check
export interface Props {
  url: string;
  id: string;
}

export const listItem = atomFamily({
  key: "listItem",
  default: (id: string) => ({ id, count: 0 }),
});

export default function DogeImage({ url, id }: Props) {
  const [modal, toggleModal] = useState<boolean>(false);
  const [item, setItem] = useRecoilState(listItem(id));

  //Handle visibility of the Modal
  const onImageClick = () => {
    // Increment the count value
    if (!modal) setItem((item) => ({ ...item, count: item.count + 1 }));

    toggleModal(!modal);
  };
  return (
    <>
      <div className={homestyles.imgContainer}>
        <img onClick={onImageClick} className={homestyles.img} src={url} />
        <div className={homestyles.count}>Click Count: {item.count}</div>
      </div>
      {modal && <Modal toggleModal={onImageClick} url={url} />}
    </>
  );
}