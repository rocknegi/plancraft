import React from "react";
import Home from "../components/Home";

export default function index({ data }: { data: string[] }) {
  console.log(data);
  return ["1"].map((item) => <Home url={item} />);
}

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/3");
    const response = await res.json();
    return {
      props: { data: response.message },
    };
  } catch (error) {
    console.error(error);
  }
};
