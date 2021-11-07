import React from "react";
import homestyles from "../styles/Home.module.css";
//Prop type check
export interface Props {
  key: number;
  url: string;
}

export default function Home({ url, key }: any) {
  console.log(key);
  return (
    <div className={homestyles.container}>
      {/* <img key={key} src={url} /> */}
    </div>
  );
}
