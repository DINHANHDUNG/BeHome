import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks';

interface propsModalCategory {
  visible: boolean;
  toggle: () => void;
  toggleFinish: (value: any) => void;
}
function ModalReplyAdmin(props: propsModalCategory) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  //   useEffect(() => {
  //     form.resetFields();
  //   }, [props.value.id]);

  function onFinish(value: any) {
    props.toggleFinish(value);
    // dispatch(
    //     postEditCategoryProductByIdAdmin({
    //       id: props.value.id,
    //       dmsp_name: value.dmsp_name,
    //     })
    //   ).then(() =>
    //     dispatch(
    //       getAllCategoryProductAdmin({
    //         page: props.page,
    //         noitem: props.pageSize,
    //       })
    //     )
    //   );
  }

  return (
    <Modal
      title={'Trả lời comment'}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      okText={'Thêm'}
      cancelText={'Hủy'}
      width={800}
      footer={null}
    >
      <Form
        name="basic"
        form={form}
        // wrapperCol={{ span: 16 }}
        initialValues={{
          contents: '',
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Nội dung"
          name="contents"
          rules={[{ required: true, message: 'Nhập nội dung!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            {'Trả lời'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalReplyAdmin;
