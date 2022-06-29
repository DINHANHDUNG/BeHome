import React from "react";
// import logo2 from "../../../assets/images/logo/logo2.png";
function Footer() {
  return (
    <footer className="footer footer-2">
      <div
        className="cta cta-horizontal cta-horizontal-box"
        style={{ backgroundColor: "#258cae" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2xl-5col">
              <h3 className="cta-title text-white">Tham gia nhận thông tin</h3>
              <p className="cta-desc text-white">
                Đăng ký để nhận thông tin sản phẩm và phiếu giảm giá
              </p>
            </div>

            <div className="col-3xl-5col">
              <form action="#">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control form-control-white"
                    placeholder="Enter your Email Address"
                    aria-label="Email Adress"
                    required
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-white-2"
                      type="submit"
                      style={{ backgroundColor: "#258cae" }}
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle border-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="widget widget-about">
                {/* <img
                  src={logo2}
                  className="footer-logo"
                  alt="Footer Logo"
                  width="105"
                  height="25"
                /> */}

                <p>
                  <span style={{ fontWeight: 600 }}>Địa chỉ</span>: Số 20 - Chợ
                  Tre - Từ Sơn - Bắc Ninh
                </p>
                <br />
                <p>
                  Sự khác biệt của Sò Lap là chúng tôi sẵn sàng lắng nghe, sẵn
                  sàng chia sẻ mọi điều quý khách mong muốn, và chúng tôi hiểu
                  được giá trị cốt lõi của sự phát triển, đó chính là niềm tin
                  của khách hàng. Với đội ngũ nhân viên dày dặn kinh nghiệm
                  trong các khâu bán hàng, bảo hành, CSKH, MKT,.. Sò Lap tin
                  rằng đây sẽ nơi trải nghiệm tốt nhất cho khách hàng.
                </p>

                <div className="widget-about-info">
                  <div className="row">
                    <div className="col-sm-6 col-md-4">
                      <span className="widget-about-title">
                        Hỗ trợ khách hàng 24/7
                      </span>
                      <a href="tel:0886431286">0886 431 286</a>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <span className="widget-about-title">Thanh toán</span>
                      <figure className="footer-payments">
                        <img
                          src="assets/images/payments.png"
                          alt="Payment methods"
                          width="272"
                          height="20"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Thông tin</h4>

                <ul className="widget-list">
                  <li>
                    <a href="#">Sò Lap</a>
                  </li>
                  <li>
                    <a href="#">Làm thế nào để mua sắm </a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ với chúng tôi</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Dịch vụ</h4>

                <ul className="widget-list">
                  <li>
                    <a href="#">Nâng cấp</a>
                  </li>
                  <li>
                    <a href="#">Sửa chữa</a>
                  </li>
                  <li>
                    <a href="#">Bảo hành</a>
                  </li>
                  <li>
                    <a href="#">Vận chuyển</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Tài khoản</h4>

                <ul className="widget-list">
                  <li>
                    <a href="#">Đăng nhập</a>
                  </li>
                  {/* <li>
                    <a href="#">Giỏ hàng</a>
                  </li> */}
                  <li>
                    <a href="#">Hỗ trợ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
