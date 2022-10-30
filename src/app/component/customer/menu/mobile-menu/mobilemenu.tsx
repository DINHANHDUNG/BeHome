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
      <div className="mobile-menu-overlay" onClick={()=>document.body.classList.remove('mmenu-active')}></div>

      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close" onClick={()=>document.body.classList.remove('mmenu-active')}>
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

          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu" onClick={()=>document.body.classList.remove('mmenu-active')}>
                  {/* <li className="active close-menu-mobile">
                    <a className="close-menu-mobile" href="/">
                      Trang chủ
                    </a>
                  </li>
                  <li className="active">
                    <Link to={"/buildcustomer"}>Thiết kế nội thất</Link>
                  </li>

                  <li>
                    <a href={"tel:" + company.Company.phonenumber}>
                      {company.Company.phonenumber}
                    </a>
                  </li>

                  <li>
                    <a href={"mailto:" + company.Company.email}>
                      {company.Company.email}
                    </a>
                  </li> */}
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
                                {/* <li>
                                  <Link to={`danhmucproduct/${val2.id}`}>
                                    {val2.name}
                                  </Link>
                                </li> */}
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
                    )
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
                                {/* <li>
                                  <Link to={`danhmuccombo/${val2.id}`}>
                                    {val2.name}
                                  </Link>
                                </li> */}
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
                    )
                  )}
                  {/* 
                  {category.listcategory.map((val) => (
                    <li className="mobile-menu-close">
                      <Link to={`laptop/${val.id}`}>{val.categoryname}</Link>
                      <ul>
                        <li>
                          <Link to={`laptop/${val.id}`}>
                            {val.categoryname}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  ))} */}

                  {/* <li>
                    <a href="#">Laptop</a>
                    <ul>
                      {category.listcategory.map((val) => (
                        <li className="mobile-menu-close">
                          <Link to={`laptop/${val.id}`}>
                            {val.categoryname}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li> */}

                  {/* {category.listcategory?.map((val) => (
                    <li key={val.id}>
                      <Link to={`danhmuc/${val.id}`}>{val.categoryname}</Link>
                      <ul style={{ display: "block" }}>
                        {val.children?.map((v) => (
                          <li>
                            <Link to={`danhmuc/${v.id}`}>{v.categoryname}</Link>
                            {v.children?.length > 0 ? (
                              <ul style={{ display: "block" }}>
                                {v.children?.map((e) => (
                                  <li>
                                    <Link to={`danhmuc/${e.id}`}>
                                      {e.categoryname}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))} */}

                  {/* <li>
                    <Link to="category.html">Shop</Link>
                    <ul>
                      <li>
                        <Link to="category-list.html">Shop List</Link>
                      </li>
                      <li>
                        <Link to="category-2cols.html">Shop Grid 2 Columns</Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div
              className="tab-pane fade"
              id="mobile-cats-tab"
              role="tabpanel"
              aria-labelledby="mobile-cats-link"
            >
              <nav className="mobile-cats-nav">
                <ul className="mobile-cats-menu">
                  <li style={{ fontWeight: 500, cursor: 'none' }}>
                    <a href="/">Danh mục bán lẻ</a>
                  </li>

                  <li>
                    <a href="blog.html" className="sf-with-ul">
                      Blog
                    </a>

                    <ul>
                      <li>
                        <a href="blog.html">Classic</a>
                      </li>
                      <li>
                        <a href="blog-listing.html">Listing</a>
                      </li>
                      <li>
                        <a href="#">Grid</a>
                        <ul>
                          <li>
                            <a href="blog-grid-2cols.html">Grid 2 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-3cols.html">Grid 3 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-4cols.html">Grid 4 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-sidebar.html">Grid sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Masonry</a>
                        <ul>
                          <li>
                            <a href="blog-masonry-2cols.html">
                              Masonry 2 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-3cols.html">
                              Masonry 3 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-4cols.html">
                              Masonry 4 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-sidebar.html">
                              Masonry sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Mask</a>
                        <ul>
                          <li>
                            <a href="blog-mask-grid.html">Blog mask grid</a>
                          </li>
                          <li>
                            <a href="blog-mask-masonry.html">
                              Blog mask masonry
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Single Post</a>
                        <ul>
                          <li>
                            <a href="single.html">Default with sidebar</a>
                          </li>
                          <li>
                            <a href="single-fullwidth.html">
                              Fullwidth no sidebar
                            </a>
                          </li>
                          <li>
                            <a href="single-fullwidth-sidebar.html">
                              Fullwidth with sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="mobile-cats-lead" href="#">
                      Daily offers
                    </a>
                  </li>
                  <li>
                    <a className="mobile-cats-lead" href="#">
                      Gift Ideas
                    </a>
                  </li>
                  <li>
                    <a href="#">Beds</a>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                  </li>
                  <li>
                    <a href="#">Sofas & Sleeper sofas</a>
                  </li>
                  <li>
                    <a href="#">Storage</a>
                  </li>
                  <li>
                    <a href="#">Armchairs & Chaises</a>
                  </li>
                  <li>
                    <a href="#">Decoration </a>
                  </li>
                  <li>
                    <a href="#">Kitchen Cabinets</a>
                  </li>
                  <li>
                    <a href="#">Coffee & Tables</a>
                  </li>
                  <li>
                    <a href="#">Outdoor Furniture </a>
                  </li>
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
