import React from "react";
import Banner2 from "../../component/customer/banner/banner2";
import Listproduct from "../../component/customer/product/listproduct";
import { CustomesCompany } from "../../types/company";

interface typeProps {
  company: CustomesCompany;
}
function Home(props: typeProps) {
  return (
    <div className="container">
      <Banner2 Company={props.company.Company} />
      <Listproduct />
      <Listproduct />
      <Listproduct />
    </div>
  );
}

export default Home;
