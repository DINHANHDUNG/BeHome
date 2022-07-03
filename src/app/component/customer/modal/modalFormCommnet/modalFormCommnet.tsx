import { Button, Form, Input, InputNumber, Modal } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../../../hooks";

interface propsModalFormComment {
  visible: boolean;
  toggle: () => void;
  value: {
    id: number;
    replycomment: string;
  };
}
function ModalFormComment(props: propsModalFormComment) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, [props.value.id]);

  function onFinish(value: any) {
    props.toggle();
    console.log(value);

    console.log(props.value);
  }

  return (
    <Modal
      title={"Nhập thông tin"}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      okText={"Thêm"}
      cancelText={"Hủy"}
      width={1000}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        form={form}
        // wrapperCol={{ span: 16 }}f
        initialValues={{
          name: "",
          email: "",
          numberphone: "",
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Họ tên "
          name="name"
          rules={[{ required: true, message: "Nhập họ tên!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
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

        <Form.Item
          label="Số điện thoại"
          name="numberphone"
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

        <Form.Item
          wrapperCol={{ offset: props.value?.id > 0 ? 21 : 20, span: 24 }}
        >
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalFormComment;
