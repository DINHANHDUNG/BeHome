import { Image } from "antd";
import React from "react";
import Slider from "react-slick";
function Banner2() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 500,
  };
  return (
    <div className="banner">
      <Slider {...settings} >
        <img
          src="https://www.laptopdealer.vn/image/banner-1-ee.jpg"
          alt=""
          style={{ height: "100%", objectFit: "cover" }}
        />
        <img
          src="https://theme.hstatic.net/200000251697/1000655457/14/smallbanner_img1.jpg?v=277"
          alt=""
          style={{ height: "100%", objectFit: "cover" }}
        />
        <img
          src="https://tinhocmiennam.com/wp-content/uploads/2018/06/laptop-banner.jpg"
          alt=""
          style={{ height: "100%", objectFit: "cover" }}
        />
      </Slider>
    </div>
  );
}

export default Banner2;
