import React from "react";
import homestyles from "../styles/Home.module.css";
//Prop type check
export interface Props {
  url: string;
  key: number;
}

export default function Home({ url, key }: Props) {
  console.log(url);
  return (
    <div className={homestyles.container}>
      <img key={key} src={url} />
    </div>
  );
}
