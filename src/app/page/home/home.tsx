import React from "react";
import { productHomePageStore } from "../../../use-selector";
import Banner2 from "../../component/customer/banner/banner2";
import CarouselProduct from "../../component/customer/carousel/CarouselProduct";
import SlickComBoCarouselHomePage from "../../component/customer/carousel/slideSlick/slickCombotHomepage";
import SlickCarouselHomePage from "../../component/customer/carousel/slideSlick/slickProductHomepage";
import Listcombo from "../../component/customer/combo/listcombo";
import Listproduct from "../../component/customer/product/listproduct";
import { useAppSelector } from "../../hooks";
import { CustomesCompany } from "../../types/company";

interface typeProps {
  company: CustomesCompany;
}
function Home(props: typeProps) {
  const products = useAppSelector(productHomePageStore);

  console.log("productHomePageStore", products);

  return (
    <div className="container-fluid">
      <Banner2 Company={props.company.Company} />

      {products.listcombohomepage.length > 6 ? (
        <SlickComBoCarouselHomePage combo={products.listcombohomepage} />
      ) : (
        <Listcombo combo={products.listcombohomepage} />
      )}

      {products.listproducthomepage.map((val, idx) =>
        val.products.length > 6 ? (
          <SlickCarouselHomePage product={val} />
        ) : (
          <Listproduct product={val} idx={idx} />
        )
      )}
    </div>
  );
}

export default Home;
