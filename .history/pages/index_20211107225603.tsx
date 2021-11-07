import React from "react";

import DogeImage from "../components/DogeImage";
import indexStyles from "../styles/Index.module.css";
export interface Props {
  data: string[];
}
export default function index({ data }: Props) {
  return (
    <div className={indexStyles.wrapper}>
      {data.map((url, index) => (
        <div key={index}>
          <DogeImage url={url} />
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/25");
    const response = await res.json();
    return {
      props: { data: response.message },
    };
  } catch (error) {
    console.error(error);
  }
};
