import {
  Button,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
} from "antd";

import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { FormInstance } from "rc-field-form";
import React, { useEffect, useRef, useState } from "react";
import "../../../../assets/css/cssGlobal/style.css";
import { Product } from "../../../../types/product";
import {
  openNotification,
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks";
import {
  categoryAdminStore,
  manufacturerAdminStore,
  productAdminStore,
  promotionAdminStore,
  rankAdminStore,
} from "../../../../../use-selector";
import { getAllPromotionAdmin } from "../../../../../features/Admin/promotion";
import uploadIMGAdminAPI from "../../../../commom/api/UploadIMG/upload";
import { getAllRankAdmin } from "../../../../../features/Admin/rankAdnim";
import { getAllManufacturerAdmin } from "../../../../../features/Admin/manufacturerAdnim";
import {
  getAllComboAdmin,
  getComboSearchAdmin,
  postAddComboByIdAdmin,
  postEditComboByIdAdmin,
} from "../../../../../features/Admin/comboAdnim";
import { getAllProductAdmin } from "../../../../../features/Admin/productAdnim";

interface propsModalProduct {
  visible: boolean;
  toggle: () => void;
  value: any;
  valueInputSelect: number;
  page: number;
  pageSize: number;
  visibleSearch: boolean;
  comboKey: string;
}
function ModalCombo(props: propsModalProduct) {
  console.log(props.value, props.value);
  const formRef: any = React.createRef<FormInstance>();
  const { Option } = Select;
  const { TextArea } = Input;
  const categorys = useAppSelector(categoryAdminStore);
  const promotion = useAppSelector(promotionAdminStore);
  const products = useAppSelector(productAdminStore);
  const [dataSelectRank, setDataSelectRank] = useState([] as any);
  const [dataSelectManufacturer, setDataSelectManufacturer] = useState(
    [] as any
  );

  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const listComboProduct = Form.useWatch("combo_products", form);

  useEffect(() => {
    setFileIMG(props.value.images ? props.value.images : []);
    dispatch(
      getAllPromotionAdmin({
        page: 0,
        noitem: 0,
      })
    );

    dispatch(
      getAllProductAdmin({
        id_category: 0,
        page: 0,
        sort: 0,
        noitem: 0,
      })
    );
    // form.setFieldsValue({
    //   id_dmsps: arrid_dmsps,
    // })
    form.resetFields();

    form.resetFields();
  }, [props.value.id]);

  function onFinish(value: any) {
    console.log(value);

    let arrIMG = [] as any;

    fileIMG.map((val: any, idx: any) => {
      console.log(idx);
      if (idx === 0) {
        arrIMG.push({
          imagename: val.imagename,
          type: "1",
        });
      } else {
        arrIMG.push({
          imagename: val.imagename,
          type: "2",
        });
      }
    });

    console.log(arrIMG);
    if (arrIMG.length >= 3) {
      if (props.value.id > 0) {
        // Sửa
        console.log("Sửa", value);
        dispatch(
          postEditComboByIdAdmin({
            ...value,
            id: props.value.id,
            price: Number(value.price),
            images: arrIMG,
          })
        ).then((res) => {
          if (props.visibleSearch) {
            dispatch(
              getComboSearchAdmin({
                id_category: 0,
                comboKey: props.comboKey ? props.comboKey : "",
                minprice: null,
                maxprice: null,
                page: props.page,
                noitem: props.pageSize,
              })
            );
          } else {
            dispatch(
              getAllComboAdmin({
                id_category: props.valueInputSelect,
                sort: 0,
                page: props.page,
                noitem: props.pageSize,
              })
            );
          }
          arrImgDelete?.map((value: any) => {
            deleteImgArr(value);
          });
          props.toggle();
        });
      } else {
        // Thêm
        dispatch(
          postAddComboByIdAdmin({
            ...value,
            price: Number(value.price),
            images: arrIMG,
          })
        ).then(() => {
          if (props.visibleSearch) {
            dispatch(
              getComboSearchAdmin({
                id_category: 0,
                comboKey: props.comboKey ? props.comboKey : "",
                minprice: null,
                maxprice: null,
                page: props.page,
                noitem: props.pageSize,
              })
            );
          } else {
            dispatch(
              getAllComboAdmin({
                id_category: props.valueInputSelect,
                page: props.page,
                sort: 0,
                noitem: props.pageSize,
              })
            );
          }
          arrImgDelete?.map((value: any) => {
            deleteImgArr(value);
          });
          props.toggle();
        });
      }
    } else {
      if (props.value.id > 0) {
        // Sửa
        console.log("Sửa", value);
        dispatch(
          postEditComboByIdAdmin({
            ...value,
            id: props.value.id,
            price: Number(value.price),
            images: arrIMG,
          })
        ).then((res) => {
          dispatch(
            getAllComboAdmin({
              id_category: props.valueInputSelect,
              page: props.page,
              sort: 0,
              noitem: props.pageSize,
            })
          );
          arrImgDelete?.map((value: any) => {
            deleteImgArr(value);
          });
          props.toggle();
        });
      } else {
        // Thêm
        dispatch(
          postAddComboByIdAdmin({
            ...value,
            price: Number(value.price),
            images: arrIMG,
          })
        ).then(() => {
          dispatch(
            getAllComboAdmin({
              id_category: props.valueInputSelect,
              page: props.page,
              sort: 0,
              noitem: props.pageSize,
            })
          );
          arrImgDelete?.map((value: any) => {
            deleteImgArr(value);
          });
          props.toggle();
        });
      }
      // openNotification({
      //   message: "Chọn ít nhất 5 ảnh",
      //   type: "error",
      // });
      openNotification({
        message: "Bạn đang chọn ít hơn 3 ảnh",
        type: "warning",
      });
    }
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

  function onChange(value: any) {
    console.log(`selected ${value}`);
  }

  function onSearch(val: any) {
    console.log("search:", val);
  }

  //Select
  const valueSelect = categorys.listcategoryCombo.filter(
    (item) => item.id != 0
  );
  console.log(valueSelect);

  //Xử lý ảnh
  const inputRef = useRef(null as any);
  const [fileIMG, setFileIMG] = useState([] as any);
  const [uploading, setUploading] = useState(false);
  const [arrImgDelete, setArrImgDelete] = useState([] as any);
  console.log(fileIMG);
  console.log(arrImgDelete);

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
    <Modal
      title={props.value?.id > 0 ? "Sửa combo" : "Thêm combo"}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      width={"80%"}
      footer={null}
    >
      <Form
        ref={formRef}
        name="basic"
        // labelCol={{ span: 3 }}
        form={form}
        layout="vertical"
        // wrapperCol={{ span: 16 }}
        initialValues={{
          id_category: props.value.id_category,
          id_promotion: props.value.id_promotion,
          name: props.value.name,
          linkvideo: props.value.linkvideo,
          describe: props.value.describe,
          price: props.value.price,
          combo_products: props.value.combo_products,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={[8, 0]}>
          <Col md={12} xs={24}>
            <Form.Item
              label="Danh mục"
              name="id_category"
              rules={[{ required: true, message: "Chọn danh mục!" }]}
            >
              <Select
                showSearch
                size="large"
                placeholder="Chọn danh mục"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                style={{ minWidth: "60px", marginRight: "props.pageSizepx" }}
                filterOption={(input, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA: any, optionB: any) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                {/* {categoryproduct.listcategoryProduct.map((item) => (
                    <Option value={item.id} key={item.id}>
                      {item.name}
                    </Option>
                  ))} */}
                {valueSelect.map((item) => (
                  <Option value={item.id} key={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              label="Khuyến mại"
              name="id_promotion"
              rules={[{ required: true, message: "Chọn khuyến mại!" }]}
            >
              <Select
                showSearch
                size="large"
                placeholder="Chọn khuyến mại"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                style={{ minWidth: "60px", marginRight: "props.pageSizepx" }}
                filterOption={(input, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA: any, optionB: any) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                {promotion.listpromotion.map((item) => (
                  <Option value={item.id} key={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8, 0]}>
          <Col md={12} xs={24}>
            <Form.Item
              label="Tên "
              name="name"
              rules={[{ required: true, message: "Nhập tên sản phẩm!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              label="Giá bán"
              name="price"
              rules={[{ required: true, message: "Nhập giá!" }]}
            >
              <InputNumber
                maxLength={25}
                style={{ width: "100%" }}
                formatter={(value: any) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                size="large"
                parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Mô tả"
          name="describe"
          // rules={[{ required: true, message: "Nhập mô tả sản phẩm!" }]}
        >
          <TextArea rows={6} />
        </Form.Item>

        <Form.Item
          label="Link Video"
          name="linkvideo"
          // rules={[{ required: true, message: "Nhập link video!" }]}
        >
          <Input />
        </Form.Item>
        <h5 style={{ textAlign: "center" }}>Chọn sản phẩm trong combo</h5>

        <Form.List name="combo_products">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Row gutter={[8, 0]}>
                      <Col md={8} xs={24}>
                        <Form.Item
                          label="Sản phẩm"
                          name={[index, "id_product"]}
                          rules={[
                            { required: true, message: "Chọn sản phẩm!" },
                          ]}
                        >
                          <Select
                            showSearch
                            size="large"
                            placeholder="Chọn sản phẩm"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            style={{
                              minWidth: "60px",
                              marginRight: "props.pageSizepx",
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
                            {products.listproduct.map((item) => (
                              <Option value={item.id} key={item.id}>
                                {item.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                        {/* <Form.Item
                          name={[index, "title"]}
                          label="Tiêu đề"
                          rules={[{ required: true, message: "Nhập tiêu đề!" }]}
                        >
                          <Input placeholder="Tiêu đề" />
                        </Form.Item> */}
                      </Col>
                      <Col md={8} xs={12}>
                        <Form.Item
                          name={[index, "amountproduct"]}
                          label={`Số lượng `}
                          rules={[
                            {
                              required: true,
                              message: "Nhập thông số lượng!",
                            },
                          ]}
                        >
                          <InputNumber
                            placeholder="Thông số lượng"
                            size="large"
                            style={{ width: "100%" }}
                          />
                        </Form.Item>
                      </Col>
                      <Col md={7} xs={12}>
                        <Form.Item label="Ảnh sản phẩm">
                          {/* {JSON.stringify(field)} */}
                          {/* {JSON.stringify(
                            listComboProduct
                              ? listComboProduct[index]?.id_product
                              : null
                          )} */}
                          {/* {JSON.stringify(
                            products.listproduct?.filter(
                              (value) =>
                                value.id === listComboProduct[index]?.id_product
                            )[0]?.images[0]?.imagename
                          )} */}
                          {listComboProduct &&
                          products?.listproduct?.filter(
                            (value) =>
                              value.id === listComboProduct[index]?.id_product
                          )[0]?.images[0]?.imagename ? (
                            <Image
                              key={index}
                              width={200}
                              height={200}
                              src={
                                "http://103.137.184.193:5500/images/" +
                                products?.listproduct?.filter(
                                  (value) =>
                                    value.id ===
                                    listComboProduct[index]?.id_product
                                )[0]?.images[0]?.imagename
                              }
                            />
                          ) : (
                            "Chưa có ảnh"
                          )}
                        </Form.Item>
                      </Col>
                      <Col
                        md={1}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            style={{ fontSize: "20px" }}
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Col>
                    </Row>
                    <hr />
                  </div>
                ))}
                <Form.Item>
                  <PlusCircleOutlined
                    onClick={() => add()}
                    style={{
                      fontSize: "20px",
                      float: "right",
                      marginRight: "25px",
                    }}
                  />
                </Form.Item>
              </div>
            );
          }}
        </Form.List>

        <Row gutter={[0, 0]}>
          {fileIMG?.map((value: any, idx: any) => {
            console.log(value);

            return (
              <Col span={6}>
                <div className="info_image">
                  <Image
                    key={idx}
                    width={150}
                    height={150}
                    src={
                      // value.split(".").length > 1
                      //   ? "http://103.137.184.193:5500/images/" + value
                      //   : "https://cf.shopee.vn/file/" + value
                      "http://103.137.184.193:5500/images/" + value.imagename
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

        <input
          type="file"
          accept="image/*"
          multiple
          // style={{ display: "none" }}
          onChange={onchangeIMG}
          // ref={inputRef}
        />

        <Form.Item
          wrapperCol={{ offset: props.value?.id > 0 ? 22 : 21, span: 24 }}
        >
          <Button type="primary" htmlType="submit">
            {props.value?.id > 0 ? "Sửa" : "Thêm"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalCombo;
