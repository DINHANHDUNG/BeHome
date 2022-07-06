import { Tabs } from "antd";
import React, { useState } from "react";
import Dashboard from "./dashboard";
import ProductUpdateAdmin from "./listProductUpdate";
const { TabPane } = Tabs;
function Dashboard2() {
  const [key, setKey] = useState("1");
  const onChange = (key: string) => {
    setKey(key);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Sản phẩm" key="1">
          {key === "1" ? <Dashboard /> : null}
        </TabPane>
        <TabPane tab="Sản phẩm cần cập nhật" key="2">
          {key === "2" ? <ProductUpdateAdmin /> : null}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Dashboard2;
