import { Image } from 'antd';
import React, { useState } from 'react';
import Slider from 'react-slick';

function SlickCarousel(props: { value: any; toggle: any }) {
  const [autoPlay, setAutoPlay] = useState(true);

  // console.log(autoPlay);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    draggable: false,
    // cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  // console.log(props.value);
  

  return (
    <div className="slide-detailproduct mt-3">
      <Slider {...settings}>
        {props.value?.map((v: any) => (
          <div
            className="slide-detailproduct-item"
            style={{ cursor: 'pointer', }}
          >
            <img
              onMouseEnter={() => {
                setAutoPlay(false);
              }}
              onClick={() => props.toggle(v)}
              onMouseLeave={() => setAutoPlay(true)}
              // width={'100%'}
              src={'http://103.137.184.193:5500/images/' + v?.imagename}
              alt="product side"
              style={{
                maxHeight: '130px',
                width: '90%',
                // padding: '10px',
                objectFit: 'contain',
                border: '1px solid #039',
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
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}
