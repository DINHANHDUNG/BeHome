import React from 'react';
import { Promotion } from '../../../types/promotion';
interface propsBoxPromotion {
  value: Promotion;
}
function BoxPromotion(props: propsBoxPromotion) {
  return (
    <div className="row ">
      <div className="col-sm-12">
        <div className="icon-box icon-box-card">
          <div className="icon-box-content">
            <span className="title-boxpromotion">Quà tặng / Khuyến mại</span>
            <br />
            {/* <p>✔ Tặng chuột foter V181 </p> <p>✔ Lót chuột</p>
            <p> ✔ Túi đựng laptop</p> */}
            {props.value.promotiondetails?.map((val: any, idx) => (
              <p key={idx}>✔ {val.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxPromotion;
