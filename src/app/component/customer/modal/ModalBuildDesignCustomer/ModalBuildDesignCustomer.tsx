import { Col, Modal, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import {
  getAllProductAdmin,
  getProductSearchAdmin,
} from "../../../../../features/Admin/productAdnim";
import { productAdminStore } from "../../../../../use-selector";
import {
  Numberformat,
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks";
import FilterProductCombo from "../../../../page/admin/filterProductCombo/filterProductCombo";
import Product from "../../product/product";
import "./modalbui.css";
interface propsModalBuildDesignCustomer {
  visible: boolean;
  toggle: () => void;
  toggleSelect: (value: any) => void;
  value: any;
}
function ModalBuildDesignCustomer(props: propsModalBuildDesignCustomer) {
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState(0);
  const [page, setPage] = useState(1);
  const [notitem, setNotitem] = useState(10);
  const product = useAppSelector(productAdminStore);
  const [valueRangePrice, setValueRangePrice] = useState(null as any);
  const [valueFirm, setValueFirm] = useState(null as any);
  const [valueRank, setValueRank] = useState(null as any);
  console.log(product);

  useEffect(() => {
    if (props.value.idCategory) {
      dispatch(
        getProductSearchAdmin({
          id_category: props.value.idCategory,
          id_rank: null,
          id_manufacturer: null,
          productKey: null,
          minprice: null,
          maxprice: null,
          page: 1,
          noitem: 10,
          sort: sort,
        })
      );
    }

    setPage(1);
    setNotitem(10);
  }, [props.value.idCategory]);
  return (
    <Modal
      title={<span style={{ color: "#258cae" }}>Chọn linh kiện</span>}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      //   okText={"Thêm"}
      //   cancelText={"Hủy"}
      width={1000}
      footer={null}
    >
      <div className="row">
        <div className="col-lg-9">
          <div className="toolbox">
            <div className="toolbox-left">
              <div className="toolbox-sort">
                <label htmlFor="sortby">Sắp xếp theo:</label>
                <div className="select-custom">
                  <select
                    name="sortby"
                    id="sortby"
                    className="form-control"
                    onChange={(value) => {
                      console.log(value.target.value);
                      setSort(Number(value.target.value));
                      setPage(1);
                      setNotitem(10);
                      dispatch(
                        getProductSearchAdmin({
                          id_category: props.value.idCategory,
                          id_rank: valueRank,
                          id_manufacturer: valueFirm,
                          productKey: null,
                          minprice: valueRangePrice ? valueRangePrice[0] : null,
                          maxprice: valueRangePrice ? valueRangePrice[1] : null,
                          page: 1,
                          noitem: 10,
                          sort: Number(value.target.value),
                        })
                      );
                    }}
                    // value={sort}
                  >
                    <option value={0} defaultChecked>
                      Sản phẩm mới nhất
                    </option>
                    <option value={2}>Giá giảm dần</option>
                    <option value={1}>Giá tăng dần</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="toolbox-right">
              {product.listproduct?.length > 0 ? (
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
                            id_category: props.value.idCategory,
                            id_rank: valueRank,
                            id_manufacturer: valueFirm,
                            productKey: null,
                            minprice: valueRangePrice
                              ? valueRangePrice[0]
                              : null,
                            maxprice: valueRangePrice
                              ? valueRangePrice[1]
                              : null,
                            page: page,
                            noitem: pageSizeNew,
                            sort: sort,
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
              ) : null}
            </div>
          </div>

          <div className="products mb-3">
            <div className="row">
              {product.listproduct?.map((val, idx) => (
                <div className="Modal-item-build" key={idx}>
                  <div className="Modal-item-build-product">
                    <figure className="Modal-item-build-product-media mr-2">
                      <a href="#">
                        <img
                          style={{ width: "80px", height: "80px" }}
                          src={
                            "http://103.137.184.193:5500/images/" +
                            val.images.find(
                              (x: any) => x.type === "1" || x.type === "MAIN"
                            ).imagename
                          }
                          alt="Product image"
                        />
                      </a>
                    </figure>

                    <h3
                      className="product-title"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "70%",
                      }}
                    >
                      <a href="#" style={{ fontWeight: 500 }}>
                        {val.name}
                      </a>
                      <span>{Numberformat(val.price)} đ</span>
                    </h3>
                  </div>

                  <div className="Modal-qty-product-build">
                    <span>
                      <i
                        className="fa-solid fa-square-plus mr-3"
                        onClick={() => {
                          props.toggleSelect({
                            product: val,
                            idBuild: props.value.selectedID,
                          });
                          props.toggle();
                        }}
                        style={{
                          cursor: "pointer",
                          color: "#39f",
                          fontSize: "40px",
                        }}
                      ></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FilterProductCombo
          toggleCleanAll={() => {
            setValueRank(null);
            setValueFirm(null);
            setValueRangePrice(null);
            setSort(0);
            dispatch(
              getProductSearchAdmin({
                id_category: props.value.idCategory,
                id_rank: null,
                id_manufacturer: null,
                productKey: null,
                minprice: null,
                maxprice: null,
                page: 1,
                noitem: 10,
                sort: 0,
              })
            );

            setPage(1);
            setNotitem(10);
          }}
          toggleFilter={(value) => {
            console.log(value);
            setValueRank([value.rangePrice[0], value.rangePrice[1]]);
            setValueFirm(value.rank);
            setValueRangePrice(value.manufacturer);
            dispatch(
              getProductSearchAdmin({
                id_category: props.value.idCategory,
                id_rank: value.rank,
                id_manufacturer: value.manufacturer,
                productKey: null,
                minprice: value.rangePrice[0],
                maxprice: value.rangePrice[1],
                page: 1,
                noitem: 10,
                sort: sort,
              })
            );
            setPage(1);
            setNotitem(10);
          }}
          type="PRODUCT"
          id_category={props.value.idCategory}
        />
      </div>
    </Modal>
  );
}

export default ModalBuildDesignCustomer;
