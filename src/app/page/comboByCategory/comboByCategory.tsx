import { Col, DatePicker, Pagination, Row, Slider } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComboSearchAdmin } from "../../../features/Admin/comboAdnim";
import {
  getAllProductAdmin,
  getProductSearchAdmin,
} from "../../../features/Admin/productAdnim";
import { comboAdminStore, productAdminStore } from "../../../use-selector";
import Listproduct from "../../component/customer/product/listproduct";
import Product from "../../component/customer/product/product";
import { Numberformat, useAppDispatch, useAppSelector } from "../../hooks";
import FilterProductCombo from "../admin/filterProductCombo/filterProductCombo";

function ComboByCategory() {
  const { ID } = useParams();

  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [notitem, setNotitem] = useState(10);
  const [valueRangePrice, setValueRangePrice] = useState(null as any);
  const [sort, setSort] = useState(0);
  const combo = useAppSelector(comboAdminStore);
  useEffect(() => {
    dispatch(
      getComboSearchAdmin({
        id_category: Number(ID),
        comboKey: null,
        minprice: null,
        maxprice: null,
        page: 1,
        noitem: 10,
        sort: sort,
      })
    );
  }, [ID]);
  return (
    <div className="page-content  mt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9">
            <div className="toolbox">
              <div className="toolbox-left">
                <div className="toolbox-info" style={{ fontWeight: 500 }}>
                  {Number(ID) === 0 ? "TẤT CẢ COMBO" : combo.categoryname}
                </div>
              </div>

              <div className="toolbox-right">
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
                          getComboSearchAdmin({
                            id_category: Number(ID),
                            comboKey: null,
                            minprice: valueRangePrice
                              ? valueRangePrice[0]
                              : null,
                            maxprice: valueRangePrice
                              ? valueRangePrice[1]
                              : null,
                            page: 1,
                            noitem: 10,
                            sort: Number(value.target.value),
                          })
                        );
                      }}
                      value={sort}
                    >
                      <option value={0}>Sản phẩm mới nhất</option>
                      <option value={2}>Giá giảm dần</option>
                      <option value={1}>Giá tăng dần</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="products mb-3">
              <div className="row">
                {combo.listCombo?.map((val) => (
                  <div className="col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <Product value={val} />
                  </div>
                ))}
              </div>
            </div>

            {combo.listCombo?.length > 0 ? (
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
                        getComboSearchAdmin({
                          id_category: Number(ID),
                          comboKey: null,
                          minprice: valueRangePrice ? valueRangePrice[0] : null,
                          maxprice: valueRangePrice ? valueRangePrice[1] : null,
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
                    total={combo.total}
                  />
                </Col>
              </Row>
            ) : null}
          </div>

          <FilterProductCombo
            toggleCleanAll={() => {
              setValueRangePrice(null);
              setSort(0);
              dispatch(
                getComboSearchAdmin({
                  id_category: Number(ID),
                  comboKey: null,
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

              setValueRangePrice(value.manufacturer);
              dispatch(
                getComboSearchAdmin({
                  id_category: Number(ID),
                  comboKey: null,
                  minprice: value.rangePrice[0],
                  maxprice: value.rangePrice[1],
                  sort: sort,
                  page: 1,
                  noitem: 10,
                })
              );
              setPage(1);
              setNotitem(10);
            }}
            type="COMBO"
            id_category={Number(ID)}
          />
        </div>
      </div>
    </div>
  );
}

export default ComboByCategory;
