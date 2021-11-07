import React from "react";
export interface Props {
  data: string[];
}
export default function Home(data: Props) {
  console.log(data);
  return <div></div>;
}
