import { useState } from "react";
import CarouselControls from "./CarouselControls";
import MultiCarouselItem from "./MultiCarouselItem";
import "../../css/Carousel.css";

const MultiCarousel = ({ slides, controls = false, width = 1000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  return (
    <div className="multicarousel" style={{ maxWidth: width }}>
      <div className="section-name">안녕하세요</div>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <MultiCarouselItem slide={slide} key={index} />
        ))}
      </div>
      {controls && <CarouselControls prev={prev} next={next} />}
    </div>
  );
};

export default MultiCarousel;
