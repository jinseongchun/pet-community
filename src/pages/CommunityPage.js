import Carousel from "../components/Carousel/Carousel";
import MultiCarousel from "../components/Carousel/MultiCarousel";

const CommunityPage = () => {
  const slides = [
    "https://picsum.photos/id/1032/1200/400",
    "https://picsum.photos/id/1033/1200/400",
    "https://picsum.photos/id/1037/1200/400",
    "https://picsum.photos/id/1035/1200/400",
    "https://picsum.photos/id/1036/1200/400",
  ];

  const slides2 = [
    "https://picsum.photos/id/1032/1200/400",
    "https://picsum.photos/id/1033/1200/400",
    "https://picsum.photos/id/1037/1200/400",
    "https://picsum.photos/id/1035/1200/400",
    "https://picsum.photos/id/1036/1200/400",
    "https://picsum.photos/id/1037/1200/400",
    "https://picsum.photos/id/1038/1200/400",
  ];

  return (
    <>
      <Carousel slides={slides} controls indicators width={1200} />
      <MultiCarousel slides={slides2} controls width={1200} />
    </>
  );
};

export default CommunityPage;
