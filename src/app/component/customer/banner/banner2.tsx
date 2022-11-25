import { Image } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { companyAdminStore } from '../../../../use-selector';
import { useAppSelector } from '../../../hooks';
import { Company } from '../../../types/company';
let dragging = false;
function Banner2(props: { Company: Company }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2500,
    beforeChange: () => dragging = true,
    afterChange: () => dragging = false,
  };
  const history = useNavigate();
  return (
    <div className="banner">
      <Slider {...settings}>
        {props.Company.images?.map((val, idx) => (
          <img
            key={idx}
            src={'http://103.137.184.193:5500/images/' + val.imagename}
            alt=""
            style={{
              height: '100px',
              objectFit: 'contain',
              aspectRatio: '135 / 76',
            }}
            onClick={(e) => {
              e.preventDefault();
              if (!dragging) {
                if (val?.id_category) {
                  history('danhmucproduct/' + val.id_category);
                }
              }
            }}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Banner2;
