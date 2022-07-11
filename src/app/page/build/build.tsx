import {
  Button,
  Card,
  Col,
  InputNumber,
  Pagination,
  Popconfirm,
  Row,
  Table,
  Typography,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  getAllBuildAdmin,
  postDeleteBuildAdmin,
} from "../../../features/Admin/buildAdmin";
import { buildAdminStore } from "../../../use-selector";
import ModalBuildDesign from "../../component/customer/modal/modalBuildDesign/modal-buildDesign";
import { Numberformat, useAppDispatch, useAppSelector } from "../../hooks";
import "./build.css";
function BuildDesign() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const buildDesign = useAppSelector(buildAdminStore);

  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState(1);
  const [selectIndex, setSelectIndex] = useState(Number);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({ id: 0, name: "", builddesigns: [] });
  console.log(buildDesign);

  useEffect(() => {
    dispatch(getAllBuildAdmin());
  }, []);

  useEffect(() => {
    if (buildDesign.listBuild[0]?.id) {
      setSelectedID(buildDesign.listBuild[0].id);
      setSelectIndex(0);
    }
  }, [buildDesign]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12" style={{ display: "flex", flexWrap: "wrap" }}>
          {buildDesign.listBuild?.map((value, idx) => (
            <div
              key={value.id}
              className="product-details-action mt-3 mr-2"
              style={
                selectedID === value?.id
                  ? { backgroundColor: "#007bff", color: "#fff" }
                  : {}
              }
              onClick={() => {
                setSelectedID(value.id);
                setSelectIndex(idx);
              }}
            >
              <a className="btn-product btn">
                <span style={selectedID === value?.id ? { color: "#fff" } : {}}>
                  {value.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {buildDesign.listBuild[selectIndex]?.builddesigns?.map((value, idx) => (
        <>
          {" "}
          <hr />
          <div className="row" key={value.id}>
            <div className="col-3" style={{ borderRight: "1px solid" }}>
              {idx + 1} . {value.category?.name}
            </div>
            <div className="col-9">
              <div
                className="product-details-action mb-0"
                style={{ maxWidth: "200px" }}
                onClick={() => {}}
              >
                <a className="btn-product btn">
                  <span>Chọn {value.category?.name}</span>
                </a>
              </div>
            </div>
          </div>
        </>
      ))}

      {/* <hr />
      <div className="row">
        <div className="col-3" style={{ borderRight: "1px solid" }}>
          1. Test
        </div>
        <div className="col-9">
          <div className="item-build">
            <div className="item-build-product">
              <figure className="item-build-product-media mr-2">
                <a href="#">
                  <img
                    src={
                      "http://103.173.155.138:5500/images/1a94a9c414ec472ab0627aed3258f994.jpg"
                    }
                    alt="Product image"
                  />
                </a>
              </figure>

              <h3 className="product-title" style={{ paddingTop: "7px" }}>
                <a href="#" style={{ fontWeight: 500 }}>
                  CPU Intel Core i9-12900KS CPU Intel Core i9-12900KS CPU Intel
                  Core i9-12900KSCPU Intel Core i9-12900KS
                </a>
              </h3>
            </div>

            <div className="qty-product-build">
              <span>
                {Numberformat(200000)} x{" "}
                <InputNumber
                  min={1}
                  max={10}
                  value={1}
                  onChange={(val) => {}}
                />{" "}
                ={" "}
                <span className="mr-3" style={{ color: "red" }}>
                  {Numberformat(300000)}
                </span>
                <i
                  className="fa-solid fa-pen mr-3"
                  style={{ cursor: "pointer", color: "#39f" }}
                ></i>
                <i
                  className="fa-solid fa-trash-can"
                  style={{ cursor: "pointer", color: "red" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-3" style={{ borderRight: "1px solid" }}>
          1. Test
        </div>
        <div className="col-9">
          <div
            className="product-details-action "
            style={{ maxWidth: "200px" }}
            onClick={() => {}}
          >
            <a className="btn-product btn">
              <span>Chọn RAM</span>
            </a>
          </div>
        </div>
      </div> */}
      <hr />

      <div
        className="product-details-action mb-3"
        style={{ maxWidth: "200px", float: "right" }}
        onClick={() => {}}
      >
        <a className="btn-product btn">
          <span>Thêm vào giỏ hàng</span>
        </a>
      </div>
    </div>
  );
}

export default BuildDesign;
