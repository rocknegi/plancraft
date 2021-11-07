import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import modalStyle from "../styles/Modal.module.css";

export interface Props {
  url: string;
  toggleModal: (event: React.MouseEvent<HTMLElement>) => void;
}
export default function Modal({ url, toggleModal }: Props) {
  return (
    <div onClick={toggleModal} className={modalStyle.container}>
      {/* <img className={modalStyle.img} src={url} /> */}

      <TransformWrapper
        initialScale={1}
        initialPositionX={"-100rem"}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className={modalStyle.tools}>
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div>
            <TransformComponent>
              <img className={modalStyle.img} src={url} />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}
