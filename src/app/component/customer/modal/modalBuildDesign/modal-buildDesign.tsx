import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import React, { useEffect } from "react";
import {
  getAllBuildAdmin,
  postAddBuildByIdAdmin,
  postEditBuildByIdAdmin,
} from "../../../../../features/Admin/buildAdmin";
import { getAllCategoryProductAdmin, getAllCategoryTrees } from "../../../../../features/Admin/categoryAdnim";
import {
  getAllManufacturerAdmin,
  postAddManufacturerByIdAdmin,
  postEditManufacturerByIdAdmin,
} from "../../../../../features/Admin/manufacturerAdnim";
import { categoryAdminStore } from "../../../../../use-selector";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

interface propsModalBuildDesign {
  visible: boolean;
  toggle: () => void;
  value: any;
}
function ModalBuildDesign(props: propsModalBuildDesign) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { Option } = Select;
  const categoryproduct = useAppSelector(categoryAdminStore);
  // console.log(props.value);

  useEffect(() => {
    form.resetFields();
    dispatch(getAllCategoryProductAdmin());
  }, [props.value.id]);

  function onFinish(value: any) {
    console.log(value);

    if (props.value.id > 0) {
      // Sửa
      dispatch(
        postEditBuildByIdAdmin({
          id: props.value.id,
          ...value,
        })
      ).then(() => dispatch(getAllBuildAdmin()));
    } else {
      // Thêm
      dispatch(
        postAddBuildByIdAdmin({
          name: value.name,
          ...value,
        })
      ).then(() => dispatch(getAllBuildAdmin()));
    }
  }

  return (
    <Modal
      title={
        props.value?.id > 0 ? "Sửa xây dựng thiết kế" : "Thêm xây dựng thiết kế"
      }
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      okText={"Thêm"}
      cancelText={"Hủy"}
      width={500}
      footer={null}
    >
      <Form
        name="basic"
        form={form}
        layout="vertical"
        // wrapperCol={{ span: 16 }}
        initialValues={{
          name: props.value?.name,
          builddesigns: props.value?.builddesigns,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tên thiết kế"
          name="name"
          rules={[{ required: true, message: "Nhập tên !" }]}
        >
          <Input />
        </Form.Item>
        <h5 style={{ textAlign: "center" }}>Chi tiết thiết kế</h5>
        <Form.List name="builddesigns">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Row gutter={[8, 0]}>
                      <Col md={23} xs={23}>
                        <Form.Item
                          label="Chọn danh mục"
                          name={[index, "id_category"]}
                          rules={[
                            { required: true, message: "Chọn danh mục!" },
                          ]}
                        >
                          <Select
                            showSearch
                            size="large"
                            placeholder="Chọn danh mục"
                            optionFilterProp="children"
                            // onChange={onChange}
                            // onSearch={onSearch}
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
                            {categoryproduct.listcategoryProduct.map((item) => (
                              <Option value={item.id} key={item.id}>
                                {item.name}
                              </Option>
                            ))}
                          </Select>
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

        <Form.Item
          wrapperCol={{
            offset: props.value?.id > 0 ? 21 : 20,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit">
            {props.value?.id > 0 ? "Sửa" : "Thêm"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalBuildDesign;
