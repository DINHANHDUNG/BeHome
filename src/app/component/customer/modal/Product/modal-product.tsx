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
  promotionAdminStore,
  rankAdminStore,
} from "../../../../../use-selector";
import { getAllPromotionAdmin } from "../../../../../features/Admin/promotion";
import {
  getAllProductAdmin,
  getProductSearchAdmin,
  postAddProductByIdAdmin,
  postEditProductByIdAdmin,
} from "../../../../../features/Admin/productAdnim";
import uploadIMGAdminAPI from "../../../../commom/api/UploadIMG/upload";
import { getAllRankAdmin } from "../../../../../features/Admin/rankAdnim";
import { getAllManufacturerAdmin } from "../../../../../features/Admin/manufacturerAdnim";

interface propsModalProduct {
  visible: boolean;
  toggle: () => void;
  value: Product;
  valueInputSelect: number;
  page: number;
  pageSize: number;
  visibleSearch: boolean;
  productkey: string;
}
function ModalProduct(props: propsModalProduct) {
  console.log(props.value, props.value);
  const formRef: any = React.createRef<FormInstance>();
  const { Option } = Select;
  const { TextArea } = Input;
  const categorys = useAppSelector(categoryAdminStore);
  const promotion = useAppSelector(promotionAdminStore);
  const rank = useAppSelector(rankAdminStore);
  const manufacturer = useAppSelector(manufacturerAdminStore);
  const [dataSelectRank, setDataSelectRank] = useState([] as any);
  const [dataSelectManufacturer, setDataSelectManufacturer] = useState(
    [] as any
  );

  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    setFileIMG(props.value.images ? props.value.images : []);
    dispatch(
      getAllPromotionAdmin({
        page: 0,
        noitem: 0,
      })
    );

    dispatch(
      getAllRankAdmin({
        id_category: 0,
      })
    );

    dispatch(
      getAllManufacturerAdmin({
        id_category: 0,
        page: 0,
        noitem: 0,
      })
    );
    // form.setFieldsValue({
    //   id_dmsps: arrid_dmsps,
    // })
    form.resetFields();

    form.resetFields();
  }, [props.value.id]);

  useEffect(() => {
    const datarank = [] as any;
    const dataManufacturer = [] as any;
    rank.listRank?.map((val) => {
      datarank.push({
        id: val.rank?.id,
        name: val.rank?.name,
      });
    });

    manufacturer.listManufacturer?.map((val) => {
      dataManufacturer.push({
        id: val.manufacturer?.id,
        name: val.manufacturer?.name,
      });
    });

    setDataSelectRank(datarank);
    setDataSelectManufacturer(dataManufacturer);
  }, [rank.listRank, manufacturer.listManufacturer]);

  function onFinish(value: any) {
    console.log(value);

    let arrIMG = fileIMG;

    // fileIMG.map((val: any, idx: any) => {
    //   console.log(idx);
    //   if (idx === 0) {
    //     arrIMG.push({
    //       imagename: val.imagename,
    //       type: "1",
    //     });
    //   } else {
    //     arrIMG.push({
    //       imagename: val.imagename,
    //       type: "2",
    //     });
    //   }
    // });
    console.log(arrIMG);
    arrIMG?.slice().sort(function (a: any, b: any) {
      if (a.type.toLowerCase() > b.type.toLowerCase()) {
        return -1;
      }
      if (a.type.toLowerCase() < b.type.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    console.log(arrIMG);
    if (arrIMG?.find((x: any) => x.type === "1" || x.type === "MAIN")) {
      if (props.value.id > 0) {
        // S???a
        console.log("S???a", value);
        dispatch(
          postEditProductByIdAdmin({
            ...value,
            id: props.value.id,
            price: value.price ?  Number(value.price) : null,
            images: arrIMG,
          })
        ).then((res) => {
          if (props.visibleSearch) {
            dispatch(
              getProductSearchAdmin({
                id_category: 0,
                id_rank: 0,
                id_manufacturer: 0,
                productKey: props.productkey ? props.productkey : "",
                minprice: null,
                maxprice: null,
                page: props.page,
                noitem: props.pageSize,
                sort: 0,
              })
            );
          } else {
            dispatch(
              getAllProductAdmin({
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
        // Th??m
        dispatch(
          postAddProductByIdAdmin({
            ...value,
            price: value.price ?  Number(value.price) : null,
            images: arrIMG,
          })
        ).then(() => {
          if (props.visibleSearch) {
            dispatch(
              getProductSearchAdmin({
                id_category: 0,
                id_rank: 0,
                id_manufacturer: 0,
                productKey: props.productkey ? props.productkey : "",
                minprice: null,
                maxprice: null,
                page: props.page,
                noitem: props.pageSize,
                sort: 0,
              })
            );
          } else {
            dispatch(
              getAllProductAdmin({
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
      openNotification({
        message: "B???n ch??a ch???n ???nh ch??nh",
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
          console.log("Th??nh c??ng");
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
  const valueSelect = categorys.listcategoryProduct.filter(
    (item) => item.id != 0
  );
  console.log(valueSelect);

  //X??? l?? ???nh
  const inputRef = useRef(null as any);
  const [fileIMG, setFileIMG] = useState([] as any);
  const [uploading, setUploading] = useState(false);
  const [arrImgDelete, setArrImgDelete] = useState([] as any);
  console.log(fileIMG);
  console.log(arrImgDelete);

  function deleteIMG(value: any) {
    console.log("??ang x??a", value);

    setArrImgDelete((pre: any) => {
      console.log(pre);

      return [...pre, value];
    });

    setFileIMG((pre: any) => {
      console.log(pre);

      return pre.filter((values: any) => values.imagename != value.imagename);
    });
  }

  function onchangeIMG(e: any, key: string) {
    console.log(e.target.files);

    console.log(e.target.files[0]);

    for (let index = 0; index < e.target.files.length; index++) {
      uploadImage(e.target.files[index], key);
    }
  }

  function uploadImage(e: any, key: string) {
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
          { imagename: res.data.data.imageName, type: key },
        ]);
        setUploading(false);
      })
      .catch((err) => {
        console.log("L???i upload");
        setUploading(false);
      });
  }

  return (
    <Modal
      title={props.value?.id > 0 ? "S???a s???n ph???m" : "Th??m s???n ph???m"}
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
          id_rank: props.value.id_rank,
          id_manufacturer: props.value.id_manufacturer,
          name: props.value.name,
          linkvideo: props.value.linkvideo,
          describe: props.value.describe,
          price: props.value.price ? props.value.price : null,
          productdetails: props.value.productdetails
            ? props.value.productdetails
            : [{}],
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={[8, 0]}>
          <Col md={12} xs={24}>
            <Form.Item
              label="Danh m???c"
              name="id_category"
              rules={[{ required: true, message: "Ch???n danh m???c!" }]}
            >
              <Select
                showSearch
                size="large"
                placeholder="Ch???n danh m???c"
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
              label="Khuy???n m???i"
              name="id_promotion"
              // rules={[{ required: true, message: "Ch???n khuy???n m???i!" }]}
            >
              <Select
                showSearch
                size="large"
                placeholder="Ch???n khuy???n m???i"
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
              label="Ph??n kh??c"
              name="id_rank"
              rules={[{ required: true, message: "Ch???n ph??n kh??c!" }]}
            >
              <Select
                showSearch
                size="large"
                placeholder="Ch???n rank"
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
                {dataSelectRank?.map((item: any) => (
                  <Option value={item.id} key={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              label="H??ng"
              name="id_manufacturer"
              rules={[{ required: true, message: "Ch???n h??ng!" }]}
            >
              <Select
                showSearch
                size="large"
                placeholder="Ch???n h??ng"
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
                {dataSelectManufacturer?.map((item: any) => (
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
              label="T??n "
              name="name"
              rules={[{ required: true, message: "Nh???p t??n s???n ph???m!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              label="Gi?? b??n"
              name="price"
              // rules={[{ required: true, message: "Nh???p gi??!" }]}
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
          label="M?? t???"
          name="describe"
          // rules={[{ required: true, message: "Nh???p m?? t??? s???n ph???m!" }]}
        >
          <TextArea rows={6} />
        </Form.Item>

        <Form.Item
          label="Link Video"
          name="linkvideo"
          // rules={[{ required: true, message: "Nh???p link video!" }]}
        >
          <Input />
        </Form.Item>
        <h5 style={{ textAlign: "center" }}>Chi ti???t s???n ph???m</h5>

        <Form.List name="productdetails">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Row gutter={[8, 0]}>
                      <Col md={12} xs={24}>
                        <Form.Item
                          name={[index, "title"]}
                          label="Ti??u ?????"
                          rules={[{ required: true, message: "Nh???p ti??u ?????!" }]}
                        >
                          <Input placeholder="Ti??u ?????" />
                        </Form.Item>
                      </Col>
                      <Col md={11} xs={23}>
                        <Form.Item
                          name={[index, "specifications"]}
                          label={`Th??ng s??? k??? thu???t `}
                          rules={[
                            {
                              required: true,
                              message: "Nh???p th??ng s??? k??? thu???t!",
                            },
                          ]}
                        >
                          <Input placeholder="Th??ng s??? k??? thu???t" />
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
        {/* <CkeditorCpn /> */}

        {/* <Form.Item
          wrapperCol={{ offset: props.value?.id > 0 ? 3 : 3, span: 24 }}
        >
          {fileIMG ? (
            // <Image width={100} height={100} src={`http://103.173.155.138:5500/images/${fileIMG}`}/>
            <div className="info_image">
              <Image
                width={150}
                height={150}
                src={
                  fileIMG.split(".").length > 1
                    ? "http://103.173.155.138:5500/images/" + fileIMG
                    : "https://cf.shopee.vn/file/" + fileIMG
                }
              />
              <span className="icon_delete" onClick={deleteIMG}>
                x
              </span>
            </div>
          ) : (
            <div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={onchangeIMG}
                ref={inputRef}
              />
              <Button type="primary" onClick={handleOentFileInput}>
                Th??m ???nh
              </Button>
            </div>
          )}
        </Form.Item> */}
        <h5>???nh ch??nh</h5>

        <Row gutter={[0, 0]}>
          {fileIMG?.map((value: any, idx: any) => {
            if (value.type === "MAIN" || value.type === "1") {
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
                        "http://103.173.155.138:5500/images/" + value.imagename
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
            }

            return;
          })}
        </Row>

        {fileIMG?.find(
          (x: any) => x.type === "1" || x.type === "MAIN"
        ) ? null : (
          <input
            type="file"
            accept="image/*"
            // multiple
            // style={{ display: "none" }}
            onChange={(val) => onchangeIMG(val, "MAIN")}
            // ref={inputRef}
          />
        )}

        <br />

        <h5>???nh ph???</h5>

        <Row gutter={[0, 0]}>
          {fileIMG?.map((value: any, idx: any) => {
            console.log(value);
            if (value.type != "MAIN" && value.type != "1") {
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
                        "http://103.173.155.138:5500/images/" + value.imagename
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
            }

            return;
          })}
        </Row>

        <input
          type="file"
          accept="image/*"
          multiple
          // style={{ display: "none" }}
          onChange={(val) => onchangeIMG(val, "SUB")}
          // ref={inputRef}
        />

        <Form.Item
          wrapperCol={{ offset: props.value?.id > 0 ? 22 : 21, span: 24 }}
        >
          <Button type="primary" htmlType="submit">
            {props.value?.id > 0 ? "S???a" : "Th??m"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalProduct;
