import React, { useState } from "react";
import { atomFamily, useRecoilState } from "recoil";

import homestyles from "../styles/Home.module.css";
import Modal from "./Modal";
import { FaEye } from "react-icons/fa";
//Prop type check
interface Props {
  url: string;
  id: string;
}

//create unique ATOM for every image and add a count parameter
const listItem = atomFamily({
  key: "listItem",
  default: (id: string) => ({ id, count: 0 }),
});

export default function DogeImage({ url, id }: Props) {
  const [modal, toggleModal] = useState<boolean>(false);
  const [item, setItem] = useRecoilState(listItem(id));

  //Handle visibility of the Modal
  const onImageClick = () => {
    toggleModal(!modal);

    // Increment the count value on modal open
    if (!modal) setItem((item) => ({ ...item, count: item.count + 1 }));
  };
  return (
    <>
      <div className={homestyles.imgContainer}>
        <img onClick={onImageClick} className={homestyles.img} src={url} />
        <div className={homestyles.count}>
          <FaEye className={homestyles.icon} /> {item.count}
        </div>
      </div>
      {modal && <Modal toggleModal={onImageClick} url={url} />}
    </>
  );
}
