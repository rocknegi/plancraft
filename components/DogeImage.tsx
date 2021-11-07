import React from "react";
import homestyles from "../styles/Home.module.css";

//Prop type check
export interface Props {
  url: string;
}

export default function DogeImage({ url }: Props) {
  return <img className={homestyles.img} src={url} />;
}
