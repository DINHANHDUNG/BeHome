// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutAdmin from "./app/layout/admin/layoutadmin";
import LayoutCustomer from "./app/layout/customer/layoutCustomer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LayoutCustomer />}></Route>
        <Route path="/admin/*" element={<LayoutAdmin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
