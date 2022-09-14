import { InputNumber, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllBuildAdmin } from "../../../features/Admin/buildAdmin";
import { addCartBuild } from "../../../features/cart/cart-slice";
import { buildAdminStore } from "../../../use-selector";
import ModalBuildDesignCustomer from "../../component/customer/modal/ModalBuildDesignCustomer/ModalBuildDesignCustomer";
import { Numberformat, useAppDispatch, useAppSelector } from "../../hooks";
import "./build.css";
function BuildDesign() {
  const { Title, Text } = Typography;
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const buildDesign = useAppSelector(buildAdminStore);

  const [selectedProduct, setSelectedProduct] = useState([
    { listProduct: [], idBuild: 0 },
  ] as any);

  console.log("selectedProduct", selectedProduct);

  const [selectedID, setSelectedID] = useState(1);
  const [idCategory, setIdCategory] = useState(null as any);
  const [selectIndex, setSelectIndex] = useState(Number);
  const [visible, setVisible] = useState(false);
  console.log("buildDesign", buildDesign);

  useEffect(() => {
    dispatch(getAllBuildAdmin());
  }, []);

  useEffect(() => {
    if (buildDesign.listBuild[0]?.id) {
      setSelectedID(buildDesign.listBuild[0].id);
      setSelectIndex(0);
    }
    var arrNew = [] as any;
    buildDesign.listBuild.map((value) => {
      arrNew.push({ listProduct: [], idBuild: value.id });
    });
    setSelectedProduct(arrNew);
  }, [buildDesign]);

  return (
    <div className="container-fluid">
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
                console.log(1);

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
          {console.log('danh sách',
            selectedProduct.filter((val: any) => {
              console.log(val, value);
              return val.idBuild === value.id_builddesign;
            })[0]?.listProduct
          )}

          {console.log('Sản phẩm đã chọn',
            selectedProduct
              .filter((val: any) => val.idBuild === value.id_builddesign)[0]
              ?.listProduct.filter(
                (v: any) => v.id_category === value.id_category
              )
          )}
          <hr />
          <div className="row" key={value.id}>
            <div className="col-3" style={{ borderRight: "1px solid" }}>
              {idx + 1} . {value.category?.name}
            </div>

            {selectedProduct
              .filter((val: any) => val.idBuild === value.id_builddesign)[0]
              ?.listProduct.filter(
                (v: any) => v.id_category === value.id_category
              )[0] ? (
              <div className="col-9">
                <div className="item-build">
                  <div className="item-build-product">
                    <figure className="item-build-product-media mr-2">
                      <Link
                        to={
                          "/detailproduct/" +
                          selectedProduct
                            .filter(
                              (val: any) => val.idBuild === value.id_builddesign
                            )[0]
                            ?.listProduct.filter(
                              (v: any) => v.id_category === value.id_category
                            )[0].id
                        }
                      >
                        <img
                          src={
                            "http://103.137.184.193:5500/images/" +
                            selectedProduct
                              .filter(
                                (val: any) =>
                                  val.idBuild === value.id_builddesign
                              )[0]
                              ?.listProduct.filter(
                                (v: any) => v.id_category === value.id_category
                              )[0]
                              ?.images.find(
                                (x: any) => x.type === "1" || x.type === "MAIN"
                              )?.imagename
                          }
                          alt="Product image"
                        />
                      </Link>
                    </figure>

                    <h3 className="product-title" style={{ paddingTop: "7px" }}>
                      <Link
                        to={
                          "/detailproduct/" +
                          selectedProduct
                            .filter(
                              (val: any) => val.idBuild === value.id_builddesign
                            )[0]
                            ?.listProduct.filter(
                              (v: any) => v.id_category === value.id_category
                            )[0].id
                        }
                        style={{ fontWeight: 500 }}
                      >
                        {
                          selectedProduct
                            .filter(
                              (val: any) => val.idBuild === value.id_builddesign
                            )[0]
                            ?.listProduct.filter(
                              (v: any) => v.id_category === value.id_category
                            )[0]?.name
                        }
                      </Link>
                    </h3>
                  </div>

                  <div className="qty-product-build">
                    <span>
                      {Numberformat(
                        selectedProduct
                          .filter(
                            (val: any) => val.idBuild === value.id_builddesign
                          )[0]
                          ?.listProduct.filter(
                            (v: any) => v.id_category === value.id_category
                          )[0]?.price
                      )}{" "}
                      x{" "}
                      <InputNumber
                        min={1}
                        max={10}
                        value={
                          selectedProduct
                            .filter(
                              (val: any) => val.idBuild === value.id_builddesign
                            )[0]
                            ?.listProduct.filter(
                              (v: any) => v.id_category === value.id_category
                            )[0]?.amount
                        }
                        onChange={(val) => {
                          console.log(val);

                          setSelectedProduct([
                            {
                              idBuild: value.id_builddesign,
                              listProduct: [
                                ...selectedProduct
                                  ?.filter(
                                    (val: any) =>
                                      val.idBuild === value.id_builddesign
                                  )[0]
                                  .listProduct.filter(
                                    (v: any) =>
                                      v.id_category != value.category?.id
                                  ),
                                {
                                  ...selectedProduct
                                    ?.filter(
                                      (val: any) =>
                                        val.idBuild === value.id_builddesign
                                    )[0]
                                    .listProduct.filter(
                                      (v: any) =>
                                        v.id_category === value.category?.id
                                    )[0],
                                  amount: val,
                                },
                              ],
                            },

                            ...selectedProduct?.filter(
                              (val: any) => val.idBuild != value.id_builddesign
                            ),
                          ]);

                          console.log(
                            selectedProduct?.filter(
                              (val: any) => val.idBuild != value.id_builddesign
                            )
                          );
                        }}
                      />{" "}
                      ={" "}
                      <span className="mr-3" style={{ color: "red" }}>
                        {Numberformat(
                          selectedProduct
                            .filter(
                              (val: any) => val.idBuild === value.id_builddesign
                            )[0]
                            ?.listProduct.filter(
                              (v: any) => v.id_category === value.id_category
                            )[0]?.price *
                            selectedProduct
                              .filter(
                                (val: any) =>
                                  val.idBuild === value.id_builddesign
                              )[0]
                              ?.listProduct.filter(
                                (v: any) => v.id_category === value.id_category
                              )[0]?.amount
                        )}
                      </span>
                      <i
                        className="fa-solid fa-pen mr-3"
                        style={{ cursor: "pointer", color: "#39f" }}
                        onClick={() => {
                          setVisible(true);
                          setIdCategory(value.category?.id);
                        }}
                      ></i>
                      <i
                        className="fa-solid fa-trash-can"
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => {
                          setSelectedProduct([
                            {
                              listProduct: selectedProduct
                                ?.filter(
                                  (val: any) =>
                                    val.idBuild === value.id_builddesign
                                )[0]
                                .listProduct.filter(
                                  (v: any) =>
                                    v.id_category != value.category?.id
                                ),

                              idBuild: value.id_builddesign,
                            },

                            ...selectedProduct?.filter(
                              (val: any) => val.idBuild != value.id_builddesign
                            ),
                          ]);
                        }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-9">
                <div
                  className="product-details-action mb-0"
                  style={{ maxWidth: "200px" }}
                  onClick={() => {
                    setVisible(true);
                    setIdCategory(value.category?.id);
                  }}
                >
                  <a className="btn-product btn">
                    <span>Chọn {value.category?.name}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </>
      ))}

      <hr />

      <div
        className="product-details-action mb-3"
        style={{ maxWidth: "200px", float: "right" }}
        onClick={() => {
          selectedProduct
            ?.filter((val: any) => val.idBuild === selectedID)[0]
            ?.listProduct.map((v: any) => {
              console.log(v);
              dispatch(addCartBuild(v));
            });

          history("/cart");
        }}
      >
        <a className="btn-product btn">
          <span>Thêm vào giỏ hàng</span>
        </a>
      </div>
      {/* {visible ?? ( */}
      <ModalBuildDesignCustomer
        visible={visible}
        toggleSelect={(value) => {
          console.log(value);

          let newArr = [] as any;

          selectedProduct.map((val: any) => {
            if (val.idBuild === value.idBuild) {
              var check = val.listProduct?.findIndex(
                (v: any, idx: any) => v.id_category === idCategory
              );
              if (check >= 0) {
                newArr.push(val);
              } else {
                newArr.push({
                  listProduct: [
                    ...val.listProduct,
                    { ...value.product, amount: 1 },
                  ],
                  idBuild: val.idBuild,
                });
              }
            } else {
              newArr.push(val);
            }
          });

          setSelectedProduct(newArr);
        }}
        toggle={() => {
          setVisible(false);
        }}
        value={{ selectedID, idCategory }}
      />
      {/* )} */}
    </div>
  );
}

export default BuildDesign;
