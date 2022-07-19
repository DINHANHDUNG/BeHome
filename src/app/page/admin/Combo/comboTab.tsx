import { Tabs } from "antd";
import React, { useState } from "react";
import Combo from "./combo";
import ComboNeedUpdate from "./comboneedupdate";
const { TabPane } = Tabs;
function ComboTab() {
  const [key, setKey] = useState("1");
  const onChange = (key: string) => {
    setKey(key);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Combo" key="1">
          {key === "1" ? <Combo /> : null}
        </TabPane>
        <TabPane tab="Combo cần cập nhật" key="2">
          {key === "2" ? <ComboNeedUpdate /> : null}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ComboTab;
