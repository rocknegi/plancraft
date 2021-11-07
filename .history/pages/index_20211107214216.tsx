import React from "react";
import Home from "../components/Home";
export interface Props {
  data: string[];
}
export default function index({ data }: Props) {
  return <div>
    {data.map((item, index) => <Home key={index} url={item} />}
  </div>;
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
