import React from "react";
import { Link } from "react-router-dom";
import { categoryAdminStore } from "../../../../use-selector";
// import logo from "../../../assets/images/logo/avtfb.png"
import logo from "../../../assets/images/logo/biafb.png";
import { useAppSelector } from "../../../hooks";
import { CustomesCompany } from "../../../types/company";

function Header() {
  const categoryTrees = useAppSelector(categoryAdminStore);

  console.log("categoryTrees", categoryTrees);

  return (
    <header className="header header-10">
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button>

            <a href="/" className="logo">
              <img src={logo} alt="" style={{ width: "200px" }} />
              {/* BEHOME */}
            </a>
          </div>
          <div className="header-center">
            <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
              <a href="#" className="search-toggle" role="button">
                {/* <i className="fa-light fa-magnifying-glass"></i> */}
                <i className="fa-brands fa-searchengin"></i>
              </a>
              <form
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   history(
              //     "/search/" +
              //       `${productkey}` +
              //       "/" +
              //       `${null}` +
              //       "/" +
              //       `${null}`
              //   );
              // }}
              >
                <div className="header-search-wrapper search-wrapper-wide">
                  {/* <div className="select-custom">
                  <select id="cat" name="cat">
                    <option value="">Tất cả danh mục</option>
                  </select>
                </div> */}
                  <label className="sr-only">Search</label>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Tìm kiếm sản phẩm ..."
                    name="search"
                    required
                    // onChange={(e) => {
                    //   console.log(e.target.value);
                    //   setProductkey(e.target.value ? e.target.value : null);
                    // }}
                  />
                  <button className="btn btn-primary" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Cart */}
          <div className="header-right">
            <div className="dropdown cart-dropdown">
              <Link
                to={"cart"}
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i className="icon-shopping-cart"></i>
                <span
                  className="cart-count"
                  style={{ position: "absolute", top: "-8px", right: "-8px" }}
                >
                  2
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="dropdown category-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                  title="Br owse Categories"
                >
                  Danh mục
                </a>

                <div className="dropdown-menu">
                  <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                      <li className="megamenu-container">
                        <div className="menu-title pl-4 mt-1">
                          Danh mục bán lẻ
                        </div>
                      </li>
                      {categoryTrees.listcategoryProduct?.map((val, idx) =>
                        val.children.length > 0 ? (
                          <li className="megamenu-container" key={idx}>
                            <Link
                              to={`danhmucproduct/${val.id}`}
                              className="sf-with-ul"
                            >
                              {val.name}
                            </Link>
                            {val.children.length > 0 ? (
                              <div className="megamenu">
                                <div className="row no-gutters">
                                  <div className="col-md-12">
                                    <div className="menu-col">
                                      <div className="row">
                                        {val.children?.map((val2) => (
                                          <div className="col-md-4">
                                            <div className="menu-title ">
                                              <Link
                                                to={`danhmucproduct/${val2.id}`}
                                              >
                                                {val2.name}
                                              </Link>
                                            </div>
                                            {val2.children?.length > 0 ? (
                                              <ul>
                                                {val2.children?.map((val3) => (
                                                  // cap 4 thi them className="sf-with-ul" vaof li
                                                  <li>
                                                    <Link
                                                      to={`danhmucproduct/${val3.id}`}
                                                    >
                                                      {val3.name}
                                                    </Link>
                                                    {/* cap 4 */}
                                                    {/* {val2.children.length > 0 ? (
                                                    <ul>
                                                      {val2.children?.map(
                                                        (val3) => (
                                                          <li>
                                                            <a href="about.html">
                                                              {val3.name}
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  ) : null} */}
                                                  </li>
                                                ))}
                                              </ul>
                                            ) : (
                                              <ul>
                                                <li>
                                                  <Link
                                                    to={`danhmucproduct/${val2.id}`}
                                                  >
                                                    {val2.name}
                                                  </Link>
                                                </li>
                                              </ul>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : null}
                          </li>
                        ) : (
                          <li>
                            <Link to={`danhmucproduct/${val.id}`}>
                              {val.name}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>

                    <ul className="menu-vertical sf-arrows">
                      <li className="megamenu-container">
                        <div className="menu-title pl-4 mt-1">
                          Danh mục combo
                        </div>
                      </li>

                      {categoryTrees.listcategoryCombo?.map((val) =>
                        val.children.length > 0 ? (
                          <li className="megamenu-container">
                            {/* <Link to={`danhmuc`} className="sf-with-ul">
                              {val.name}
                            </Link> */}
                            <Link
                              to={`danhmuccombo/${val.id}`}
                              className="sf-with-ul"
                            >
                              {val.name}
                            </Link>
                            {val.children.length > 0 ? (
                              <div className="megamenu">
                                <div className="row no-gutters">
                                  <div className="col-md-12">
                                    <div className="menu-col">
                                      <div className="row">
                                        {val.children?.map((val2) => (
                                          <div className="col-md-4">
                                            <div className="menu-title ">
                                              <Link
                                                to={`danhmuccombo/${val2.id}`}
                                              >
                                                {val2.name}
                                              </Link>
                                            </div>
                                            {val2.children?.length > 0 ? (
                                              <ul>
                                                {val2.children?.map((val3) => (
                                                  // cap 4 thi them className="sf-with-ul" vaof DFli
                                                  <li>
                                                    <Link
                                                      to={`danhmuccombo/${val3.id}`}
                                                    >
                                                      {val3.name}
                                                    </Link>
                                                    {/* cap 4 */}
                                                    {/* {val2.children.length > 0 ? (
                                                    <ul>
                                                      {val2.children?.map(
                                                        (val3) => (
                                                          <li>
                                                            <a href="about.html">
                                                              {val3.name}
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  ) : null} */}
                                                  </li>
                                                ))}
                                              </ul>
                                            ) : (
                                              <ul>
                                                <li>
                                                  <Link
                                                    to={`danhmuccombo/${val2.id}`}
                                                    className="sf-with-ul"
                                                  >
                                                    {val2.name}
                                                  </Link>
                                                </li>
                                              </ul>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : null}
                          </li>
                        ) : (
                          <li>
                            <Link to={`danhmuccombo/${val.id}`}>
                              {val.name}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  {/* active Thêm gạch chân */}
                  <li className="megamenu-container ">
                    {/* className="sf-with-ul" */}
                    <a href="/">Trang chủ</a>
                  </li>

                  <li className="megamenu-container ">
                    {/* className="sf-with-ul" */}
                    <Link to={"/build"}>Thiết kế xây dựng</Link>
                  </li>

                  <li className="megamenu-container ">
                    {/* className="sf-with-ul" */}
                    <a href="/">Hotline</a>
                  </li>

                  {/* <li>
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
                    </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
