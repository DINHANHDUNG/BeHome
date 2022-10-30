
import { Drawer, Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import '../../assets/css/Admin/mainadmin.css';
import '../../assets/css/Admin/responsive.css';
import Headeradmin from './headeradmin';
import Sidenav from './sidenav';
// import Sidenav from "./Sidenav";


function LayoutDashboard({ children }: any) {
  const { Header: AntHeader, Content, Sider } = Layout;
  let { pathname } = useLocation();
  pathname = pathname.replace('/', '');
  const [visible, setVisible] = useState(false);
  const [sidenavType, setSidenavType] = useState('transparent');
  const [sidenavColor, setSidenavColor] = useState('#1890ff');
  const openDrawer = () => setVisible(!visible);
 
  return (
    <Layout className="layout-dashboard">
      <Drawer
        title={false}
        placement={'left'}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key={'left'}
        width={250}
        className="drawer-sidebar"
      >
        <Layout className="layout-dashboard">
          <Sider
            trigger={null}
            width={250}
            theme="light"
            className={`sider-primary ant-layout-sider-primary ${
              sidenavType === '#fff' ? 'active-route' : ''
            }`}
            style={{ background: sidenavType }}
          >
            <Sidenav color={sidenavColor} />
          </Sider>
        </Layout>
      </Drawer>

      <Layout>
        <AntHeader style={{ marginBottom: '20px' }}>
          <Headeradmin onPress={openDrawer} name={pathname} subName={pathname} />
        </AntHeader>
        {/* */}

        <Content className="content-ant">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutDashboard;
