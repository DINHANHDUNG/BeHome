import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useEffect } from 'react';
import {
  getAllCategoryTrees,
  postAddCategoryByIdAdmin,
} from '../../../../../features/Admin/categoryAdnim';
import { categoryAdminStore } from '../../../../../use-selector';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

interface propsModalCategory {
  visible: boolean;
  toggle: () => void;
  value: {
    id: number;
    id_parent: number;
    name: string;
    type: 'PRODUCT' | 'COMBO';
  };
}
function ModalCategory2(props: propsModalCategory) {
  console.log(props);

  const dispatch = useAppDispatch();
  const { Option } = Select;
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, [props.value.id]);

  function onFinish(value: any) {
    // Thêm
    dispatch(
      postAddCategoryByIdAdmin({
        id_parent: props.value.id ? props.value.id : null,
        name: value.name,
        type: props.value.type,
      })
    ).then(() => {
      dispatch(getAllCategoryTrees());
      props.toggle();
    });
  }

  //Select
  const categorys = useAppSelector(categoryAdminStore);
  const valueSelect = categorys.listcategoryProduct;
  console.log(valueSelect);

  return (
    <Modal
      title={'Thêm danh mục'}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      okText={'Thêm'}
      cancelText={'Hủy'}
      width={1000}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        form={form}
        // wrapperCol={{ span: 16 }}
        initialValues={{
          name: '',
          dmcha: props.value.name,
          idcategory: props.value.id_parent,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Danh mục cha " name="dmcha">
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Tên danh mục: "
          name="name"
          rules={[{ required: true, message: 'Nhập tên danh mục!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: props.value?.id > 0 ? 21 : 20, span: 24 }}
        >
          <Button type="primary" htmlType="submit">
            {'Thêm'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalCategory2;
