const CarouselControls = ({ prev, next }) => {
  return (
    <div>
      <button className="custom-carousel-control left" onClick={prev}>
        Prev
      </button>
      <button className="custom-carousel-control right" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default CarouselControls;
