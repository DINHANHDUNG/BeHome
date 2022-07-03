// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutCustomer from "./app/layout/customer/layoutCustomer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LayoutCustomer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
