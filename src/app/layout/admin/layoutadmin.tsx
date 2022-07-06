import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { checkTokenAdmin } from "../../../features/Admin/accountAdmin";
import { accountAdminStore } from "../../../use-selector";
import { useAppDispatch, useAppSelector } from "../../hooks";
import CategoryCombo from "../../page/admin/category/categoryCombo";
import CategoryProduct from "../../page/admin/category/categoryProduct";
import Combo from "../../page/admin/Combo/combo";
import CommentAdmin from "../../page/admin/comment/comment";
import Company from "../../page/admin/company/company";
import Dashboard from "../../page/admin/dashboard/dashboard";
import ProductUpdateAdmin from "../../page/admin/dashboard/listProductUpdate";
import Manufacturer from "../../page/admin/manufacturer/manufacturer";
import Promotion from "../../page/admin/promotion/promotion";
import Rank from "../../page/admin/rank/rank";
// import { checkTokenAdmin } from "../../../../features/admin/accountAdmin";
// import { useAppDispatch, useAppSelector } from "../../../commom/hooks";
// import { accountAdminStore } from "../../../commom/use-selector";
// import Category from "../../../page/admin/category/category";
// import CategoryProduct from "../../../page/admin/categoryProduct/category-product";
// import Dashboard from "../../../page/admin/dashboard/dashboard";
// import Promotion from "../../../page/admin/promotion/promotion";
// import WareHouse from "../../../page/admin/wareHouse/ware-house";
import Login from "../../page/Login/login";
import LayoutDashboard from "./layoutdashboard";

function LayoutAdmin() {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  useEffect(() => {
    dispatch(checkTokenAdmin()).catch((err) => {
      history("/loginadmin");
    });
  }, []);

  const acc = useAppSelector(accountAdminStore);
  function PrivateRoute({ children }: any) {
    const auth = acc.token ? true : false;
    return auth ? children : <Navigate to="loginadmin" />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <LayoutDashboard />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/productupdate" element={<ProductUpdateAdmin />} />
        <Route path="/categoryproduct" element={<CategoryProduct />} />
        <Route path="/categorycombo" element={<CategoryCombo />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/company" element={<Company />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="/comment" element={<CommentAdmin />} />
        {/* <Route path="/warehouse" element={<WareHouse />} /> */}
      </Route>

      <Route path="loginadmin" element={<Login />} />
    </Routes>
  );
}

export default LayoutAdmin;
