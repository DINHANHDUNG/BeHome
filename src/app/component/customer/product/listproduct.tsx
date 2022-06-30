import React from "react";
import { Link } from "react-router-dom";
import Product from "./product";
function Listproduct() {
  return (
    <div>
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
        Máy tính
        {/* <Link  to={`danhmuc/${props.value.id}`} style={{ fontSize: "16px" }}>Xem thêm</Link> */}
        <Link  to={``} style={{ fontSize: "16px" }}>Xem thêm</Link>
      </h2>

      <div className="products mb-3">
        <div className="row">
          <div className="col-6 col-md-4 col-xl-3">
            <Product />
          </div>
          <div className="col-6 col-md-4 col-xl-3">
            <Product />
          </div>
          <div className="col-6 col-md-4 col-xl-3">
            <Product />
          </div>

          <div className="col-6 col-md-4 col-xl-3">
            <Product />
          </div>
          {/* {props.value.products.slice(0, 8).map((value) => (
            <div className="col-6 col-md-4 col-xl-3">
              <ItemProduct value={value} />
            </div>
          ))} */}
        </div>
      </div>
      {/* <Slider {...settings}>
        {props.value.products.map((e) => (
          <div className="slide-home-page" style={{ margin: "10px" }}>
            <ItemProduct value={e} />
          </div>
        ))}
      </Slider> */}
    </div>
  );
}

export default Listproduct;
