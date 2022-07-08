import { Col, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductSearchAdmin } from "../../../features/Admin/productAdnim";
import { productAdminStore } from "../../../use-selector";
import Product from "../../component/customer/product/product";
import { useAppDispatch, useAppSelector } from "../../hooks";

function Searchproduct() {
  const { KEY } = useParams();
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);
  const [notitem, setNotitem] = useState(10);
  const product = useAppSelector(productAdminStore);

  useEffect(() => {
    if (KEY) {
      dispatch(
        getProductSearchAdmin({
          id_category: null,
          id_rank: null,
          id_manufacturer: null,
          productKey: KEY ? KEY : "KHONGCOKY",
          minprice: null,
          maxprice: null,
          page: 1,
          noitem: 10,
        })
      );
    }
  }, [KEY]);
  return (
    <div className="page-content  mt-3">
      <div className="container">
        <h5 style={{ textAlign: "left", color: "red" }}>
          Tìm kiếm sản phẩm với {KEY}
        </h5>
      </div>
      {product.listproduct?.length > 0 ? (
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="products mb-3">
                <div className="row">
                  {product.listproduct?.map((val) => (
                      <div className="col-12 col-md-6 col-xl-3 col-lg-6">
                        <Product value={val} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <Row gutter={[24, 24]}>
            <Col xl={24}>
              <Pagination
                style={{
                  marginTop: "10px",
                  float: "right",
                  marginBottom: "10px",
                }}
                onChange={(page, pageSizeNew) => {
                  console.log(page, pageSizeNew);
                  setPage(page);
                  dispatch(
                    getProductSearchAdmin({
                      id_category: null,
                      id_rank: null,
                      id_manufacturer: null,
                      productKey: KEY ? KEY : "KHONGCOKY",
                      minprice: null,
                      maxprice: null,
                      page: page,
                      noitem: pageSizeNew,
                    })
                  );
                  if (pageSizeNew) {
                    setNotitem(pageSizeNew);
                  }
                }}
                pageSize={notitem}
                current={page}
                total={product.total}
              />
            </Col>
          </Row>
        </div>
      ) : (
        <h5 style={{ textAlign: "center", color: "red" }}>
          KHÔNG CÓ SẢN PHẨM NÀO
        </h5>
      )}
    </div>
  );
}

export default Searchproduct;
