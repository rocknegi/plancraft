import React from "react";

export default function index() {
  return <div>hello</div>;
}

export const getStaticProps = async () => {
  const res: any = await fetch("https://dog.ceo/api/breeds/image/random/3");
  console.log(typeof res);
};
