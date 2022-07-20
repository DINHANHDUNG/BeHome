import { Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Combo } from "../../../../types/combo";
import { ProductHomePage } from "../../../../types/product-home-page";
import Product from "../../product/product";
import "./slick.css";
interface propsSlide {
  combo: Array<Combo>;
}
function SlickComBoCarouselHomePage(props: propsSlide) {
  console.log("props", props);

  const settings = {
    dots: false,
    arrows: true,
    // infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 500,
    draggable: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slide-product">
      <h2
        className="title title-border"
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {"COMBO KHUYẾN MẠI"}
        <Link
          to={`danhmuccombo/${0}`}
          style={{ fontSize: "16px", marginRight: "70px" , fontWeight: 400}}
        >
          Xem thêm tất cả
        </Link>
        {/* <Link
          to={
            props.combo.type === "PRODUCT"
              ? `danhmucproduct/${props.combo?.id}`
              : `danhmuccombo/${props.combo?.id}`
          }
          style={{ fontSize: "16px" }}
        >
          Xem thêm
        </Link> */}
      </h2>

      <Slider {...settings}>
        {props.combo.map((e) => (
          <div
            className="slide-home-page"
            style={{ margin: "10px", padding: "10px" }}
          >
            <Product value={e} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickComBoCarouselHomePage;

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
