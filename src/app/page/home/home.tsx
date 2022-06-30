import React from "react";
import Banner2 from "../../component/customer/banner/banner2";
import Listproduct from "../../component/customer/product/listproduct";

function Home() {
  return (
    <div className="container">
      <Banner2 />
      <Listproduct />
      <Listproduct />
      <Listproduct />
    </div>
  );
}

export default Home;
