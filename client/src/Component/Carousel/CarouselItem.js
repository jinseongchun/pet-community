const CarouselItem = ({ slide, stopSlide, startSlide }) => {
  return (
    <div
      className="custom-carousel-item"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <img src={slide} />
    </div>
  );
};

export default CarouselItem;
