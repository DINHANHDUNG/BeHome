import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../component/customer/footer/footer";
import Header from "../../component/customer/header/header";
import Mobilemenu from "../../component/customer/menu/mobile-menu/mobilemenu";
import Build from "../../page/build/build";
import CartShopping from "../../page/cartShopping/cartShopping";
import CheckOut from "../../page/checkout/checkOut";
import DetailProduct from "../../page/detail/DetailProduct";
import Home from "../../page/home/home";
import ProductByCategory from "../../page/productByCategory/productByCategory";

function LayoutCustomer() {
  return (
    <div style={{ position: "relative" }}>
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="detailproduct" element={<DetailProduct />} />
          <Route path="danhmuc" element={<ProductByCategory />} />
          <Route path="cart" element={<CartShopping />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="build" element={<Build />} />
        </Routes>

        <Footer />
      </div>
      <Mobilemenu />
      <button id="scroll-top" title="Back to Top">
        <i className="fa-solid fa-angles-up"></i>
      </button>
    </div>
  );
}

export default LayoutCustomer;
