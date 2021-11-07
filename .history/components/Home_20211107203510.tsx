import React from "react";
import homestyles from "../styles/Home.module.css";
//Prop type check
export interface Props {
  data: string[];
}

export default function Home({ data }: Props) {
  console.log(data);
  return <div className="contianer">hello</div>;
}
