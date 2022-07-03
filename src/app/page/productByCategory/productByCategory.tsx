import { DatePicker, Slider } from "antd";
import React from "react";
import Listproduct from "../../component/customer/product/listproduct";
import Product from "../../component/customer/product/product";

function ProductByCategory() {
  return (
    <div className="page-content  mt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="toolbox">
              <div className="toolbox-left">
                <div className="toolbox-info" style={{ fontWeight: 500 }}>
                  LAPTOP
                </div>
              </div>

              <div className="toolbox-right">
                <div className="toolbox-sort">
                  <label htmlFor="sortby">Lọc:</label>
                  <div className="select-custom">
                    <select name="sortby" id="sortby" className="form-control">
                      <option value="popularity" selected={true}>
                        Mới nhất
                      </option>
                      <option value="rating">Giảm dần</option>
                      <option value="date">Tăng dần</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="products mb-3">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-4 col-lg-6">
                  <Product />
                </div>
                <div className="col-12 col-md-6 col-xl-4 col-lg-6">
                  <Product />
                </div>
                <div className="col-12 col-md-6 col-xl-4 col-lg-6">
                  <Product />
                </div>
                <div className="col-12 col-md-6 col-xl-4 col-lg-6">
                  <Product />
                </div>
                <div className="col-12 col-md-6 col-xl-4 col-lg-6">
                  <Product />
                </div>

                <div className="col-12 col-md-6 col-xl-4 col-lg-6">
                  <Product />
                </div>
                {/* {props.value.products.slice(0, 8).map((value) => (
            <div className="col-6 col-md-4 col-xl-3">
              <ItemProduct value={value} />
            </div>
          ))} */}
              </div>
            </div>
          </div>
          <aside className="col-lg-3 order-lg-first">
            <div className="sidebar sidebar-shop">
              <div className="widget widget-clean">
                <label>Filters:</label>
                <a href="#" className="sidebar-filter-clear">
                  Clean All
                </a>
              </div>

              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <a
                    data-toggle="collapse"
                    href="#widget-1"
                    role="button"
                    aria-expanded="true"
                    aria-controls="widget-1"
                  >
                    Hãng
                  </a>
                </h3>

                <div className="collapse show" id="widget-1">
                  <div className="widget-body">
                    <div className="filter-items filter-items-count">
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-1"
                          >
                            Dresses
                          </label>
                        </div>
                        <span className="item-count">3</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-2"
                          >
                            T-shirts
                          </label>
                        </div>
                        <span className="item-count">0</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-3"
                          >
                            Bags
                          </label>
                        </div>
                        <span className="item-count">4</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-4"
                          >
                            Jackets
                          </label>
                        </div>
                        <span className="item-count">2</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-5"
                          >
                            Shoes
                          </label>
                        </div>
                        <span className="item-count">2</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-6"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-6"
                          >
                            Jumpers
                          </label>
                        </div>
                        <span className="item-count">1</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-7"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-7"
                          >
                            Jeans
                          </label>
                        </div>
                        <span className="item-count">1</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-8"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-8"
                          >
                            Sportwear
                          </label>
                        </div>
                        <span className="item-count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <a
                    data-toggle="collapse"
                    href="#widget-2"
                    role="button"
                    aria-expanded="true"
                    aria-controls="widget-2"
                  >
                    Size
                  </a>
                </h3>

                <div className="collapse show" id="widget-2">
                  <div className="widget-body">
                    <div className="filter-items">
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-1"
                          >
                            XS
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-2"
                          >
                            S
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked
                            id="size-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-3"
                          >
                            M
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            checked
                            id="size-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-4"
                          >
                            L
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-5"
                          >
                            XL
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-6"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-6"
                          >
                            XXL
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <a
                    data-toggle="collapse"
                    href="#widget-4"
                    role="button"
                    aria-expanded="true"
                    aria-controls="widget-4"
                  >
                    Brand
                  </a>
                </h3>

                <div className="collapse show" id="widget-4">
                  <div className="widget-body">
                    <div className="filter-items">
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="brand-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="brand-1"
                          >
                            Next
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="brand-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="brand-2"
                          >
                            River Island
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="brand-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="brand-3"
                          >
                            Geox
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="brand-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="brand-4"
                          >
                            New Balance
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="brand-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="brand-5"
                          >
                            UGG
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="brand-6"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="brand-6"
                          >
                            F&F
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="brand-7"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="brand-7"
                          >
                            Nike
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <a
                    data-toggle="collapse"
                    href="#widget-5"
                    role="button"
                    aria-expanded="true"
                    aria-controls="widget-5"
                  >
                    Price
                  </a>
                </h3>
                <div className="collapse show" id="widget-5">
                <div className="widget-body">
                    <div className="filter-items filter-items-count">
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-1"
                          >
                            Dưới 10 triệu
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-2"
                          >
                            10 triệu - 15 triệu
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-3"
                          >
                            15 triệu - 20 triệu
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-4"
                          >
                            20 triệu - 25 triệu
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-5"
                          >
                            25 triệu - 30 triệu
                          </label>
                        </div>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-6"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-6"
                          >
                            Trên 30 triệu
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-body">
                    <div className="filter-price">
                      <div className="filter-price-text">
                        Price Range:
                        <Slider
                          range
                          defaultValue={[20, 50]}
                          disabled={false}
                        />
                        {/* <span id="filter-price-range"></span> */}
                      </div>

                      <div id="price-slider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ProductByCategory;
