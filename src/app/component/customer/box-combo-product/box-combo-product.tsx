import React, { useEffect, useState } from "react";
import { Numberformat } from "../../../hooks";
import { Combo } from "../../../types/combo";
import "./styleBoxCombo.css";
interface PropsComboProduct {
  combo: Combo;
}

function BoxComboProduct(props: PropsComboProduct) {
  console.log("props", props.combo);

  const [total, setTotal] = useState(0);
  // useEffect(() => {
  //   var newtotal = 0;
  //   props.combo?.combo_products?.map((val) => {
  //     newtotal = newtotal + val.product.price;
  //   });

  //   setTotal(newtotal);
  // }, [props.combo]);

  return (
    <div className="row mt-2">
      <div className="col-sm-12">
        <div className="icon-boxCombo icon-boxCombo-card">
          <div className="icon-boxCombo-content">
            <span className="title-boxCombo">Danh sách sản phẩm</span>
            <br />

            {props.combo?.combo_products?.map((val) => (
              <div className="icon-boxCombo-info mt-2 mb-2">
                <div className="icon-boxCombo-info-img">
                  {val.product.images?.length > 0 ? (
                    <img
                      src={
                        "http://103.173.155.138:5500/images/" +
                        val.product?.images[0]?.imagename
                      }
                      style={{
                        height: "70px",
                        width: "70px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      alt=""
                    />
                  ) : null}
                </div>

                <div className="icon-boxCombo-info-product">
                  <span style={{ color: "#d30808f7", cursor: "pointer" }}>
                    {val.product?.name}
                  </span>
                  <br />
                  <span>{Numberformat(val.product?.price)} VNĐ </span>
                  <br />
                  <span>Số lượng: {Numberformat(val?.amountproduct)}</span>
                </div>
              </div>
            ))}

            {/* <div className="row mt-2">
              <div
                className="col-12"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="price-combo">
                  <span style={{ fontWeight: 500 }}>Giá combo:</span>{" "}
                  <span style={{ fontWeight: 500, color: "#d30808f7" }}>
                    {Numberformat(props.combo?.price)} VNĐ
                  </span>
                  <del style={{ fontSize: "13px", opacity: "0.4" }} className="ml-2">
                    {Numberformat(total)} VNĐ
                  </del>{" "}
                </div>
              </div>
              <div className="col-6">
                <div
                  className="product-details-action mt-2 mb-1 "
                  style={{ justifyContent: "flex-end" }}
                >
                  <a href="#" className="btn-product btn-cart">
                    <span>Mua combo</span>
                  </a>
                </div>
              </div>
            </div> */}

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
