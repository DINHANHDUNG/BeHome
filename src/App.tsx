// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutAdmin from './app/layout/admin/layoutadmin';
import LayoutCustomer from './app/layout/customer/layoutCustomer';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Behome Store</title>
        <meta
          name="description"
          content="Chuyên cung cấp thiết bị vệ sinh, thiết bị điện, hệ thống SmartHome, hệ thống Smartlighting với  mong muốn đem đến cho khách hàng những trải nghiệm mua sắm hiện đại và trở thành trung tâm mua sắm các sản phẩm chất lượng"
        />
        <link rel="canonical" href="http://behomestore.vn/" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LayoutCustomer />}></Route>
          <Route path="/admin/*" element={<LayoutAdmin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
