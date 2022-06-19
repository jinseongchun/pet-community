import { useState } from "react";
import CarouselControls from "./CarouselControls";
import MultiCarouselItem from "./MultiCarouselItem";
import "../../css/Carousel.css";

const MultiCarousel = ({ PostList, controls = false, width = 1000 }) => {
  const count = PostList.length - 3;
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : PostList.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < count ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  return (
    <div className="custom-multicarousel" style={{ maxWidth: width }}>
      <div className="section-name">
        <h3>애완동물 갤러리</h3>
      </div>
      <div
        className="custom-carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 330}px)` }}
      >
        {PostList.map((post, index) => (
          <MultiCarouselItem post={post} key={index} />
        ))}
      </div>
      {controls && <CarouselControls prev={prev} next={next} />}
    </div>
  );
};

export default MultiCarousel;
