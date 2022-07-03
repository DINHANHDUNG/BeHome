import React from "react";

function CheckOut() {
  return (
    <div className="page-content">
      <div className="checkout">
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-lg-9">
                <h2 className="checkout-title">Chi tiết thanh toán</h2>

                <label>Họ tên *</label>
                <input type="text" className="form-control" />

                <label>Phone *</label>
                <input type="tel" className="form-control" required />

                <label>Email address *</label>
                <input type="email" className="form-control" required />

                <label>Địa chỉ *</label>
                <input type="text" className="form-control" required />

                <label>Ghi chú</label>
                <textarea
                  className="form-control"
                  cols={30}
                  rows={4}
                  placeholder="Điền vào đây"
                ></textarea>
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
                      <tr>
                        <td>
                          <a href="#">Beige knitted elastic runner shoes</a>
                        </td>
                        <td>$84.00</td>
                      </tr>

                      <tr>
                        <td>
                          <a href="#">Blue utility pinafore denimdress</a>
                        </td>
                        <td>$76,00</td>
                      </tr>
                      <tr className="summary-subtotal">
                        <td>Tạm tính:</td>
                        <td>$160.00</td>
                      </tr>
                      <tr>
                        <td>Shipping:</td>
                        <td>Free shipping</td>
                      </tr>
                      <tr className="summary-total">
                        <td>Thành tiền:</td>
                        <td>$160.00</td>
                      </tr>
                    </tbody>
                  </table>

                  <button
                    type="submit"
                    className="btn btn-outline-primary-2 btn-order btn-block"
                  >
                    <span className="btn-text">Đặt hàng</span>
                    <span className="btn-hover-text">Đặt hàng</span>
                  </button>
                </div>
              </aside>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
