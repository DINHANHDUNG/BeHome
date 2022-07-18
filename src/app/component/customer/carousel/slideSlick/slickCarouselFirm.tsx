import { Image } from "antd";
import React, { useState } from "react";
import Slider from "react-slick";

function SlickCarousel(props: { value: any }) {
  const [autoPlay, setAutoPlay] = useState(true);

  console.log(autoPlay);
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    draggable: false,
    // cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slide-detailproduct mt-3">
      <Slider {...settings}>
        {props.value?.map((v: any) => (
          <div>
            <img
              onMouseEnter={() => {
                setAutoPlay(false);
              }}
              onMouseLeave={() => setAutoPlay(true)}
              width={"100%"}
              src={"http://103.173.155.138:5500/images/" + v?.imagename}
              alt="product side"
              style={{
                maxHeight: "130px",
                padding: "10px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickCarousel;

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
