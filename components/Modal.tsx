import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import modalStyle from "../styles/Modal.module.css";

//Prop type check
interface Props {
  url: string;
  toggleModal: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Modal({ url, toggleModal }: Props) {
  return (
    <div onClick={toggleModal} className={modalStyle.container}>
      {/* zoom-pan-pinch library*/}
      <TransformWrapper>
        <TransformComponent>
          <img className={modalStyle.img} src={url} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
