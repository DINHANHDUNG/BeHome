import React from "react";
import { Link } from "react-router-dom";
import { ProductHomePage } from "../../../types/product-home-page";
import Product from "./product";
interface propsProduct {
  product: ProductHomePage;
}
function Listproduct(props: propsProduct) {
  console.log("props", props);

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
        <span>{props.product?.name}</span>
        <Link
          to={
            props.product.type === "PRODUCT"
              ? `danhmucproduct/${props.product?.id}`
              : `danhmuccombo/${props.product?.id}`
          }
          style={{ fontSize: "16px" }}
        >
          Xem thêm
        </Link>
      </h2>

      <div className="products mb-3">
        <div className="row">
          {/* <div className="col-6 col-md-4 col-xl-3">
            <Product />
          </div> */}

          {props.product.products?.length > 0
            ? props.product.products.slice(0, 8).map((value, idx) => (
                <div className="col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2" key={idx}>
                  <Product value={value} />
                </div>
              ))
            : props.product.combos.slice(0, 8).map((value, idx) => (
                <div className="col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2" key={idx}>
                  <Product value={value} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Listproduct;
