import React from "react";

export default function index({}) {
  return <div>hello</div>;
}

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/3");
    const response = await res.json();
    return {
      props: { data: response },
    };
  } catch (error) {
    console.error(error);
  }
};
