import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomesCompany } from "../../../types/company";
import logo2 from "../../../assets/images/logo-da-thong-bao-website-voi-bo-cong-thuong.png";

interface typeProps {
  company: CustomesCompany;
}
function Footer(props: typeProps) {
  const [scroll, setScroll] = useState(0);
  console.log(props.company);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [scroll]);

  const handleToTop = () => {
    setScroll((pre) => pre + 1);
  };

  return (
    <footer className="footer footer-2">
      <div
        className="cta cta-horizontal cta-horizontal-box"
        style={{ backgroundColor: "#258cae" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-2xl-5col"></div>

            <div className="col-3xl-5col"></div>
          </div>
        </div>
      </div>

      <div className="footer-middle border-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title1" style={{ fontWeight: 600 }}>
                  GIỚI THIỆU BEHOME
                </h4>

                <ul className="widget-list" onClick={handleToTop}>
                  <li>
                    <Link to={"/introduce"}>Giới thiệu công ty</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Thông tin liên hệ</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title2" style={{ fontWeight: 600 }}>
                  CHÍNH SÁCH & QUY ĐỊNH
                </h4>
                <ul className="widget-list" onClick={handleToTop}>
                  <li>
                    <Link to={"/refundPolicy"}>Chính sách đổi trả hàng</Link>
                  </li>
                  <li>
                    <Link to={"/warrantyPolicy"}>Chính sách bảo hành</Link>
                  </li>
                  <li>
                    <Link to={"/shippingPolicy"}>Chính sách vận chuyển</Link>
                  </li>
                  <li>
                    <Link to={"/security"}>Chính sách bảo mật</Link>
                  </li>
                </ul>
                {/* <p>{props.company.Company.csbh}</p> */}
              </div>
            </div>

            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title4" style={{ fontWeight: 600 }}>
                  HỖ TRỢ KHÁCH HÀNG
                </h4>
                <ul className="widget-list" onClick={handleToTop}>
                  <li>
                    <Link to={"/paymentTerms"}>Hướng dẫn thanh toán</Link>
                  </li>
                  <li>
                    <Link to={"/purchase"}>Hướng dẫn mua hàng</Link>
                  </li>
                </ul>
                {/* <p>{props.company.Company.csbh}</p> */}
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title3" style={{ fontWeight: 600 }}>
                  KẾT NỐI VỚI CHÚNG TÔI
                </h4>
                <div className="row">
                  <div className="col-sm-12 col-md-12" id="icon-fixed-right">
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
                  <div className="col-sm-12 col-md-12 mt-1">
                    <figure className="footer-payments">
                      <img
                        src={logo2}
                        alt="Payment methods"
                        width="190"
                        // height="20"
                      />
                    </figure>
                  </div>
                </div>
                {/* <p>{props.company.Company.csdt}</p>
                 */}
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="widget" style={{ maxWidth: "400px" }}>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FC%25E1%25BB%25ADa-h%25C3%25A0ng-thi%25E1%25BA%25BFt-b%25E1%25BB%258B-v%25E1%25BA%25ADt-t%25C6%25B0-%25C4%2590i%25E1%25BB%2587n-N%25C6%25B0%25E1%25BB%259Bc-Behome-Store-111073668305784%2F%3Fref%3Dpages_you_manage&tabs=none&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                  width="100%"
                  height="130"
                  data-adapt-container-width="true"
                  data-width="100%"
                  style={{ border: "none", overflow: "hidden", width: "100%" }}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-8 col-lg-9">
              <div className="widget widget-about">
                <img
                  src={"http://103.137.184.193:5500/avtfb.png"}
                  alt="Payment methods"
                  width="190"
                  // height="20"
                />
                <h4>CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ BEHOME</h4>
                <p className="mb-0">
                  <span style={{ fontWeight: 600 }}>Địa chỉ</span>:{" "}
                  {props.company.Company.address}
                </p>
                <p className="mb-0">
                  <span style={{ fontWeight: 600 }}>Email</span>:{" "}
                  <a
                    style={{ textDecoration: "underline", color: "#0080ed" }}
                    href={"mailto:" + props.company.Company.email}
                  >
                    {props.company.Company.email}
                  </a>
                </p>
                <p className="mb-0">
                  <span style={{ fontWeight: 600 }}>Số điện thoại</span>:{" "}
                  <a href={"#"}>{props.company.Company.phonenumber}</a>
                </p>
                <p className="mb-0">
                  <span style={{ fontWeight: 600 }}>Giờ mở cửa</span>: Giờ mở
                  cửa :7h00-18h00 Từ: T2-CN
                </p>
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

          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p style={{ fontWeight: 600 }}>
              © Copyright Công Ty TNHH Thương Mại Và Dịch Vụ Behome
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
