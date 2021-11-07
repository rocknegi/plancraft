import React from "react";
import DogeImage from "../components/DogeImage";
export interface Props {
  data: string[];
}
export default function index({ data }: Props) {
  return (
    <>
      {data.map((url, index) => (
        <div key={index}>
          <DogeImage url={url} />
        </div>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/4");
    const response = await res.json();
    return {
      props: { data: response.message },
    };
  } catch (error) {
    console.error(error);
  }
};
