import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllCategoryTrees } from "../../../features/Admin/categoryAdnim";
import { getCompany } from "../../../features/Admin/company";
import { getProductHomePage } from "../../../features/homepage";
import { companyAdminStore } from "../../../use-selector";
import Footer from "../../component/customer/footer/footer";
import Header from "../../component/customer/header/header";
import Mobilemenu from "../../component/customer/menu/mobile-menu/mobilemenu";
import { useAppDispatch, useAppSelector } from "../../hooks";
import BuildDesign from "../../page/build/build";
import CartShopping from "../../page/cartShopping/cartShopping";
import CheckOut from "../../page/checkout/checkOut";
import ComboByCategory from "../../page/comboByCategory/comboByCategory";
import Contact from "../../page/contact/contact";
import DetailCombo from "../../page/detail/DetailCombo";
import DetailProduct from "../../page/detail/DetailProduct";
import Home from "../../page/home/home";
import Introduce from "../../page/introduce/introduce";
import PaymentTerms from "../../page/paymentTerms/paymentTerms";
import ProductByCategory from "../../page/productByCategory/productByCategory";
import Purchase from "../../page/purchase/purchase";
import RefundPolicy from "../../page/refundPolicy/refundPolicy";
import Searchproduct from "../../page/searchproduct/searchproduct";
import Security from "../../page/security/security";
import ShippingPolicy from "../../page/shippingPolicy/shippingPolicy";
import WarrantyPolicy from "../../page/warrantyPolicy/warrantyPolicy";

function LayoutCustomer() {
  const dispatch = useAppDispatch();
  const config = {
    title: "Thông báo!",
    content: (
      <>
        PHẦN MỀM ĐANG TRONG QUÁ TRÌNH XÂY DỰNG. DỮ LIỆU TRÊN LÀ TESTTKHOONG PHẢI
        CHÍNH THỨC
        <br />
        XIN CẢM ƠN
      </>
    ),
  };

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatch(getAllCategoryTrees());
    dispatch(getCompany());
    dispatch(getProductHomePage());
    setVisible(true);
  }, []);
  const company = useAppSelector(companyAdminStore);
  return (
    <div style={{ position: "relative" }}>
      <div className="page-wrapper">
        <Modal
          title="Thông báo!"
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          okText="OK"
          cancelText={null}
        >
          <p>
            PHẦN MỀM ĐANG XÂY DỰNG. DỮ LIỆU KHÔNG PHẢI CHÍNH THỨC. <br /> XIN
            CẢM ƠN!
          </p>
        </Modal>
        <Header company={company} />
        <Routes>
          <Route index element={<Home company={company} />} />
          <Route path="detailproduct/:ID" element={<DetailProduct />} />
          <Route path="detailcombo/:ID" element={<DetailCombo />} />
          <Route path="danhmucproduct/:ID" element={<ProductByCategory />} />
          <Route path="danhmuccombo/:ID" element={<ComboByCategory />} />
          <Route path="searchproduct/:KEY" element={<Searchproduct />} />
          <Route path="cart" element={<CartShopping />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="buildcustomer" element={<BuildDesign />} />
          <Route path="contact" element={<Contact company={company}/>} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="warrantyPolicy" element={<WarrantyPolicy company={company}/>} />
          <Route path="shippingPolicy" element={<ShippingPolicy company={company}/>} />
          <Route path="refundPolicy" element={<RefundPolicy company={company}/>} />
          <Route path="paymentTerms" element={<PaymentTerms company={company}/>} />
          <Route path="security" element={<Security company={company}/>} />
          <Route path="purchase" element={<Purchase company={company}/>} />
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
          className="mb-1"
          // href="#"
          onClick={() => {
            window.open("https://www.facebook.com/messages/t/111073668305784");
          }}
        >
          <img
            src="https://laptoptcc.com/wp-content/uploads/2021/08/mess-facebook.png"
            alt="FB"
          />
        </a>

        <a
          // href="#"
          className="mb-1"
          onClick={() => {
            window.open("https://zalo.me/3400142806706859418");
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
