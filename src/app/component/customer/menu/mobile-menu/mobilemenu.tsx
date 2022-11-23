import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  categoryAdminStore,
  companyAdminStore,
} from '../../../../../use-selector';
import { useAppSelector } from '../../../../hooks';

function Mobilemenu() {
  const [productkey, setProductkey] = useState('' as string | null);
  const dispatch = useDispatch();
  const history = useNavigate();
  const categoryTrees = useAppSelector(categoryAdminStore);
  const company = useAppSelector(companyAdminStore);
  useEffect(() => {
    // dispatch(getAllCategoryAdmin());
  }, []);
  return (
    <div>
      <div
        className="mobile-menu-overlay"
        onClick={() => document.body.classList.remove('mmenu-active')}
      ></div>

      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span
            className="mobile-menu-close"
            onClick={() => document.body.classList.remove('mmenu-active')}
          >
            <i className="fa-solid fa-align-justify"></i>
          </span>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              history('/searchproduct/' + `${productkey}`);
            }}
            className="mobile-search"
          >
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Tìm kiếm sản phẩm ..."
              onChange={(e) => {
                console.log(e.target.value);
                setProductkey(e.target.value ? e.target.value : null);
              }}
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="mobile-menu-link"
                data-toggle="tab"
                href="#mobile-menu-tab"
                role="tab"
                aria-controls="mobile-menu-tab"
                aria-selected="true"
              >
                Danh mục sản phẩm
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                id="mobile-cats-link"
                data-toggle="tab"
                href="#mobile-cats-tab"
                role="tab"
                aria-controls="mobile-cats-tab"
                aria-selected="false"
              >
                Danh mục
              </a>
            </li> */}
          </ul>
          {/* <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <a href="index.html">Home</a>
                    <ul>
                      <li>
                        <a href="index-1.html">01 - furniture store</a>
                      </li>
                      <li>
                        <a href="index-2.html">02 - furniture store</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="category.html">Shop</a>
                    <ul>
                      <li>
                        <a href="category-list.html">Shop List</a>
                      </li>
                      <li>
                        <a href="category-2cols.html">Shop Grid 2 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product.html" className="sf-with-ul">
                      Product
                    </a>
                    <ul>
                      <li>
                        <a href="product.html">Default</a>
                      </li>
                      <li>
                        <a href="product-centered.html">Centered</a>
                      </li>
                      <li>
                        <a href="product-extended.html">
                          <span>
                            Extended Info
                            <span className="tip tip-new">New</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="product-sticky.html">Sticky Info</a>
                        <ul>
                          <li>
                            <a href="product.html">Default</a>
                          </li>
                          <li>
                            <a href="product-centered.html">Centered</a>
                          </li>
                          <li>
                            <a href="product-extended.html">
                              <span>
                                Extended Info
                                <span className="tip tip-new">New</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="product-gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="product-sticky.html">Sticky Info</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul
                  className="mobile-menu"
                  onClick={() => document.body.classList.remove('mmenu-active')}
                >
                  <li className="active close-menu-mobile">
                    <a className="close-menu-mobile" href="/">
                      Trang chủ
                    </a>
                  </li>
                  <li className="active">
                    <Link to={'/introduce'}>Giới thiệu</Link>
                  </li>
                  <li className="active">
                    <Link to={'/buildcustomer'}>Xây dựng sản phẩm</Link>
                  </li>
                  <li style={{ fontWeight: 500, cursor: 'none' }}>
                    <a>SẢN PHẨM</a>
                  </li>

                  {categoryTrees.listcategoryProduct?.map((val, idx) =>
                    val.children?.length > 0 ? (
                      <li className="close-menu-mobile">
                        <Link
                          className="sf-with-ul close-menu-mobile"
                          to={`danhmucproduct/${val.id}`}
                        >
                          {val.name}
                        </Link>
                        {val.children?.length > 0
                          ? val.children?.map((val2, idx) => (
                              <ul style={{ display: 'block' }}>
                                <li className="close-menu-mobile">
                                  <Link
                                    to={`danhmucproduct/${val2.id}`}
                                    className="close-menu-mobile"
                                  >
                                    {val2.name}
                                  </Link>
                                  {val2.children?.length > 0 ? (
                                    <ul style={{ display: 'block' }}>
                                      {val2.children?.map((val3, idx) => (
                                        <li className="close-menu-mobile">
                                          <Link
                                            className="close-menu-mobile"
                                            to={`danhmucproduct/${val3.id}`}
                                          >
                                            {val3.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : null}
                                </li>
                              </ul>
                            ))
                          : null}
                      </li>
                    ) : (
                      <li>
                        <Link
                          className="close-menu-mobile"
                          to={`danhmucproduct/${val.id}`}
                        >
                          {val.name}
                        </Link>
                      </li>
                    ),
                  )}

                  <li style={{ fontWeight: 500, cursor: 'none' }}>
                    <a>COMBO</a>
                  </li>

                  {categoryTrees.listcategoryCombo?.map((val, idx) =>
                    val.children?.length > 0 ? (
                      <li>
                        <Link
                          to={`danhmuccombo/${val.id}`}
                          className="sf-with-ul close-menu-mobile"
                        >
                          {val.name}
                        </Link>
                        {val.children?.length > 0
                          ? val.children?.map((val2, idx) => (
                              <ul style={{ display: 'block' }}>
                                <li>
                                  <Link
                                    className="close-menu-mobile"
                                    to={`danhmuccombo/${val2.id}`}
                                  >
                                    {val2.name}
                                  </Link>
                                  {val2.children?.length > 0 ? (
                                    <ul style={{ display: 'block' }}>
                                      {val2.children?.map((val3, idx) => (
                                        <li>
                                          <Link
                                            className="close-menu-mobile"
                                            to={`danhmuccombo/${val3.id}`}
                                          >
                                            {val3.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : null}
                                </li>
                              </ul>
                            ))
                          : null}
                      </li>
                    ) : (
                      <li>
                        <Link
                          className="close-menu-mobile"
                          to={`danhmuccombo/${val.id}`}
                        >
                          {val.name}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </nav>
            </div>
          </div>

          {/* <div className="social-icons">
            <a
              href="https://www.facebook.com/messages/t/775541669472633"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter"></i>
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube"></i>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Mobilemenu;
