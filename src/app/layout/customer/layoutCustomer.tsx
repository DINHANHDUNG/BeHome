import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllCategoryTrees } from "../../../features/Admin/categoryAdnim";
import { getCompany } from "../../../features/Admin/company";
import { getProductHomePage } from "../../../features/homepage";
import { companyAdminStore } from "../../../use-selector";
import Footer from "../../component/customer/footer/footer";
import Header from "../../component/customer/header/header";
import Mobilemenu from "../../component/customer/menu/mobile-menu/mobilemenu";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Build from "../../page/build/build";
import CartShopping from "../../page/cartShopping/cartShopping";
import CheckOut from "../../page/checkout/checkOut";
import DetailProduct from "../../page/detail/DetailProduct";
import Home from "../../page/home/home";
import ProductByCategory from "../../page/productByCategory/productByCategory";

function LayoutCustomer() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategoryTrees());
    dispatch(getCompany());
    dispatch(getProductHomePage());
  }, []);
  const company = useAppSelector(companyAdminStore);
  return (
    <div style={{ position: "relative" }}>
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route index element={<Home company={company} />} />
          <Route path="detailproduct" element={<DetailProduct />} />
          <Route path="danhmuc" element={<ProductByCategory />} />
          <Route path="cart" element={<CartShopping />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="build" element={<Build />} />
        </Routes>

        <Footer company={company} />
      </div>
      <Mobilemenu />
      <button id="scroll-top" title="Back to Top">
        <i className="fa-solid fa-angles-up"></i>
      </button>
      <div className="box-bottom-button">
        {/* <a href="https://www.facebook.com/messages/t/775541669472633"> */}
        <a
          // href="#"
          onClick={() => {
            window.open("https://www.facebook.com/messages/t/775541669472633");
          }}
        >
          <img
            src="https://laptoptcc.com/wp-content/uploads/2021/08/mess-facebook.png"
            alt="FB"
          />
        </a>

        <a
          // href="#"
          onClick={() => {
            window.open("https://zalo.me/0355515599");
          }}
        >
          <img
            src="https://laptoptcc.com/wp-content/uploads/2021/05/zalo.png"
            alt="FB"
          />
        </a>
      </div>
    </div>
  );
}

export default LayoutCustomer;
