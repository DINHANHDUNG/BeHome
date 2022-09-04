import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { Product } from "../../../types/product";
interface propsInfoDetail {
  describe: string;
  productdetails: any;
}
function ComponentInfoDetail(props: propsInfoDetail) {
  return (
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

        {/* <li className="nav-item">
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
        </li> */}
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
              style={{ width: "100%", outline: 'none', border: 'none' }}
              value={props.describe}
              readOnly
              className="TextAreaAntd"
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
            {props.productdetails?.map((val: any) => (
              <p>
                <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                <span style={{ color: "black", fontWeight: 600 }}>
                  {val.title}{" "}
                </span>
                {val.specifications}
              </p>
            ))}
          </div>
        </div>

        {/* <div
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
            Từ i5 - 2520M lên i7 - 2620M thêm 890.000đ <br /> Từ i5 - 3320M lên
            i7 - 3520M thêm 1.200.000đ <br /> Từ i5 - 2520M lên i7 - 2720QM thêm
            1.400.000đ <br /> Từ i5 - 3320M lên i7 - 3720QM thêm 1.900.000đ
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
              Từ SSD 120gb (cũ) lên SSD 240gb (mới) thêm - 900.000đ nay chỉ còn
              700.000đ
            </p>
            <p>
              Từ SSD 120gb (cũ) lên SSD 480gb (mới) thêm - 1.650.000đ nay chỉ
              còn 1.400.000đ
            </p>
            <p>
              Từ SSD 256gb (cũ) lên SSD 480gb (mới) thêm - 1.450.000đ nay chỉ
              còn 1.200.000đ
            </p>
            <hr />
            <h3 style={{ fontWeight: 600 }}>Áp dụng với ổ dạng M2 sata :</h3>
            <p>
              Từ SSD 120gb (cũ) lên SSD 240gb (mới) thêm - 1.200.000đ nay chỉ
              còn 800.000đ
            </p>
            <p>
              Từ SSD 120gb (cũ) lên SSD 480gb (mới) thêm - 1.650.000đ nay chỉ
              còn 1.500.000đ
            </p>
            <p>
              Từ SSD 256gb (cũ) lên SSD 480gb (mới) thêm - 1.450.000đ nay chỉ
              còn 1.300.000đ
            </p>
            <hr />
            <h2 style={{ color: "red" }}>
              {" "}
              Lưu ý: Giá nâng cấp áp dụng trong 15 ngày đầu kể từ khi quý khách
              mua máy.
            </h2>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ComponentInfoDetail;
