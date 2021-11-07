import React from "react";
import homestyles from "../styles/Home.module.css";
//Prop type check
export interface Props {
  url: string;
  id: number;
}

export default function Home({ url, id }: Props) {
  console.log(url);
  return (
    <div className={homestyles.container}>
      <img key={id} src={url} />
    </div>
  );
}
