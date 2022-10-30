import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';
import {
  getAllManufacturerAdmin,
  postAddManufacturerByIdAdmin,
  postEditManufacturerByIdAdmin,
} from '../../../../../features/Admin/manufacturerAdnim';
import { useAppDispatch } from '../../../../hooks';

interface propsModalManufacturer {
  visible: boolean;
  toggle: () => void;
  value: any;
  pageSize: number;
  page: number;
}
function ModalManufacturer(props: propsModalManufacturer) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  // console.log(props.value);

  useEffect(() => {
    form
      .resetFields
      //   {
      //   categorycode: props.value.categorycode,
      //   categoryname: props.value.categoryname,
      // }
      ();
  }, [props.value.id]);

  function onFinish(value: any) {
    if (props.value.id > 0) {
      // Sửa
      dispatch(
        postEditManufacturerByIdAdmin({
          id: props.value.id,
          name: value.name,
        })
      ).then(() =>
        dispatch(
          getAllManufacturerAdmin({
            id_category: 0,
            page: props.page,
            noitem: props.pageSize,
          })
        )
      );
    } else {
      // Thêm
      dispatch(
        postAddManufacturerByIdAdmin({
          name: value.name,
        })
      ).then(() =>
        dispatch(
          getAllManufacturerAdmin({
            id_category: 0,
            page: props.page,
            noitem: props.pageSize,
          })
        )
      );
    }
  }

  return (
    <Modal
      title={
        props.value?.id > 0
          ? 'Sửa hãng sản xuất'
          : 'Thêm hãng sản xuất'
      }
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      okText={'Thêm'}
      cancelText={'Hủy'}
      width={500}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        form={form}
        // wrapperCol={{ span: 16 }}
        initialValues={{
          name: props.value?.name,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tên "
          name="name"
          rules={[{ required: true, message: 'Nhập tên !' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: props.value?.id > 0 ? 21 : 20,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit">
            {props.value?.id > 0 ? 'Sửa' : 'Thêm'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalManufacturer;
