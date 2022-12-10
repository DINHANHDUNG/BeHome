import { Button, Card, Col, Form, Image, Input, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import {
  getAllCategoryProductAdmin,
  getFullCategoryProductAdmin,
} from '../../../../features/Admin/categoryAdnim';
import { getCompany, updateCompany } from '../../../../features/Admin/company';
import {
  categoryAdminStore,
  companyAdminStore,
} from '../../../../use-selector';
import uploadIMGAdminAPI from '../../../commom/api/UploadIMG/upload';
import { useAppDispatch, useAppSelector } from '../../../hooks';

function Company() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const dispatch = useAppDispatch();
  const [fileIMG, setFileIMG] = useState([] as any);
  const [logo, setLogo] = useState(null as any);
  console.log('fileIMG', fileIMG);

  const [uploading, setUploading] = useState(false);
  const [arrImgDelete, setArrImgDelete] = useState([] as any);

  const company = useAppSelector(companyAdminStore);

  console.log(company);

  useEffect(() => {
    dispatch(getCompany());
    dispatch(getFullCategoryProductAdmin());
  }, []);

  useEffect(() => {
    form.resetFields();
    setFileIMG(company.Company.images?.filter((v) => v.type !== 'LOGO'));
    setLogo(company.Company.images?.find((v) => v.type === 'LOGO')?.imagename);
  }, [company.Company]);

  function onFinish(value: any) {
    console.log(value);

    const arrIMG = [] as any;

    fileIMG.map((val: any, idx: any) => {
      console.log(idx);
      arrIMG.push({
        imagename: val.imagename,
        type: 'BANNER',
        id_category: val.id_category,
      });
    });

    if (logo) {
      arrIMG.push({
        imagename: logo,
        type: 'LOGO',
        id_category: null,
      });
    }

    dispatch(updateCompany({ ...value, images: arrIMG })).then(() => {
      // Thành công thì gọi
      arrImgDelete?.map((value: any) => {
        deleteImgArr(value);
      });
    });
  }

  function deleteImgArr(value: any) {
    if (value.imagename.split('.').length > 1) {
      uploadIMGAdminAPI
        .postDeleteIMG({
          imageName: value.imagename,
        })
        .then((res) => {
          console.log('Thành công');
        });
    }
  }

  function deleteIMG(value: any, type?: string) {
    console.log('Đang xóa', value);

    setArrImgDelete((pre: any) => {
      console.log(pre);

      return [...pre, value];
    });

    if (type === 'LOGO') {
      return setLogo(null);
    }

    setFileIMG((pre: any) => {
      console.log(pre);

      return pre.filter((values: any) => values.imagename !== value.imagename);
    });
  }

  function onchangeIMG(e: any) {
    console.log(e.target.files);

    console.log(e.target.files[0]);

    for (let index = 0; index < e.target.files.length; index++) {
      uploadImage(e.target.files[index]);
    }
  }

  function onchangeLogo(e: any) {
    console.log(e.target.files);
    uploadImage(e.target.files[0], 'LOGO');
  }

  function uploadImage(e: any, type?: string) {
    const data = new FormData();
    data.append('image', e);
    setUploading(true);
    uploadIMGAdminAPI
      .postUploadIMG(data)
      .then((res) => {
        // setFileIMG(res.data.data.imageName);
        console.log(res.data.data.imageName);
        console.log(res.data.data.imageUrl);
        setUploading(false);
        if (type === 'LOGO') {
          return setLogo(res.data.data.imageName);
        }
        setFileIMG((pre: any) => [
          ...pre,
          { imagename: res.data.data.imageName },
        ]);
      })
      .catch((err) => {
        console.log('Lỗi upload');
        setUploading(false);
      });
  }

  function onChange(value: any, idx: any) {
    const newState = fileIMG.map((obj: any, index: any) =>
      index === idx ? { ...obj, id_category: value } : obj,
    );
    setFileIMG(newState);
  }

  function onSearch(val: any) {
    console.log('search:', val);
  }
  const categorys = useAppSelector(categoryAdminStore);
  //Select
  const valueSelect = categorys.listcategoryProduct?.filter(
    (item) => item.id !== 0,
  );

  return (
    <div className="tabled" style={{ marginBottom: '20px' }}>
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
                csdt: company.Company.csdt,
                csbh: company.Company.csbh,
                csvc: company.Company.csvc,
                qdtt: company.Company.qdtt,
                csbm: company.Company.csbm,
                hdmh: company.Company.hdmh,
                linkTiktok: company.Company.linkTiktok,
                linkMessenger: company.Company.linkMessenger,
                linkFacebook: company.Company.linkFacebook,
                linkYoutube: company.Company.linkYoutube,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row gutter={[24, 0]}>
                <Col xs={24} xl={8}>
                  <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[{ required: true, message: 'Nhập địa chỉ!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={8}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: 'Nhập email!' },
                      {
                        type: 'email',
                        message: 'Chưa đúng định dạng!',
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
                      // {
                      //   pattern: /^(?:\d*)$/,
                      //   message: "Nhập số",
                      // },
                      {
                        required: true,
                        message: 'Nhập số điện thoại',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[24, 0]}>
                <Col xs={24} xl={12}>
                  <Form.Item
                    label="Chính sách bảo hành"
                    name="csbh"
                    rules={[
                      { required: true, message: 'Nhập chính sách bảo hành!' },
                    ]}
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={12}>
                  <Form.Item
                    label="Chính sách vận chuyển"
                    name="csvc"
                    rules={[
                      {
                        required: true,
                        message: 'Nhập chính sách vận chuyển!',
                      },
                    ]}
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 0]}>
                <Col xs={24} xl={12}>
                  <Form.Item
                    label="Quy định thanh toán"
                    name="qdtt"
                    rules={[
                      { required: true, message: 'Nhập quy định thanh toán!' },
                    ]}
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={12}>
                  <Form.Item
                    label="Chính sách đổi trả"
                    name="csdt"
                    rules={[
                      { required: true, message: 'Nhập chính sách đổi trả!' },
                    ]}
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 0]}>
                <Col xs={24} xl={12}>
                  <Form.Item
                    label="Chính sách bảo mật"
                    name="csbm"
                    rules={[
                      { required: true, message: 'Nhập chính sách bảo mật!' },
                    ]}
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={12}>
                  <Form.Item
                    label="Hướng dẫn mua hàng"
                    name="hdmh"
                    rules={[
                      { required: true, message: 'Nhập hướng dẫn mua hàng!' },
                    ]}
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[24, 0]}>
                <Col xs={24} xl={12}>
                  <Form.Item
                    label="Link Tiktok"
                    name="linkTiktok"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={12}>
                  <Form.Item
                    label="Link Youtube"
                    name="linkYoutube"
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 0]}>
                <Col xs={24} xl={12}>
                  <Form.Item
                    label="Link Messenger"
                    name="linkMessenger"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={12}>
                  <Form.Item
                    label="Link Facebook"
                    name="linkFacebook"
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <h5>Danh sách banner</h5>
              <Row gutter={[0, 0]}>
                {fileIMG?.map((value: any, idx: any) => {
                  return (
                    <Col xs={24} xl={12}>
                      <div className="info_image">
                        <Image
                          key={idx}
                          width={150}
                          height={150}
                          src={
                            // value.split(".").length > 1
                            //   ? "http://103.137.184.193:5500/images/" + value
                            //   : "https://cf.shopee.vn/file/" + value
                            'http://103.137.184.193:5500/images/' +
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
                      <div>
                        <Select
                          showSearch
                          size="large"
                          placeholder="Chọn danh mục"
                          optionFilterProp="children"
                          onChange={(v) => onChange(v, idx)}
                          onSearch={onSearch}
                          value={value.id_category}
                          style={{
                            // minWidth: '60px',
                            width: '95%',
                            marginBottom: '10px',
                            marginRight: 'props.pageSizepx',
                          }}
                          filterOption={(input, option: any) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                          filterSort={(optionA: any, optionB: any) =>
                            optionA.children
                              .toLowerCase()
                              .localeCompare(optionB.children.toLowerCase())
                          }
                        >
                          {valueSelect.map((item) => (
                            <Option value={item.id} key={item.id}>
                              {item.name}
                            </Option>
                          ))}
                        </Select>
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

              <h5>LOGO</h5>

              {logo && (
                <Row gutter={[0, 0]}>
                  <Col span={24}>
                    <div className="info_image">
                      <Image
                        width={150}
                        height={150}
                        src={
                          // value.split(".").length > 1
                          //   ? "http://103.137.184.193:5500/images/" + value
                          //   : "https://cf.shopee.vn/file/" + value
                          'http://103.137.184.193:5500/images/' + logo
                        }
                      />
                      <span
                        className="icon_delete"
                        onClick={() => deleteIMG(logo, 'LOGO')}
                      >
                        x
                      </span>
                    </div>
                  </Col>
                </Row>
              )}

              <Form.Item>
                {!logo && (
                  <input
                    type="file"
                    accept="image/*"
                    // style={{ display: "none" }}
                    onChange={onchangeLogo}
                    // ref={inputRef}
                  />
                )}
              </Form.Item>

              <Row>
                <Col
                  span={24}
                  style={{ textAlign: 'right', paddingRight: '10px' }}
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
