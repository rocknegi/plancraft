import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

import DogeImage from "../components/DogeImage";
import indexStyles from "../styles/Index.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

//Prop type check
export interface Props {
  data: string[];
}
export const imagesState = atom({
  key: "images",
  default: [{}],
});

export default function Index({ data }: Props) {
  const addCounter = (list: string[]): [{}] => {
    let temp: [{}] = [{}];
    list.map((item) => {
      temp.push({
        link: item,
        counter: 0,
      });
    });
    return temp;
  };
  const [images, setImages] = useRecoilState(imagesState);
  useEffect(() => {
    console.log(data);
    setImages(addCounter(data));
  }, []);
  const fetchImages = async () => {
    //Fetch new 25 images
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/25");
      const response = await res.json();

      //update images state by creating a new array and merging the old images with the new ones
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
        loader={<h3 className={indexStyles.loader}>Loading More Doges.....</h3>}
      >
        {/* loop over the data received from the DOGE API */}
        <div className={indexStyles.wrapper}>
          {images.map((url, index) => (
            <div key={index}>
              <DogeImage url={url.link} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

//Fetch dog's images
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
