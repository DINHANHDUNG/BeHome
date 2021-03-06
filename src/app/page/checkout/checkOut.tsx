import { Col, Form, Input, InputNumber, Row } from "antd";
import { FormInstance } from "rc-field-form";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAddOrderByIdAdmin } from "../../../features/Admin/orderAdnim";
import { deleteCart, orderSuccsess } from "../../../features/cart/cart-slice";
import { CartStore } from "../../../use-selector";
import {
  currency,
  Numberformat,
  useAppDispatch,
  useAppSelector,
} from "../../hooks";
import CartShopping from "../cartShopping/cartShopping";

function CheckOut() {
  const cart = useAppSelector(CartStore);
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const [namecustomer, setNamecustomer] = useState("");
  const [addresscustomer, setAddresscustomer] = useState("");
  const [emailcustomer, setEmailcustomer] = useState("");
  const [phonenumbercustomer, setPhonenumbercustomer] = useState("");
  const formRef: any = React.createRef<FormInstance>();
  const [form] = Form.useForm();
  useEffect(() => {
    setEmailcustomer(cart.namecustomer);
    setAddresscustomer(cart.namecustomer);
    setNamecustomer(cart.namecustomer);
    setPhonenumbercustomer(cart.namecustomer);
  }, [cart]);
  const inputRef = React.useRef(null);

  function onFinish(value: any) {
    console.log(value);
    dispatch(
      postAddOrderByIdAdmin({
        ...cart,
        namecustomer: value.namecustomer,
        addresscustomer: value.addresscustomer,
        emailcustomer: value.emailcustomer,
        phonenumbercustomer: value.phonenumbercustomer,
      })
    ).then(() => {
      dispatch(orderSuccsess());
      localStorage.removeItem("InfoOrderCustomer");
      history("/");
    });
  }

  return (
    <div className="page-content">
      <div className="checkout">
        <div className="container-fluid">
          <Form
            ref={formRef}
            name="basic"
            // labelCol={{ span: 3 }}
            form={form}
            layout="vertical"
            // wrapperCol={{ span: 16 }}
            initialValues={{
              phonenumbercustomer: "",
              emailcustomer: "",
              addresscustomer: "",
              namecustomer: "",
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="row">
              <div className="col-lg-9">
                <h2 className="checkout-title">Chi ti???t thanh to??n</h2>
                <Form.Item
                  label="H??? t??n "
                  name="namecustomer"
                  rules={[{ required: true, message: "Nh???p h??? v?? t??n!" }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="?????a ch??? "
                  name="addresscustomer"
                  rules={[{ required: true, message: "Nh???p ?????a ch???!" }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="S??? ??i???n tho???i "
                  name="phonenumbercustomer"
                  rules={[{ required: true, message: "Nh???p s??? ??i???n tho???i!" }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item label="Email " name="emailcustomer">
                  <Input />
                </Form.Item>

                <table className="table table-cart table-mobile">
                  <thead>
                    <tr>
                      <th>S???n ph???m</th>
                      <th>Gi??</th>
                      <th>S??? l?????ng</th>
                      <th>T???ng ti???n</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.orderdetails?.map((value, idx) => (
                      <tr key={idx}>
                        <td className="product-col">
                          <div className="product">
                            <figure className="product-media">
                              <a href="#">
                                <img
                                  src={
                                    "http://103.173.155.138:5500/images/" +
                                    value?.images.find(
                                      (x: any) =>
                                        x.type === "1" || x.type === "MAIN"
                                    )?.imagename
                                  }
                                  alt="Product image"
                                />
                              </a>
                            </figure>

                            <h3 className="product-title">
                              <a href="#">{value?.name}</a>
                            </h3>
                          </div>
                        </td>
                        <td className="price-col">
                          {Numberformat(value?.price)}
                        </td>
                        <td className="quantity-col">
                          <div className="cart-product-quantity">
                            <InputNumber
                              min={1}
                              disabled
                              max={10}
                              value={value?.amount}
                              onChange={(val) => {
                                console.log(val);
                                console.log(value);
                              }}
                            />
                          </div>
                        </td>
                        <td className="total-col">
                          {Numberformat(value?.price * value.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <aside className="col-lg-3 mt-3">
                <div className="summary">
                  <h3 className="summary-title">????n h??ng</h3>

                  <table className="table table-summary">
                    <thead>
                      <tr>
                        <th>S???n ph???m</th>
                        <th>T???ng</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart.orderdetails?.map((value, idx) => (
                        <tr>
                          <td>
                            <a href="#">{value?.name}</a>
                          </td>
                          <td>{currency(value?.price)}</td>
                        </tr>
                      ))}

                      <tr className="summary-subtotal">
                        <td>T???m t??nh:</td>
                        <td>{currency(cart.totalmoney)}</td>
                      </tr>
                      {/* <tr>
                        <td>Shipping:</td>
                        <td>Free shipping</td>
                      </tr> */}
                      <tr className="summary-total">
                        <td>Th??nh ti???n:</td>
                        <td>{currency(cart.totalmoney)}</td>
                      </tr>
                    </tbody>
                  </table>

                  {cart.orderdetails?.length > 0 ? (
                    <button
                      type="submit"
                      className="btn btn-outline-primary-2 btn-order btn-block"
                      style={{fontSize: "16px", fontWeight: "500"}}
                    >
                      <span className="btn-text">?????t h??ng</span>
                      <span className="btn-hover-text">?????t h??ng</span>
                    </button>
                  ) : null}
                </div>
              </aside>
            </div>

            {/* <form
              method="POST"
              action=""
              onSubmit={(e: any) => {
                e.preventDefault();

                // dispatch(
                //   postAddOrderByIdAdmin({
                //     ...cart,
                //     namecustomer: namecustomer,
                //     addresscustomer: addresscustomer,
                //     emailcustomer: emailcustomer,
                //     phonenumbercustomer: phonenumbercustomer,
                //   })
                // ).then(() => {
                //   dispatch(orderSuccsess());
                //   localStorage.removeItem("InfoOrderCustomer");
                //   history("/");
                // });
              }}
            >
              <div className="row">
                <div className="col-lg-9">
                  <h2 className="checkout-title">Chi ti???t thanh to??n</h2>

                  <label>H??? t??n *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="namecustomer"
                    defaultValue={namecustomer}
                    required
                    onChange={(e) => setNamecustomer(e.target.value)}
                  />

                  <label>S??? ??i???n tho???i *</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phonenumbercustomer"
                    required
                    defaultValue={phonenumbercustomer}
                    onChange={(e) => setPhonenumbercustomer(e.target.value)}
                  />

                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="emailcustomer"
                    defaultValue={emailcustomer}
                    onChange={(e) => setEmailcustomer(e.target.value)}
                  />

                  <label>?????a ch??? *</label>
                  <input
                    type="text"
                    name="addresscustomer"
                    className="form-control"
                    required
                    defaultValue={addresscustomer}
                    onChange={(e) => setAddresscustomer(e.target.value)}
                  />

                  <table className="table table-cart table-mobile">
                    <thead>
                      <tr>
                        <th>S???n ph???m</th>
                        <th>Gi??</th>
                        <th>S??? l?????ng</th>
                        <th>T???ng ti???n</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart.orderdetails?.map((value, idx) => (
                        <tr key={idx}>
                          <td className="product-col">
                            <div className="product">
                              <figure className="product-media">
                                <a href="#">
                                  <img
                                    src={
                                      "http://103.173.155.138:5500/images/" +
                                      value?.images.find(
                                        (x: any) =>
                                          x.type === "1" || x.type === "MAIN"
                                      )?.imagename
                                    }
                                    alt="Product image"
                                  />
                                </a>
                              </figure>

                              <h3 className="product-title">
                                <a href="#">{value?.name}</a>
                              </h3>
                            </div>
                          </td>
                          <td className="price-col">
                            {Numberformat(value?.price)}
                          </td>
                          <td className="quantity-col">
                            <div className="cart-product-quantity">
                              <InputNumber
                                min={1}
                                disabled
                                max={10}
                                value={value?.amount}
                                onChange={(val) => {
                                  console.log(val);
                                  console.log(value);
                                }}
                              />
                            </div>
                          </td>
                          <td className="total-col">
                            {Numberformat(value?.price * value.amount)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <aside className="col-lg-3 mt-3">
                  <div className="summary">
                    <h3 className="summary-title">????n h??ng</h3>

                    <table className="table table-summary">
                      <thead>
                        <tr>
                          <th>S???n ph???m</th>
                          <th>T???ng</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cart.orderdetails?.map((value, idx) => (
                          <tr>
                            <td>
                              <a href="#">{value?.name}</a>
                            </td>
                            <td>{currency(value?.price)}</td>
                          </tr>
                        ))}

                        <tr className="summary-subtotal">
                          <td>T???m t??nh:</td>
                          <td>{currency(cart.totalmoney)}</td>
                        </tr>
                        <tr>
                          <td>Shipping:</td>
                          <td>Free shipping</td>
                        </tr>
                        <tr className="summary-total">
                          <td>Th??nh ti???n:</td>
                          <td>{currency(cart.totalmoney)}</td>
                        </tr>
                      </tbody>
                    </table>

                    {cart.orderdetails?.length > 0 ? (
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2 btn-order btn-block"
                      >
                        <span className="btn-text">?????t h??ng</span>
                        <span className="btn-hover-text">?????t h??ng</span>
                      </button>
                    ) : null}
                  </div>
                </aside>
              </div>
            </form> */}
          </Form>

          <div className="row">
            <div className="col-lg-12"></div>
          </div>
        </div>
      </div>

      {/* <CartShopping /> */}
    </div>
  );
}

export default CheckOut;
