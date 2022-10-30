import { Tabs } from 'antd';
import React, { useState } from 'react';
import OrderCancel from './orderCancel';
import OrderCompalete from './orderComplete';
import OrderWaitForPay from './orderWaitForPay';
const { TabPane } = Tabs;
function OrderAdmin() {
  const [key, setKey] = useState('1');
  const onChange = (key: string) => {
    setKey(key);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Đơn hàng chờ thanh toán" key="1">
          {key === '1' ? <OrderWaitForPay /> : null}
        </TabPane>
        <TabPane tab="Đơn hàng đã hoàn thành" key="2">
          {key === '2' ? <OrderCompalete /> : null}
        </TabPane>
        <TabPane tab="Đơn hàng đã hủy" key="3">
          {key === '3' ? <OrderCancel /> : null}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default OrderAdmin;
