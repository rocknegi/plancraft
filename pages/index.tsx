import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { v4 as uuid_v4 } from "uuid";
import InfiniteScroll from "react-infinite-scroll-component";

import DogeImage from "../components/DogeImage";
import indexStyles from "../styles/Index.module.css";

//Prop type check
interface Props {
  data: string[];
}
interface Object {
  id: string;
  link: string;
}

//Create an ATOM to use as component state
const imagesState = atom({
  key: "list",
  default: [{}],
});

export default function Index({ data }: Props) {
  //convert the API data received as an array of strings to an object
  // with a uuid for identification
  const addCounter = (list: string[]): [{}] => {
    let temp: any = [];
    list.map((item) => {
      const newItem: Object = {
        id: uuid_v4(),
        link: item,
      };
      temp.push(newItem);
    });
    return temp;
  };

  const [images, setImages] = useRecoilState(imagesState);

  //Populate the state with the API data once on App load
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
          {images.map(({ id, link }: any, index: number) => (
            <DogeImage key={index} id={id} url={link} />
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
