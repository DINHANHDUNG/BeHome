import { InputNumber } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CalculateTotalMomney,
  deleteCart,
  toggleAmountProduct,
} from "../../../features/cart/cart-slice";
import { CartStore } from "../../../use-selector";
import { Numberformat, useAppDispatch, useAppSelector } from "../../hooks";

function CartShopping() {
  const cart = useAppSelector(CartStore);
  const dispatch = useAppDispatch();
  useEffect(() => {
    var newTotal = 0;

    cart.orderdetails?.map((val) => {
      newTotal = val.price * val.amount + newTotal;
    });

    dispatch(CalculateTotalMomney(newTotal));
  }, [cart]);
  return (
    <div className="page-content mt-3">
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
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
                            max={10}
                            value={value?.amount}
                            onChange={(val) => {
                              console.log(val);
                              console.log(value);
                              dispatch(
                                toggleAmountProduct({
                                  amount: Number(val),
                                  product: value,
                                })
                              );
                            }}
                          />
                        </div>
                      </td>
                      <td className="total-col">
                        {Numberformat(value?.price * value.amount)}
                      </td>
                      <td className="remove-col">
                        <button
                          className="btn-remove"
                          onClick={() => {
                            dispatch(deleteCart(value));
                          }}
                        >
                          <i className="icon-close"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <aside className="col-lg-3">
              <div className="summary summary-cart">
                <h3 className="summary-title">Tổng giỏ hàng</h3>

                <table className="table table-summary">
                  <tbody>
                    <tr className="summary-subtotal">
                      <td>Tạm tính:</td>
                      <td>{Numberformat(cart.totalmoney)} VNĐ</td>
                    </tr>
                    <tr className="summary-shipping">
                      <td>Shipping:</td>
                      <td>&nbsp;</td>
                    </tr>

                    <tr className="summary-shipping-row">
                      <td>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="free-shipping"
                            checked
                            name="shipping"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="free-shipping"
                          >
                            Free Shipping
                          </label>
                        </div>
                      </td>
                      <td>$0.00</td>
                    </tr>

                    <tr className="summary-total">
                      <td>Thành tiền:</td>
                      <td>{Numberformat(cart.totalmoney)} VNĐ</td>
                    </tr>
                  </tbody>
                </table>

                {cart.orderdetails?.length > 0 ? (
                  <Link
                    to={"/checkout"}
                    className="btn btn-outline-primary-2 btn-order btn-block"
                  >
                    Tiến hành đặt hàng
                  </Link>
                ) : null}
              </div>

              <Link to={"/"} className="btn btn-outline-dark-2 btn-block mb-3">
                <span>Tiếp tục mua sắm</span>
                <i className="icon-refresh"></i>
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartShopping;
