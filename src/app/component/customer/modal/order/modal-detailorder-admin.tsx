import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  Modal,
  Row,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  getAllManufacturerAdmin,
  postAddManufacturerByIdAdmin,
  postEditManufacturerByIdAdmin,
} from "../../../../../features/Admin/manufacturerAdnim";
import {
  getAllRankAdmin,
  postAddRankByIdAdmin,
  postEditRankByIdAdmin,
} from "../../../../../features/Admin/rankAdnim";
import { currency, Numberformat, useAppDispatch } from "../../../../hooks";
import { Order } from "../../../../types/order";
import { Product } from "../../../../types/product";

interface propsModalDetailoOderDdmin {
  visible: boolean;
  toggle: () => void;
  value: Order;
  pageSize: number;
  page: number;
}
function ModalDetailoOderDdmin(props: propsModalDetailoOderDdmin) {
  console.log("props.value", props.value);

  const dispatch = useAppDispatch();
  const [totalOrder, setTotalOrder] = useState(0);
  const { Title, Text } = Typography;
  // console.log(props.value);

  useEffect(() => {
    var total = 0;

    props.value.orderdetails?.map((val) => {
      if (val.id_combo) {
        total = total + val.combo.price * val.amount;
      } else {
        total = total + val.product.price * val.amount;
      }
    });

    setTotalOrder(total);
  }, [props.value.id]);

  return (
    <Modal
      title={
        props.value?.id > 0
          ? "Thông tin chi tiết đơn hàng"
          : "Thông tin chi tiết đơn hàng"
      }
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      okText={"Thêm"}
      cancelText={"Hủy"}
      width={"90%"}
      footer={null}
    >
      <Row className="rowgap-vbox" gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} className="mb-24">
          <Card bordered={false} className="criclebox ">
            <div className="number">
              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  {/* <span>{c.today}</span> */}
                  <Title level={4}>Thông tin Khách hàng</Title>
                </Col>
              </Row>
              <div className="linecard"></div>

              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginRight: "10px" }}>
                      <Title level={5}>Tên khách hàng:</Title>
                    </div>
                    <div>
                      <Title level={5}>{props.value.namecustomer}</Title>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginRight: "10px" }}>
                      <Title level={5}>Địa chỉ:</Title>
                    </div>
                    <div>
                      <Title level={5}>{props.value.addresscustomer}</Title>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginRight: "10px" }}>
                      <Title level={5}>Số điện thoại:</Title>
                    </div>
                    <div>
                      <Title level={5}>{props.value.phonenumbercustomer}</Title>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginRight: "10px" }}>
                      <Title level={5}>Email:</Title>
                    </div>
                    <div>
                      <Title level={5}>{props.value.emailcustomer}</Title>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} className="mb-24">
          <Card bordered={false} className="criclebox ">
            <div className="number">
              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  {/* <span>{c.today}</span> */}
                  <Title level={4}>Thông tin đơn hàng</Title>
                </Col>
              </Row>
              <div className="linecard"></div>

              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginRight: "10px" }}>
                      <Title level={5}>Mã:</Title>
                    </div>
                    <div>
                      <Title level={5}>
                        {/* {orderadmin.order[0]?.product?.productcode} */}
                        {props.value.code}
                      </Title>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginRight: "10px" }}>
                      <Title level={5}>Tổng tiền:</Title>
                    </div>
                    <div>
                      <Title level={5}>{currency(props.value.totalmoney)}</Title>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginRight: "10px" }}>
                      <Title level={5}>Tình trạng:</Title>
                    </div>
                    <div>
                      <Title level={5}>{props.value.status}</Title>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="mb-24">
          <Card bordered={false} className="criclebox ">
            <div className="number">
              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  {/* <span>{c.today}</span> */}
                  <Title level={4}>Chi tiết đơn hàng</Title>
                </Col>
              </Row>
              <div className="linecard"></div>

              <Row align="middle" gutter={[24, 0]}>
                <Col xs={24}>
                  <table className="table table-cart table-mobile">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {props.value.orderdetails?.map((val, idx) =>
                        val.id_combo ? (
                          <tr key={idx}>
                            <td className="product-col">
                              <div className="product">
                                <figure className="product-media">
                                  <a>
                                    <Image
                                      src={
                                        val.combo?.images
                                          ? "http://103.137.184.193:5500/images/" +
                                            val.combo?.images[0]?.imagename
                                          : ""
                                      }
                                      alt="Product image"
                                    />
                                  </a>
                                </figure>

                                <h3 className="product-title">
                                  <a>{val.combo.name}</a>
                                </h3>
                              </div>
                            </td>
                            <td className="price-col">
                              {Numberformat(val.combo.price)}
                            </td>
                            <td className="quantity-col">
                              <div className="cart-product-quantity">
                                <input
                                  type="number"
                                  className="form-control"
                                  value={Numberformat(val.amount)}
                                  min="1"
                                  max="10"
                                  step="1"
                                  data-decimals="0"
                                  disabled
                                  required
                                />
                              </div>
                            </td>
                            <td className="total-col">
                              {Numberformat(val.combo.price * val.amount)}
                            </td>
                          </tr>
                        ) : (
                          <tr key={idx}>
                            <td className="product-col">
                              <div className="product">
                                <figure className="product-media">
                                  <a>
                                    <Image
                                      src={
                                        val.product?.images
                                          ? "http://103.137.184.193:5500/images/" +
                                            val.product?.images[0]?.imagename
                                          : ""
                                      }
                                      alt="Product image"
                                    />
                                  </a>
                                </figure>

                                <h3 className="product-title">
                                  <a>{val.product.name}</a>
                                </h3>
                              </div>
                            </td>
                            <td className="price-col">
                              {/* {Numberformat(val.product.price)} */}
                              {val.id_productproperties
                              ? Numberformat(
                                  val.productproperties?.price
                                )
                              : Numberformat(val?.product?.price)}
                            </td>
                            <td className="quantity-col">
                              <div className="cart-product-quantity">
                                <input
                                  type="number"
                                  className="form-control"
                                  value={Numberformat(val.amount)}
                                  min="1"
                                  max="10"
                                  step="1"
                                  data-decimals="0"
                                  disabled
                                  required
                                />
                              </div>
                            </td>
                            <td className="total-col">
                              {/* {Numberformat(val.product.price * val.amount)} */}
                              {val.id_productproperties
                              ? Numberformat(
                                  val.productproperties?.price * val.amount
                                )
                              : Numberformat(val?.product?.price * val.amount)}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalDetailoOderDdmin;
