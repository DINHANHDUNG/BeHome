import { Button, Card, Col, Form, Image, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { getCompany, updateCompany } from "../../../../features/Admin/company";
import { companyAdminStore } from "../../../../use-selector";
import uploadIMGAdminAPI from "../../../commom/api/UploadIMG/upload";
import { useAppDispatch, useAppSelector } from "../../../hooks";

function Company() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [fileIMG, setFileIMG] = useState([] as any);
  const [uploading, setUploading] = useState(false);
  const [arrImgDelete, setArrImgDelete] = useState([] as any);

  const company = useAppSelector(companyAdminStore);

  console.log(company);

  useEffect(() => {
    dispatch(getCompany());
  }, []);

  useEffect(() => {
    form.resetFields();
    setFileIMG(company.Company.images);
  }, [company.Company]);

  function onFinish(value: any) {
    console.log(value);

    let arrIMG = [] as any;

    fileIMG.map((val: any, idx: any) => {
      console.log(idx);
      arrIMG.push({
        imagename: val.imagename,
        type: "BANNER",
      });
    });

    dispatch(updateCompany({ ...value, images: arrIMG })).then(() => {
      // Thành công thì gọi
      arrImgDelete?.map((value: any) => {
        deleteImgArr(value);
      });
    });
  }

  function deleteImgArr(value: any) {
    if (value.imagename.split(".").length > 1) {
      uploadIMGAdminAPI
        .postDeleteIMG({
          imageName: value.imagename,
        })
        .then((res) => {
          console.log("Thành công");
        });
    }
  }

  function deleteIMG(value: any) {
    console.log("Đang xóa", value);

    setArrImgDelete((pre: any) => {
      console.log(pre);

      return [...pre, value];
    });

    setFileIMG((pre: any) => {
      console.log(pre);

      return pre.filter((values: any) => values.imagename != value.imagename);
    });
  }

  function onchangeIMG(e: any) {
    console.log(e.target.files);

    console.log(e.target.files[0]);

    for (let index = 0; index < e.target.files.length; index++) {
      uploadImage(e.target.files[index]);
    }
  }

  function uploadImage(e: any) {
    const data = new FormData();
    data.append("image", e);
    setUploading(true);
    uploadIMGAdminAPI
      .postUploadIMG(data)
      .then((res) => {
        // setFileIMG(res.data.data.imageName);
        console.log(res.data.data.imageName);
        console.log(res.data.data.imageUrl);
        setFileIMG((pre: any) => [
          ...pre,
          { imagename: res.data.data.imageName },
        ]);
        setUploading(false);
      })
      .catch((err) => {
        console.log("Lỗi upload");
        setUploading(false);
      });
  }

  return (
    <div className="tabled" style={{ marginBottom: "20px" }}>
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Thông tin công ty"
            // extra={}
          >
            <Form
              name="basic"
              layout="vertical"
              //   labelCol={{ span: 3 }}
              className="mt-3 p-3"
              form={form}
              initialValues={{
                address: company.Company.address,
                phonenumber: company.Company.phonenumber,
                email: company.Company.email,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row gutter={[24, 0]}>
                <Col xs={24} xl={8}>
                  <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[{ required: true, message: "Nhập địa chỉ!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={8}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Nhập email!" },
                      {
                        type: "email",
                        message: "Chưa đúng định dạng!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={8}>
                  <Form.Item
                    label="Số điện thoại"
                    name="phonenumber"
                    rules={[
                      {
                        pattern: /^(?:\d*)$/,
                        message: "Nhập số",
                      },
                      {
                        required: true,
                        message: "Nhập số điện thoại",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <h5>Danh sách banner</h5>
              <Row gutter={[0, 0]}>
                {fileIMG?.map((value: any, idx: any) => {
                  return (
                    <Col span={6}>
                      <div className="info_image">
                        <Image
                          key={idx}
                          width={150}
                          height={150}
                          src={
                            // value.split(".").length > 1
                            //   ? "http://103.173.155.138:5500/images/" + value
                            //   : "https://cf.shopee.vn/file/" + value
                            "http://103.173.155.138:5500/images/" +
                            value.imagename
                          }
                        />
                        <span
                          className="icon_delete"
                          onClick={() => deleteIMG(value)}
                        >
                          x
                        </span>
                      </div>
                    </Col>
                  );
                })}
              </Row>

              <Form.Item>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  // style={{ display: "none" }}
                  onChange={onchangeIMG}
                  // ref={inputRef}
                />
              </Form.Item>

              <Row>
                <Col
                  span={24}
                  style={{ textAlign: "right", paddingRight: "10px" }}
                >
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Cập nhật
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Company;
