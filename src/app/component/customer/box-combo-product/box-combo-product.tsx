import React from "react";
import { Numberformat } from "../../../hooks";
import "./styleBoxCombo.css";

function BoxComboProduct() {
  return (
    <div className="row mt-2">
      <div className="col-sm-12">
        <div className="icon-boxCombo icon-boxCombo-card">
          <div className="icon-boxCombo-content">
            <span className="title-boxCombo">Mua theo combo</span>
            <br />

            <div className="icon-boxCombo-info mt-2">
              <div className="icon-boxCombo-info-img">
                <img
                  src="http://103.173.155.138:5500/images/8d7c4355be064d3593e38ef56a480c4a.jpg"
                  style={{ height: "50px", width: "50px", objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div className="icon-boxCombo-info-product">
                <span>Laptop ACE</span>
                <br />
                <span>{Numberformat(2000000000)} VNĐ </span>
                <del style={{ fontSize: "13px", opacity: "0.4" }}>
                  {Numberformat(3000000000)} VNĐ
                </del>{" "}
              </div>
            </div>
            <div className="icon-boxCombo-info mt-2">
              <div className="icon-boxCombo-info-img">
                <img
                  src="https://zda.vn/wp-content/uploads/2021/04/chuot-fuhlen-12.jpg"
                  style={{ height: "50px", width: "50px", objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div className="icon-boxCombo-info-product">
                <span>Chuột Fulhen</span>
                <br />
                <span>{Numberformat(2000000000)} VNĐ </span>
                <del style={{ fontSize: "13px", opacity: "0.4" }}>
                  {Numberformat(3000000000)} VNĐ
                </del>{" "}
              </div>
            </div>
            <div className="row">
              <div
                className="col-6"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="price-combo">
                  <span style={{ fontWeight: 500 }}>Giá combo:</span>{" "}
                  <span style={{ fontWeight: 500, color: '#d30808f7' }}>
                    {Numberformat(5000000)} VNĐ
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="product-details-action mt-2 mb-1 ">
                  <a href="#" className="btn-product btn-cart">
                    <span>Mua combo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* {props.value.promotion.promotiondetails?.map((val: any) => (
              <p>✔ {val.promotiondetail_name}</p>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxComboProduct;
