import { InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAddOrderByIdAdmin } from "../../../features/Admin/orderAdnim";
import { deleteCart, orderSuccsess } from "../../../features/cart/cart-slice";
import { CartStore } from "../../../use-selector";
import { Numberformat, useAppDispatch, useAppSelector } from "../../hooks";
import CartShopping from "../cartShopping/cartShopping";

function CheckOut() {
  const cart = useAppSelector(CartStore);
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const [namecustomer, setNamecustomer] = useState("");
  const [addresscustomer, setAddresscustomer] = useState("");
  const [emailcustomer, setEmailcustomer] = useState("");
  const [phonenumbercustomer, setPhonenumbercustomer] = useState("");

  useEffect(() => {
    setEmailcustomer(cart.namecustomer);
    setAddresscustomer(cart.namecustomer);
    setNamecustomer(cart.namecustomer);
    setPhonenumbercustomer(cart.namecustomer);
  }, [cart]);
  return (
    <div className="page-content">
      <div className="checkout">
        <div className="container">
          <form
            method="POST"
            action=""
            onSubmit={(e: any) => {
              e.preventDefault();

              dispatch(
                postAddOrderByIdAdmin({
                  ...cart,
                  namecustomer: namecustomer,
                  addresscustomer: addresscustomer,
                  emailcustomer: emailcustomer,
                  phonenumbercustomer: phonenumbercustomer,
                })
              ).then(() => {
                dispatch(orderSuccsess());
                localStorage.removeItem("InfoOrderCustomer");
                history("/");
              });
              // console.log({
              //   ...cart,
              //   namecustomer: namecustomer,
              //   addresscustomer: addresscustomer,
              //   emailcustomer: emailcustomer,
              //   phonenumbercustomer: phonenumbercustomer,
              // });
            }}
          >
            <div className="row">
              <div className="col-lg-9">
                <h2 className="checkout-title">Chi tiết thanh toán</h2>

                <label>Họ tên *</label>
                <input
                  type="text"
                  className="form-control"
                  name="namecustomer"
                  defaultValue={namecustomer}
                  required
                  onChange={(e) => setNamecustomer(e.target.value)}
                />

                <label>Phone *</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phonenumbercustomer"
                  required
                  defaultValue={phonenumbercustomer}
                  onChange={(e) => setPhonenumbercustomer(e.target.value)}
                />

                <label>Email address *</label>
                <input
                  type="email"
                  className="form-control"
                  name="emailcustomer"
                  required
                  defaultValue={emailcustomer}
                  onChange={(e) => setEmailcustomer(e.target.value)}
                />

                <label>Địa chỉ *</label>
                <input
                  type="text"
                  name="addresscustomer"
                  className="form-control"
                  required
                  defaultValue={addresscustomer}
                  onChange={(e) => setAddresscustomer(e.target.value)}
                />

                {/* <label>Ghi chú</label>
                <textarea
                  className="form-control"
                  cols={30}
                  rows={4}
                  placeholder="Điền vào đây"
                ></textarea> */}

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
                    {cart.orderdetails?.map((value, idx) => (
                      <tr key={idx}>
                        <td className="product-col">
                          <div className="product">
                            <figure className="product-media">
                              <a href="#">
                                <img
                                  src={
                                    "http://103.173.155.138:5500/images/" +
                                    value?.images[0]?.imagename
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
                                // dispatch(
                                //   toggleAmountProduct({
                                //     amount: Number(val),
                                //     product: value,
                                //   })
                                // );
                              }}
                            />
                          </div>
                        </td>
                        <td className="total-col">
                          {Numberformat(value?.price * value.amount)}
                        </td>
                        {/* <td className="remove-col">
                    <button
                      className="btn-remove"
                      onClick={() => {
                        dispatch(deleteCart(value));
                      }}
                    >
                      <i className="icon-close"></i>
                    </button>
                  </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <aside className="col-lg-3 mt-3">
                <div className="summary">
                  <h3 className="summary-title">Đơn hàng</h3>

                  <table className="table table-summary">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Tổng</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart.orderdetails?.map((value, idx) => (
                        <tr>
                          <td>
                            <a href="#">{value?.name}</a>
                          </td>
                          <td>{Numberformat(value?.price)} VNĐ</td>
                        </tr>
                      ))}

                      <tr className="summary-subtotal">
                        <td>Tạm tính:</td>
                        <td>{Numberformat(cart.totalmoney)} VNĐ</td>
                      </tr>
                      <tr>
                        <td>Shipping:</td>
                        <td>Free shipping</td>
                      </tr>
                      <tr className="summary-total">
                        <td>Thành tiền:</td>
                        <td>{Numberformat(cart.totalmoney)} VNĐ</td>
                      </tr>
                    </tbody>
                  </table>

                  {cart.orderdetails?.length > 0 ? (
                    <button
                      type="submit"
                      className="btn btn-outline-primary-2 btn-order btn-block"
                    >
                      <span className="btn-text">Đặt hàng</span>
                      <span className="btn-hover-text">Đặt hàng</span>
                    </button>
                  ) : null}
                </div>
              </aside>
            </div>
          </form>

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
