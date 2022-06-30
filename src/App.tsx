import React from "react";
// import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import logo from "./app/assets/images/logo3.png";
import Banner2 from "./app/component/customer/banner/banner2";
import Footer from "./app/component/customer/footer/footer";
import Header from "./app/component/customer/header/header";
import Product from "./app/component/customer/product/product";
import Listproduct from "./app/component/customer/product/listproduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/page/home/home";
import DetailProduct from "./app/page/detail/DetailProduct";
import ProductByCategory from "./app/page/productByCategory/productByCategory";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <div style={{ position: "relative" }}>
              <div className="page-wrapper">
                <Header />
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="detailproduct" element={<DetailProduct />} />
                  <Route path="danhmuc" element={<ProductByCategory />} />
                </Routes>

                <Footer />
              </div>
              <button id="scroll-top" title="Back to Top">
                <i className="fa-solid fa-angles-up"></i>
              </button>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
