import React, { useState } from "react";

import DogeImage from "../components/DogeImage";
import indexStyles from "../styles/Index.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

//Prop type check
export interface Props {
  data: string[];
}

export default function index({ data }: Props) {
  const [images, setImages] = useState(data);
  const fetchImages = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/25");
      const response = await res.json();

      //update images by creating a new array and merging the old images with the new ones
      setImages((images) => [...images, ...response.message]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1 className={indexStyles.heading}>DOGE</h1>
      {/* Infinite Scroll library */}
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<h3 style={{ textAlign: "center" }}>Loading.....</h3>}
      >
        {/* loop over the data received from the DOGE API */}
        <div className={indexStyles.wrapper}>
          {images.map((url, index) => (
            <div key={index}>
              <DogeImage url={url} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

//fetch dog's images
export const getStaticProps = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/50");
    const response = await res.json();
    return {
      props: { data: response.message },
    };
  } catch (error) {
    console.error(error);
  }
};
