import React from "react";
export interface Props {
  data: string[];
}
export default function Home({ data }: { data: Object }) {
  console.log(data);
  return <div></div>;
}
