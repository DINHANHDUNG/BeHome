import { Image } from 'antd';
import React from 'react';
import Slider from 'react-slick';
import { companyAdminStore } from '../../../../use-selector';
import { useAppSelector } from '../../../hooks';
import { Company } from '../../../types/company';
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
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        {props.Company.images?.map((val, idx) => (
          <img
            key={idx}
            src={'http://103.137.184.193:5500/images/' + val.imagename}
            alt=""
            style={{ height: '100%', objectFit: 'contain' }}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Banner2;
