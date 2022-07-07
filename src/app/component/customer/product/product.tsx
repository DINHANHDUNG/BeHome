import React from "react";
import { Link } from "react-router-dom";
import { success } from "../../../hooks";
import { ProductHomePage } from "../../../types/product-home-page";
interface propsProduct {
  value: ProductHomePage;
}
function Product(props: any) {
  console.log("props", props);

  return (
    <div className="product">
      <figure className="product-media">
        <Link to={"/detailproduct"}>
          {/* <img
            src={"http://103.173.155.138:5500/images/" + props.product.imagename}
            alt="Product image"
            className="product-image"
          /> */}
          <img
            src="assets/images/demos/demo-13/products/product-7.jpg"
            alt="Product image"
            className="product-image"
          />
        </Link>

        <div className="product-action">
          <Link
            onClick={() => success("Đã thêm vào giỏ hàng")}
            to={"#"}
            className="btn-product btn-cart"
            title="Add to cart"
          >
            <span>Thêm vào giỏ hàng</span>
          </Link>
        </div>
      </figure>

      <div className="product-body">
        <div className="product-cat">
          <a href="#">Laptops</a>
        </div>
        <h3 className="product-title">
          <a href="product.html">MacBook Pro 13" Display, i5</a>
        </h3>
        <div className="product-price">$1,199.00</div>
      </div>
    </div>
  );
}

export default Product;
