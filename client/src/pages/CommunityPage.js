import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../Component/Carousel/Carousel";
import MultiCarousel from "../Component/Carousel/MultiCarousel";

const CommunityPage = () => {
  const [PostList, setPostList] = useState([]);
  const [IsVisible, setIsVisible] = useState(false);
  useEffect(() => {
    axios
      .post("/api/post/latestlist")
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
          console.log(response.data.postList.length);
          if (response.data.postList.length > 3) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const slides = [
    "https://picsum.photos/id/1032/1200/400",
    "https://picsum.photos/id/1033/1200/400",
    "https://picsum.photos/id/1037/1200/400",
    "https://picsum.photos/id/1035/1200/400",
    "https://picsum.photos/id/1036/1200/400",
  ];

  return (
    <>
      <Carousel slides={slides} controls indicators width={1200} />
      <MultiCarousel PostList={PostList} controls={IsVisible} width={1200} />
    </>
  );
};

export default CommunityPage;
