import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row } from 'antd';
import React, { useEffect } from 'react';
import {
  getAllPromotionAdmin,
  postAddPromotionByIdAdmin,
  postEditPromotionByIdAdmin,
} from '../../../../../features/Admin/promotion';
import { useAppDispatch } from '../../../../hooks';
import { EditPromotion } from '../../../../types/promotion';

interface propsModalCategory {
  visible: boolean;
  toggle: () => void;
  value: EditPromotion;
  pageSize: number;
  page: number;
}
function ModalPromotion(props: any) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  console.log(props);

  useEffect(() => {
    form.resetFields();
  }, [props.value.id]);

  function onFinish(value: any) {
    if (props.value.id > 0) {
      // Sửa
      dispatch(
        postEditPromotionByIdAdmin({
          id: props.value.id,
          ...value,
        })
      ).then(() =>
        dispatch(
          getAllPromotionAdmin({
            page: props.page,
            noitem: props.pageSize,
          })
        )
      );
    } else {
      // Thêm
      dispatch(postAddPromotionByIdAdmin(value)).then(() =>
        dispatch(
          getAllPromotionAdmin({
            page: props.page,
            noitem: props.pageSize,
          })
        )
      );
    }
  }

  return (
    <Modal
      title={props.value?.id > 0 ? 'Sửa khuyến mại' : 'Thêm khuyến mại'}
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
        labelCol={{ span: 3 }}
        form={form}
        // wrapperCol={{ span: 16 }}
        initialValues={{
          name: props.value.name,
          promotiondetails: props.value.promotiondetails,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={[24, 24]}>
          <Col span={23}>
            <Form.Item
              label="Tên KM"
              name="name"
              rules={[{ required: true, message: 'Nhập tên khuyến mại!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.List name="promotiondetails">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Form.Item
                      name={[index, 'id']}
                      label="Chi tiết"
                      style={{ display: 'none' }}
                    >
                      <Input placeholder="field name" />
                    </Form.Item>

                    <Row gutter={[8, 0]}>
                      <Col span={23}>
                        <Form.Item
                          name={[index, 'name']}
                          label={`Chi tiết ${index}`}
                          rules={[
                            { required: true, message: 'Nhập tên chi tiết!' },
                          ]}
                        >
                          <Input placeholder="Tên chi tiết" />
                        </Form.Item>
                      </Col>
                      <Col span={1}>
                        {fields.length > 0 ? (
                          <MinusCircleOutlined
                            style={{ fontSize: '20px' }}
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Col>
                    </Row>
                  </div>
                ))}
                <Form.Item>
                  <PlusCircleOutlined
                    onClick={() => add()}
                    style={{
                      fontSize: '20px',
                      float: 'right',
                      marginRight: '25px',
                    }}
                  />
                </Form.Item>
              </div>
            );
          }}
        </Form.List>

        <Form.Item
          wrapperCol={{ offset: props.value?.id > 0 ? 21 : 20, span: 24 }}
        >
          <Button type="primary" htmlType="submit">
            {props.value?.id > 0 ? 'Sửa' : 'Thêm'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalPromotion;
