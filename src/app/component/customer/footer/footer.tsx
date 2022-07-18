import React from "react";
import { CustomesCompany } from "../../../types/company";
// import logo2 from "../../../assets/images/logo/logo2.png";

interface typeProps {
  company: CustomesCompany;
}
function Footer(props: typeProps) {
  return (
    <footer className="footer footer-2">
      <div
        className="cta cta-horizontal cta-horizontal-box"
        style={{ backgroundColor: "#258cae" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-2xl-5col">
              {/* <h3 className="cta-title text-white">Tham gia nhận thông tin</h3>
              <p className="cta-desc text-white">
                Đăng ký để nhận thông tin sản phẩm và phiếu giảm giá
              </p> */}
            </div>

            <div className="col-3xl-5col">
              {/* <form action="#">
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
              </form> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle border-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title" style={{ fontWeight: 600 }}>
                  GIỚI THIỆU BEHOME
                </h4>

                <div className="widget widget-about">
                  {/* <img
                  src={logo2}
                  className="footer-logo"
                  alt="Footer Logo"
                  width="105"
                  height="25"
                /> */}

                  <p>
                    <span style={{ fontWeight: 600 }}>Địa chỉ</span>:{" "}
                    {props.company.Company.address}
                  </p>
                  <p>
                    <span style={{ fontWeight: 600 }}>Email</span>:{" "}
                    {props.company.Company.email}
                  </p>

                  <div className="widget-about-info">
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <span className="widget-about-title">
                          Hỗ trợ khách hàng 24/7
                        </span>
                        <a href={"tel:" + props.company.Company.phonenumber}>
                          {props.company.Company.phonenumber}
                        </a>
                      </div>
                      <div
                        className="col-sm-6 col-md-8"
                        id="icon-fixed-right"
                      ></div>
                    </div>
                    <p></p>
                    <div className="row">
                      <div
                        className="col-sm-12 col-md-12"
                        id="icon-fixed-right"
                      >
                        {/* <span className="widget-about-title mb-2">
                        Mạng xã hội
                      </span> */}
                        <a
                          href="https://www.facebook.com/C%E1%BB%ADa-h%C3%A0ng-thi%E1%BA%BFt-b%E1%BB%8B-v%E1%BA%ADt-t%C6%B0-%C4%90i%E1%BB%87n-N%C6%B0%E1%BB%9Bc-Behome-Store-111073668305784/?ref=pages_you_manage"
                          className="mr-3"
                        >
                          <i className="icons fab fa-facebook-f"></i>
                        </a>

                        <a
                          href="https://www.youtube.com/channel/UCMmbSPuCXy_nClDcYLz4oLQ"
                          className="mr-3"
                        >
                          <i
                            className="icons fa-brands fa-youtube-square"
                            style={{ color: "red", fontSize: "40px" }}
                          ></i>
                        </a>
                        <a href="" className="mr-3">
                          <i
                            className="icons fa-brands fa-instagram"
                            style={{ color: "red", fontSize: "40px" }}
                          ></i>
                        </a>

                        <a
                          href="https://www.facebook.com/messages/t/111073668305784"
                          className="mr-3"
                        >
                          <i className="icons fab fa-facebook-messenger"></i>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-8 ">
                        {/* <span className="widget-about-title">Thanh toán</span>
                      <figure className="footer-payments">
                        <img
                          src="assets/images/payments.png"
                          alt="Payment methods"
                          width="272"
                          height="20"
                        />
                      </figure> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title" style={{ fontWeight: 600 }}>
                  CHÍNH SÁCH BẢO HÀNG
                </h4>

                <p>{props.company.Company.csbh}</p>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title" style={{ fontWeight: 600 }}>
                  CHÍNH SÁCH ĐỔI TRẢ
                </h4>
                <p>{props.company.Company.csdt}</p>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="widget" style={{ maxWidth: "400px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.135277983257!2d105.5011677!3d21.226483599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x156a68cc13e2c209!2zQ-G7rWEgSMOgbmcgxJBp4buHbiAtIE7GsOG7m2MgQkVIT01F!5e0!3m2!1svi!2s!4v1657469735132!5m2!1svi!2s"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
