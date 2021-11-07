import React from "react";
import homestyles from "../styles/Home.module.css";

//Prop type check
export interface Props {
  url: string;
}

export default function Home({ url }: Props) {
  return (
    <div className={homestyles.container}>
      <img src={url} />
    </div>
  );
}
