import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import BoxPromotion from "../../component/customer/box-promotion/box-promotion";
import Comment from "../../component/customer/comment/comment";
import ModalNextIMG from "../../component/customer/modalNextImg/modalNextIMG";
import { Numberformat } from "../../hooks";

function DetailProduct() {
  const [img, setIMG] = useState([
    {
      id: 2,
      img: "http://103.173.155.138:5500/images/412554e8a8a9430ba6566fa9c38c1775.jpg",
    },
    {
      id: 3,
      img: "http://103.173.155.138:5500/images/bb55052e71d940dabc9b62cb974208db.jpg",
    },
    {
      id: 4,
      img: "http://103.173.155.138:5500/images/5c7c3da1148f45df91e96d5458d742b3.jpg",
    },
  ]);
  const [dispayIMG, setDisplayIMG] = useState(img[0] ? img[0] : ({} as any));
  const [visible, setVisible] = useState(false);

  console.log(dispayIMG);

  return (
    <div className="container">
      <div className="product-details-top mb-2 mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="product-gallery">
              <figure className="product-main-image">
                <img
                  id="product-zoom"
                  src={dispayIMG.img}
                  alt="product image"
                />

                <a
                  id="btn-product-gallery"
                  className="btn-product-gallery"
                  onClick={() => setVisible(true)}
                >
                  <i className="icon-arrows"></i>
                </a>
              </figure>

              {/*thêm className active thêm viền xanh */}

              <div id="product-zoom-gallery" className="product-image-gallery">
                {img.map((value) => (
                  <a
                    key={value.id}
                    className="product-gallery-item "
                    onClick={() => setDisplayIMG(value)}
                  >
                    <img src={value.img} alt="product side" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="product-details">
              <h1 className="product-title">Laptop Del 3456</h1>

              <div className="product-price" style={{ justifyContent: "left" }}>
                <span>{Numberformat(2000000000)} VNĐ</span>
                &nbsp;
                <del style={{ fontSize: "13px", opacity: "0.4" }}>
                  {Numberformat(3000000000)} VNĐ
                </del>{" "}
              </div>

              <div className="product-content mb-3">
                <p> ✔ CPU: Intel core i7 11800H</p>
                <p> ✔ RAM: 64GB</p>
                <p> ✔ Ổ cứng: 1TB SSD</p>
                <p> ✔ VGA: Nvidia RTX 3080 8G</p>
                <p> ✔ Màn hình: 16.0 inch WQXGA 165Hz 100%sRGB</p>
                <p> ✔ HĐH: Win 10</p>
              </div>

              {/* <div className="details-filter-row details-row-size">
                <label htmlFor="size">Size:</label>
                <div className="select-custom">
                  <select name="size" id="size" className="form-control">
                    <option value="#" selected={true}>
                      Select a size
                    </option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">Extra Large</option>
                  </select>
                </div>
              </div> */}

              {/* <div className="details-filter-row details-row-size mb-3" >
                <label htmlFor="qty">Qty:</label>
                <div className="product-details-quantity">
                  <input
                    type="number"
                    id="qty"
                    className="form-control"
                    value="1"
                    min="1"
                    max="10"
                    step="1"
                    data-decimals="0"
                    required
                  />
                </div>
              </div> */}

              <BoxPromotion />

              <div className="product-details-action">
                <a href="#" className="btn-product btn-cart">
                  <span>Mua ngay</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h4>Video</h4>
            <hr
              style={{
                marginTop: "10px",
                marginRight: "0px",
                marginBottom: "10px",
                marginLeft: "0px",
              }}
            />
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/OkFRGiXaS34"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <hr
              style={{
                marginTop: "10px",
                marginRight: "0px",
                marginBottom: "10px",
                marginLeft: "0px",
              }}
            />
          </div>
        </div>

        <div className="product-details-tab">
          <ul className="nav nav-pills justify-content-center" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="product-desc-link"
                data-toggle="tab"
                href="#product-desc-tab"
                role="tab"
                aria-controls="product-desc-tab"
                aria-selected="true"
              >
                Mô tả
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="product-info-link"
                data-toggle="tab"
                href="#product-info-tab"
                role="tab"
                aria-controls="product-info-tab"
                aria-selected="false"
              >
                Thông số kỹ thuật
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                id="product-price-link"
                data-toggle="tab"
                href="#product-price-tab"
                role="tab"
                aria-controls="product-info-tab"
                aria-selected="false"
              >
                Bảng giá nâng cấp
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="product-desc-tab"
              role="tabpanel"
              aria-labelledby="product-desc-link"
            >
              <div className="product-desc-content">
                {/* <p>{products.listproduct[0]?.describe}</p> */}
                <TextArea
                  rows={20}
                  style={{ width: "100%" }}
                  value={"test"}
                  readOnly
                />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="product-info-tab"
              role="tabpanel"
              aria-labelledby="product-info-link"
            >
              <div className="product-desc-content">
                {/* {products.listproduct[0]?.productdetails?.map((val: any) => (
                  <p>
                    <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                    <span style={{ color: "black", fontWeight: 600 }}>
                      {val.title}{" "}
                    </span>
                    {val.specifications}
                  </p>
                ))} */}
                <p>
                  <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                  <span style={{ color: "black", fontWeight: 600 }}>
                    {"Tặng chuột foter V181"}{" "}
                  </span>
                  {"Tặng chuột foter V181"}
                </p>

                <p>
                  <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                  <span style={{ color: "black", fontWeight: 600 }}>
                    {"Tặng chuột foter V181"}{" "}
                  </span>
                  {"Tặng chuột foter V181"}
                </p>

                <p>
                  <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                  <span style={{ color: "black", fontWeight: 600 }}>
                    {"Tặng chuột foter V181"}{" "}
                  </span>
                  {"Tặng chuột foter V181"}
                </p>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="product-price-tab"
              role="tabpanel"
              aria-labelledby="product-price-link"
            >
              <div className="product-desc-content">
                <h3 style={{ fontWeight: 600 }}>
                  Sò Lap Xin Gửi Tới Quý Khách Hàng Bảng Giá Nâng Cấp:
                </h3>
                <h3 style={{ fontWeight: 600 }}>Giá Nâng Cấp Chip:</h3>
                Từ i5 - 2520M lên i7 - 2620M thêm 890.000đ <br /> Từ i5 - 3320M
                lên i7 - 3520M thêm 1.200.000đ <br /> Từ i5 - 2520M lên i7 -
                2720QM thêm 1.400.000đ <br /> Từ i5 - 3320M lên i7 - 3720QM thêm
                1.900.000đ
                <hr />
                <h3 style={{ fontWeight: 600 }}>Giá Nâng Cấp Ram (PC3-PC3L)</h3>
                <p>Từ 4gb lên 8gb thêm - 500.000đ</p>
                <p>Từ 8gb lên 16gb thêm - 850.000đ</p>
                <p>Từ 16gb lên 32gb thêm - 1.550.000đ</p>
                <hr />
                <h3 style={{ fontWeight: 600 }}>Ram (DDR4)</h3>
                <p>Từ 4gb lên 8gb thêm - 600.000đ</p>
                <p>Từ 8gb lên 16gb thêm - 900.000đ</p>
                <p>Từ 16gb lên 32gb thêm - 1.700.000đ</p>
                <hr />
                <h3 style={{ fontWeight: 600 }}>
                  {" "}
                  Giá Nâng Cấp Ổ Cứng (2.5 inch):
                </h3>
                <p>
                  Từ HDD 500gb lên SSD 120gb (mới) thêm - 750.000đ nay chỉ còn
                  590.000đ
                </p>
                <p>
                  Từ HDD 500gb lên SSD 240gb (mới) thêm - 1.250.000đ nay chỉ còn
                  850.000đ
                </p>
                <p>
                  Từ HDD 1TB lên SSD 240gb (mới) thêm - 1.250.000đ nay chỉ còn
                  650.000đ
                </p>
                <p>
                  Từ SSD 120gb (cũ) lên SSD 240gb (mới) thêm - 900.000đ nay chỉ
                  còn 700.000đ
                </p>
                <p>
                  Từ SSD 120gb (cũ) lên SSD 480gb (mới) thêm - 1.650.000đ nay
                  chỉ còn 1.400.000đ
                </p>
                <p>
                  Từ SSD 256gb (cũ) lên SSD 480gb (mới) thêm - 1.450.000đ nay
                  chỉ còn 1.200.000đ
                </p>
                <hr />
                <h3 style={{ fontWeight: 600 }}>
                  Áp dụng với ổ dạng M2 sata :
                </h3>
                <p>
                  Từ SSD 120gb (cũ) lên SSD 240gb (mới) thêm - 1.200.000đ nay
                  chỉ còn 800.000đ
                </p>
                <p>
                  Từ SSD 120gb (cũ) lên SSD 480gb (mới) thêm - 1.650.000đ nay
                  chỉ còn 1.500.000đ
                </p>
                <p>
                  Từ SSD 256gb (cũ) lên SSD 480gb (mới) thêm - 1.450.000đ nay
                  chỉ còn 1.300.000đ
                </p>
                <hr />
                <h2 style={{ color: "red" }}>
                  {" "}
                  Lưu ý: Giá nâng cấp áp dụng trong 15 ngày đầu kể từ khi quý
                  khách mua máy.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">{/* <Comment /> */}</div>
      </div>

      <ModalNextIMG
        visible={visible}
        listImg={img}
        imgDisplay={dispayIMG}
        toggle={() => setVisible(!visible)}
      />
    </div>
  );
}

export default DetailProduct;
