import { Button, Form, Input, InputNumber, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../hooks";

interface propsModalFormComment {
  visible: boolean;
  toggle: () => void;
  toggleValue: (value: any) => void;
  // value: {
  //   id: number;
  //   replycomment: string;
  // };
}
function ModalFormComment(props: propsModalFormComment) {
  const [infoCus, setInfoCus] = useState({} as any);
  // var retrievedObject = localStorage.getItem("InfoCustomer") as any;
  console.log(infoCus);

  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
    if (localStorage.getItem("InfoCustomer")) {
      setInfoCus(JSON.parse(localStorage.getItem("InfoCustomer") || "{}"));
    }
  }, [props.visible]);

  // console.log("retrievedObject: ", JSON.parse(retrievedObject));

  function onFinish(value: any) {
    props.toggle();
    props.toggleValue(value);
    localStorage.setItem("InfoCustomer", JSON.stringify(value));
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
          namecustomer: infoCus?.namecustomer,
          addresscustomer: infoCus?.addresscustomer,
          phonenumbercustomer: infoCus?.phonenumbercustomer,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Họ tên "
          name="namecustomer"
          rules={[{ required: true, message: "Nhập họ tên!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="addresscustomer"
          name="addresscustomer"
          rules={[{ required: true, message: "Nhập địa chỉ!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phonenumbercustomer"
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

        <Form.Item wrapperCol={{ offset: 20, span: 24 }}>
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalFormComment;
