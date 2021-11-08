import React, { useEffect } from "react";
import { atom, atomFamily, useRecoilState } from "recoil";
import { v4 as uuid_v4 } from "uuid";

import DogeImage from "../components/DogeImage";
import indexStyles from "../styles/Index.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

//Prop type check
export interface Props {
  data: string[];
}

export const imagesState = atom({
  key: "list",
  default: [{}],
});
export interface Object {
  id: string;
  link: string;
  counter: number;
}
export default function Index({ data }: Props) {
  const addCounter = (list: string[]): [{}] => {
    let temp: [{}] = [];
    list.map((item) => {
      const newItem: Object = {
        id: uuid_v4(),
        link: item,
        counter: 0,
      };
      temp.push(newItem);
    });
    // console.log(temp);
    return temp;
  };
  const [images, setImages] = useRecoilState(imagesState);
  useEffect(() => {
    setImages(addCounter(data));
  }, []);
  const fetchImages = async () => {
    //Fetch new 25 images
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/25");
      const response = await res.json();
      //
      const newItems = addCounter(response.message);
      //update images state by creating a new array and merging the old images with the new ones
      setImages((images) => [...images, ...newItems]);
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
          {images.map(
            (item) => (
              console.log(item), (<DogeImage id={item.id} url={item.link} />)
            )
          )}
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
