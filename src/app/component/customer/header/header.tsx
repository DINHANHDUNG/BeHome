import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartStore, categoryAdminStore } from "../../../../use-selector";
// import logo from "../../../assets/images/logo/avtfb.png"
import logo from "../../../assets/images/logo/biafb.png";
import { useAppSelector } from "../../../hooks";
import { CustomesCompany } from "../../../types/company";
interface typeProps {
  company: CustomesCompany;
}
function Header(props: typeProps) {
  const categoryTrees = useAppSelector(categoryAdminStore);
  const cart = useAppSelector(CartStore);
  console.log(cart);

  const history = useNavigate();
  // console.log("categoryTrees", categoryTrees);
  const [productkey, setProductkey] = useState(null as any);

  useEffect(() => {
    localStorage.setItem("InfoOrderCustomer", JSON.stringify(cart));
  }, [cart]);
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
                onSubmit={(e) => {
                  e.preventDefault();
                  history("/searchproduct/" + `${productkey}`);
                }}
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
                    onChange={(e) => {
                      console.log(e.target.value);
                      setProductkey(e.target.value ? e.target.value : null);
                    }}
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
              <a className="dropdown-toggle">
                <i
                  className="icon-shopping-cart"
                  onClick={() => {
                    history("/cart");
                  }}
                ></i>
                <span
                  className="cart-count"
                  style={{ position: "absolute", top: "-8px", right: "-8px" }}
                  onClick={() => {
                    history("/cart");
                  }}
                >
                  {cart.orderdetails?.length}
                </span>
              </a>
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
                                        {val.children?.map((val2, idx) => (
                                          <div className="col-md-4" key={idx}>
                                            <div className="menu-title ">
                                              <Link
                                                to={`danhmucproduct/${val2.id}`}
                                              >
                                                {val2.name}
                                              </Link>
                                            </div>
                                            {val2.children?.length > 0 ? (
                                              <ul>
                                                {val2.children?.map(
                                                  (val3, idx) => (
                                                    // cap 4 thi them className="sf-with-ul" vaof li
                                                    <li key={idx}>
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
                                                  )
                                                )}
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

                      {categoryTrees.listcategoryCombo?.map((val, idx) =>
                        val.children.length > 0 ? (
                          <li className="megamenu-container" key={idx}>
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
                                        {val.children?.map((val2, idx) => (
                                          <div className="col-md-4" key={idx}>
                                            <div className="menu-title ">
                                              <Link
                                                to={`danhmuccombo/${val2.id}`}
                                              >
                                                {val2.name}
                                              </Link>
                                            </div>
                                            {val2.children?.length > 0 ? (
                                              <ul>
                                                {val2.children?.map(
                                                  (val3, idx) => (
                                                    // cap 4 thi them className="sf-with-ul" vaof DFli
                                                    <li key={idx}>
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
                                                  )
                                                )}
                                              </ul>
                                            ) : (
                                              <ul>
                                                <li>
                                                  <Link
                                                    to={`danhmuccombo/${val2.id}`}
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

            <div className="col-lg-3">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  {/* active Thêm gạch chân */}
                  <li className="megamenu-container ">
                    {/* className="sf-with-ul" */}
                    <Link to={"/"}>Trang chủ</Link>
                  </li>

                  <li className="megamenu-container ">
                    {/* className="sf-with-ul" */}
                    <Link to={"/buildcustomer"}>Thiết kế xây dựng</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="col-lg-6"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  {/* active Thêm gạch chân */}
                  <li
                    className="megamenu-container "
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* className="sf-with-ul" */}
                    <i
                      className="fa-solid fa-envelope"
                      style={{ color: "white" }}
                    ></i>
                    <a href={"mailto:" + props.company.Company.email}>
                      {props.company.Company.email}
                    </a>
                  </li>

                  <li
                    className="megamenu-container "
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* className="sf-with-ul" */}
                    <i
                      className="fa-solid fa-phone"
                      style={{ color: "white" }}
                    ></i>
                    <a href={"tel:" + props.company.Company.phonenumber}>
                      {props.company.Company.phonenumber}
                    </a>
                  </li>
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
