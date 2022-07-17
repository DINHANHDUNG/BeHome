import React from "react";
import { ProductHomePage } from "../../../types/product-home-page";
import Product from "../product/product";
interface propsProduct {
  product: ProductHomePage;
}
function CarouselProduct(props: propsProduct) {
  return (
    <div className="container-fluid">
      <div
        className="tab-pane p-0 fade show active"
        id="products-featured-tab"
        role="tabpanel"
        aria-labelledby="products-featured-link"
      >
        <div
          className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
          data-toggle="owl"
          data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'
        >
          {props.product.products?.length > 0
            ? props.product.products.slice(0, 8).map((value, idx) => (
                <div
                  className="col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2"
                  key={idx}
                >
                  <Product value={value} />
                </div>
              ))
            : props.product.combos.slice(0, 8).map((value, idx) => (
                <div
                  className="col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2"
                  key={idx}
                >
                  <Product value={value} />
                </div>
              ))}
          {/* <div className="product product-11 text-center">
            <figure className="product-media">
              <span className="product-label label-circle label-sale">
                Sale
              </span>
              <a href="product.html">
                <img
                  src="http://103.173.155.138:5500/images/01ecbc32a1e3450fbf0fc4320469a21c.jpg"
                  alt="Product image"
                  className="product-image"
                />
                <img
                  src="assets/images/demos/demo-2/products/product-4-2.jpg"
                  alt="Product image"
                  className="product-image-hover"
                />
              </a>

              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist">
                  <span>add to wishlist</span>
                </a>
              </div>
            </figure>

            <div className="product-body">
              <h3 className="product-title">
                <a href="product.html">Roots Sofa Bed</a>
              </h3>
              <div className="product-price">
                <span className="new-price">$337,00</span>
                <span className="old-price">Was $449,00</span>
              </div>

              <div className="product-nav product-nav-dots">
                <a
                  href="#"
                  className="active"
                  style={{ backgroundColor: "#878883" }}
                >
                  <span className="sr-only">Color name</span>
                </a>
                <a href="#" style={{ backgroundColor: "#dfd5c2" }}>
                  <span className="sr-only">Color name</span>
                </a>
              </div>
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
            </div>
          </div>

          <div className="product product-11 text-center">
            <figure className="product-media">
              <span className="product-label label-circle label-sale">
                Sale
              </span>
              <a href="product.html">
                <img
                  src="http://103.173.155.138:5500/images/01ecbc32a1e3450fbf0fc4320469a21c.jpg"
                  alt="Product image"
                  className="product-image"
                />
                <img
                  src="assets/images/demos/demo-2/products/product-4-2.jpg"
                  alt="Product image"
                  className="product-image-hover"
                />
              </a>

              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist">
                  <span>add to wishlist</span>
                </a>
              </div>
            </figure>

            <div className="product-body">
              <h3 className="product-title">
                <a href="product.html">Roots Sofa Bed</a>
              </h3>
              <div className="product-price">
                <span className="new-price">$337,00</span>
                <span className="old-price">Was $449,00</span>
              </div>

              <div className="product-nav product-nav-dots">
                <a
                  href="#"
                  className="active"
                  style={{ backgroundColor: "#878883" }}
                >
                  <span className="sr-only">Color name</span>
                </a>
                <a href="#" style={{ backgroundColor: "#dfd5c2" }}>
                  <span className="sr-only">Color name</span>
                </a>
              </div>
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
            </div>
          </div>

          <div className="product product-11 text-center">
            <figure className="product-media">
              <span className="product-label label-circle label-sale">
                Sale
              </span>
              <a href="product.html">
                <img
                  src="http://103.173.155.138:5500/images/01ecbc32a1e3450fbf0fc4320469a21c.jpg"
                  alt="Product image"
                  className="product-image"
                />
                <img
                  src="assets/images/demos/demo-2/products/product-4-2.jpg"
                  alt="Product image"
                  className="product-image-hover"
                />
              </a>

              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist">
                  <span>add to wishlist</span>
                </a>
              </div>
            </figure>

            <div className="product-body">
              <h3 className="product-title">
                <a href="product.html">Roots Sofa Bed</a>
              </h3>
              <div className="product-price">
                <span className="new-price">$337,00</span>
                <span className="old-price">Was $449,00</span>
              </div>

              <div className="product-nav product-nav-dots">
                <a
                  href="#"
                  className="active"
                  style={{ backgroundColor: "#878883" }}
                >
                  <span className="sr-only">Color name</span>
                </a>
                <a href="#" style={{ backgroundColor: "#dfd5c2" }}>
                  <span className="sr-only">Color name</span>
                </a>
              </div>
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
            </div>
          </div>

          <div className="product product-11 text-center">
            <figure className="product-media">
              <span className="product-label label-circle label-sale">
                Sale
              </span>
              <a href="product.html">
                <img
                  src="http://103.173.155.138:5500/images/01ecbc32a1e3450fbf0fc4320469a21c.jpg"
                  alt="Product image"
                  className="product-image"
                />
                <img
                  src="assets/images/demos/demo-2/products/product-4-2.jpg"
                  alt="Product image"
                  className="product-image-hover"
                />
              </a>

              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist">
                  <span>add to wishlist</span>
                </a>
              </div>
            </figure>

            <div className="product-body">
              <h3 className="product-title">
                <a href="product.html">Roots Sofa Bed</a>
              </h3>
              <div className="product-price">
                <span className="new-price">$337,00</span>
                <span className="old-price">Was $449,00</span>
              </div>

              <div className="product-nav product-nav-dots">
                <a
                  href="#"
                  className="active"
                  style={{ backgroundColor: "#878883" }}
                >
                  <span className="sr-only">Color name</span>
                </a>
                <a href="#" style={{ backgroundColor: "#dfd5c2" }}>
                  <span className="sr-only">Color name</span>
                </a>
              </div>
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
            </div>
          </div>

          <div className="product product-11 text-center">
            <figure className="product-media">
              <span className="product-label label-circle label-sale">
                Sale
              </span>
              <a href="product.html">
                <img
                  src="http://103.173.155.138:5500/images/01ecbc32a1e3450fbf0fc4320469a21c.jpg"
                  alt="Product image"
                  className="product-image"
                />
                <img
                  src="assets/images/demos/demo-2/products/product-4-2.jpg"
                  alt="Product image"
                  className="product-image-hover"
                />
              </a>

              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist">
                  <span>add to wishlist</span>
                </a>
              </div>
            </figure>

            <div className="product-body">
              <h3 className="product-title">
                <a href="product.html">Roots Sofa Bed</a>
              </h3>
              <div className="product-price">
                <span className="new-price">$337,00</span>
                <span className="old-price">Was $449,00</span>
              </div>

              <div className="product-nav product-nav-dots">
                <a
                  href="#"
                  className="active"
                  style={{ backgroundColor: "#878883" }}
                >
                  <span className="sr-only">Color name</span>
                </a>
                <a href="#" style={{ backgroundColor: "#dfd5c2" }}>
                  <span className="sr-only">Color name</span>
                </a>
              </div>
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
            </div>
          </div>

          <div className="product product-11 text-center">
            <figure className="product-media">
              <span className="product-label label-circle label-sale">
                Sale
              </span>
              <a href="product.html">
                <img
                  src="http://103.173.155.138:5500/images/01ecbc32a1e3450fbf0fc4320469a21c.jpg"
                  alt="Product image"
                  className="product-image"
                />
                <img
                  src="assets/images/demos/demo-2/products/product-4-2.jpg"
                  alt="Product image"
                  className="product-image-hover"
                />
              </a>

              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist">
                  <span>add to wishlist</span>
                </a>
              </div>
            </figure>

            <div className="product-body">
              <h3 className="product-title">
                <a href="product.html">Roots Sofa Bed</a>
              </h3>
              <div className="product-price">
                <span className="new-price">$337,00</span>
                <span className="old-price">Was $449,00</span>
              </div>

              <div className="product-nav product-nav-dots">
                <a
                  href="#"
                  className="active"
                  style={{ backgroundColor: "#878883" }}
                >
                  <span className="sr-only">Color name</span>
                </a>
                <a href="#" style={{ backgroundColor: "#dfd5c2" }}>
                  <span className="sr-only">Color name</span>
                </a>
              </div>
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
            </div>
          </div>

          <div className="product product-11 text-center">
            <figure className="product-media">
              <span className="product-label label-circle label-sale">
                Sale
              </span>
              <a href="product.html">
                <img
                  src="http://103.173.155.138:5500/images/01ecbc32a1e3450fbf0fc4320469a21c.jpg"
                  alt="Product image"
                  className="product-image"
                />
                <img
                  src="assets/images/demos/demo-2/products/product-4-2.jpg"
                  alt="Product image"
                  className="product-image-hover"
                />
              </a>

              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist">
                  <span>add to wishlist</span>
                </a>
              </div>
            </figure>

            <div className="product-body">
              <h3 className="product-title">
                <a href="product.html">Roots Sofa Bed</a>
              </h3>
              <div className="product-price">
                <span className="new-price">$337,00</span>
                <span className="old-price">Was $449,00</span>
              </div>

              <div className="product-nav product-nav-dots">
                <a
                  href="#"
                  className="active"
                  style={{ backgroundColor: "#878883" }}
                >
                  <span className="sr-only">Color name</span>
                </a>
                <a href="#" style={{ backgroundColor: "#dfd5c2" }}>
                  <span className="sr-only">Color name</span>
                </a>
              </div>
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
            </div>
          </div>

          <div className="product product-11 text-center">
            <figure className="product-media">
              <span className="product-label label-circle label-sale">
                Sale
              </span>
              <a href="product.html">
                <img
                  src="http://103.173.155.138:5500/images/01ecbc32a1e3450fbf0fc4320469a21c.jpg"
                  alt="Product image"
                  className="product-image"
                />
                <img
                  src="assets/images/demos/demo-2/products/product-4-2.jpg"
                  alt="Product image"
                  className="product-image-hover"
                />
              </a>

              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist">
                  <span>add to wishlist</span>
                </a>
              </div>
            </figure>

            <div className="product-body">
              <h3 className="product-title">
                <a href="product.html">Roots Sofa Bed</a>
              </h3>
              <div className="product-price">
                <span className="new-price">$337,00</span>
                <span className="old-price">Was $449,00</span>
              </div>

              <div className="product-nav product-nav-dots">
                <a
                  href="#"
                  className="active"
                  style={{ backgroundColor: "#878883" }}
                >
                  <span className="sr-only">Color name</span>
                </a>
                <a href="#" style={{ backgroundColor: "#dfd5c2" }}>
                  <span className="sr-only">Color name</span>
                </a>
              </div>
            </div>
            <div className="product-action">
              <a href="#" className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CarouselProduct;
