import React from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="product">
      <figure className="product-media">
        <Link to={"/detailproduct"}>
          <img
            src="assets/images/demos/demo-13/products/product-7.jpg"
            alt="Product image"
            className="product-image"
          />
        </Link>

        <div className="product-action">
          <Link
            to={"/detailproduct"}
            className="btn-product btn-cart"
            title="Add to cart"
          >
            <span>add to cart</span>
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
