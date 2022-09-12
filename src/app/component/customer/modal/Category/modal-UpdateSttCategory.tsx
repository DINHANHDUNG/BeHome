import { Button, Form, Input, Modal, Select,InputNumber } from "antd";
import React, { useEffect } from "react";
import {
  getAllCategoryTrees,
  patchUpdateSttCategoryAdmin,
  postAddCategoryByIdAdmin,
  postEditCategoryByIdAdmin,
} from "../../../../../features/Admin/categoryAdnim";
import { categoryAdminStore } from "../../../../../use-selector";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

interface propsModalUpdateSttCategory {
  visible: boolean;
  toggle: () => void;
  value: {
    id: number;
    id_parent: number;
    name: string;
    name_parent?: any;
    type: "PRODUCT" | "COMBO";
    stt: number,
  };
}
function ModalUpdateSttCategory(props: propsModalUpdateSttCategory) {
  const dispatch = useAppDispatch();
  const { Option } = Select;
  const [form] = Form.useForm();
  useEffect(() => {
    form
      .resetFields
      //   {
      //   categorycode: props.value.categorycode,
      //   name: props.value.name,
      // }
      ();
  }, [props.value.id]);

  function onFinish(value: any) {
    if (props.value.id > 0) {
      // Sửa
      dispatch(
        patchUpdateSttCategoryAdmin({
          id: props.value.id,
          stt: value.stt,
        })
      ).then(() => dispatch(getAllCategoryTrees()));
    } 
    return
  }

  //Select
  const categorys = useAppSelector(categoryAdminStore);
  const valueSelect = categorys.listcategoryProduct;
  console.log(valueSelect);

  return (
    <Modal
      title={"Cập nhật số thứ tự hiển thị"}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      okText={"Thêm"}
      cancelText={"Hủy"}
      width={800}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        form={form}
        // wrapperCol={{ span: 16 }}
        initialValues={{
          name: props.value.name,
          stt: props.value.stt,
          idcategory:
            props.value.id_parent === 0 ? null : props.value.id_parent,
          dmcha: props.value.name_parent,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {props.value.id ? (
          <Form.Item label="Danh mục cha " name="dmcha">
            <Input disabled />
          </Form.Item>
        ) : (
          <Form.Item
            label="Danh mục cha"
            name="idcategory"
            // rules={[{ required: true, message: "Chọn danh mục!" }]}
          >
            <Select
              showSearch
              size="large"
              disabled
              placeholder="Chọn danh mục cha"
              optionFilterProp="children"
              // onChange={onChange}
              // onSearch={onSearch}
              style={{ minWidth: "60px", marginRight: "props.pageSizepx" }}
              filterOption={(input, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA: any, optionB: any) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {valueSelect.map((item: any) => (
                <Option value={item.id} key={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        <Form.Item
          label="Tên "
          name="name"
          
          rules={[{ required: true, message: "Nhập tên danh mục!" }]}
        >
          <Input disabled/>
        </Form.Item>

        <Form.Item
          label="Số thứ tự "
          name="stt"
          
          rules={[{ required: true, message: "Nhập số thứ tự" }]}
        >
          <InputNumber style={{width: "100%"}}/>
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: props.value?.id > 0 ? 21 : 20, span: 24 }}
        >
          <Button type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalUpdateSttCategory;
