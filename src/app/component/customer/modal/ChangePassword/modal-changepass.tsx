import { Button, Form, Input, Modal } from "antd";
import React from "react";

interface propsModalChangePass {
  visible: boolean;
  toggle: () => void;
  toggleChangePass: (value: {
    newpassword: String;
    oldpassword: String;
  }) => void;
}
function ModalChangePass(props: propsModalChangePass) {
  const [form] = Form.useForm();

  function onFinish(value: { newpassword: String; oldpassword: String }) {
    //Đổi pass
    props.toggleChangePass(value);
  }

  return (
    <Modal
      title={"Đổi mật khẩu"}
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
        layout="vertical"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Mật khẩu cũ"
          name="oldpassword"
          rules={[{ required: true, message: "Nhập mật khẩu cũ!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu mới"
          name="newpassword"
          rules={[{ required: true, message: "Nhập mật khẩu mới!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
        // wrapperCol={{ offset: 19, span: 24 }}
        >
          <Button type="primary" htmlType="submit" style={{ float: "right" }}>
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalChangePass;
