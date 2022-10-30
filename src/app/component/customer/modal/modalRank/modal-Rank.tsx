import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';
import {
  getAllManufacturerAdmin,
  postAddManufacturerByIdAdmin,
  postEditManufacturerByIdAdmin,
} from '../../../../../features/Admin/manufacturerAdnim';
import {
  getAllRankAdmin,
  postAddRankByIdAdmin,
  postEditRankByIdAdmin,
} from '../../../../../features/Admin/rankAdnim';
import { useAppDispatch } from '../../../../hooks';

interface propsModalRank {
  visible: boolean;
  toggle: () => void;
  value: any;
  pageSize: number;
  page: number;
}
function ModalRank(props: propsModalRank) {
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
        postEditRankByIdAdmin({
          id: props.value.id,
          name: value.name,
        })
      ).then(() =>
        dispatch(
          getAllRankAdmin({
            id_category: 0,
          })
        )
      );
    } else {
      // Thêm
      dispatch(
        postAddRankByIdAdmin({
          name: value.name,
        })
      ).then(() =>
        dispatch(
          getAllRankAdmin({
            id_category: 0,
          })
        )
      );
    }
  }

  return (
    <Modal
      title={props.value?.id > 0 ? 'Sửa phân khúc' : 'Thêm phân khúc'}
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

export default ModalRank;
