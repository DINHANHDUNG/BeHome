import { Tabs } from 'antd';
import React, { useState } from 'react';
import Manufacturer from '../manufacturer/manufacturer';
import Promotion from '../promotion/promotion';
import Rank from '../rank/rank';
const { TabPane } = Tabs;
function Configuration() {
  const [key, setKey] = useState('1');
  const onChange = (key: string) => {
    setKey(key);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Phân khúc" key="1">
          {key === '1' ? <Rank /> : null}
        </TabPane>
        <TabPane tab="Hãng sản xuất" key="2">
          {key === '2' ? <Manufacturer /> : null}
        </TabPane>
        <TabPane tab="Khuyến mại" key="3">
          {key === '3' ? <Promotion /> : null}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Configuration;
