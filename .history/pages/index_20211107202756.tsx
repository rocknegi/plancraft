import React from "react";
import Home from "../components/Home";

export default function index(data: string[]) {
  return <Home data={data} />;
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
