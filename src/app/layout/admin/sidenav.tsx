// import { useState } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
// import logo from "../../assets/images/logo.png";

function Sidenav({ color }: any) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");
  //   const permission = useAppSelector(accountAdminStore);
  console.log(page);

  const dashboard = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill={color}
      ></path>
      <path
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill={color}
      ></path>
      <path
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const Category = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const profile = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const LogOut = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="mdi-logout"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
    </svg>,
  ];

  const order = [
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <title>Artboard 25</title>
      <path d="M23,6a.8.8,0,0,0-.06-.3.64.64,0,0,0,0-.07s0,0,0,0l-2-4A1,1,0,0,0,20,1H3a1,1,0,0,0-1,.76l-1,4a.34.34,0,0,0,0,.1A.7.7,0,0,0,1,6V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V6S23,6,23,6ZM3.78,3h15.6l1,2H3.28ZM21,21H3V7H21Z" />
      <path d="M11.45,18.83a1,1,0,0,0,1.1,0l3-2a1,1,0,1,0-1.1-1.66l-1.45,1V10a1,1,0,0,0-2,0v6.13l-1.45-1a1,1,0,0,0-1.1,1.66Z" />
    </svg>,
  ];

  const product = [
    <svg
      id="Layer_1"
      data-name="Layer 1"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>Artboard 25</title>
      <path d="M23,6a.8.8,0,0,0-.06-.3.64.64,0,0,0,0-.07s0,0,0,0l-2-4A1,1,0,0,0,20,1H3a1,1,0,0,0-1,.76l-1,4a.34.34,0,0,0,0,.1A.7.7,0,0,0,1,6V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V6S23,6,23,6ZM3.78,3h15.6l1,2H3.28ZM21,21H3V7H21Z" />
      <path d="M11.45,18.83a1,1,0,0,0,1.1,0l3-2a1,1,0,1,0-1.1-1.66l-1.45,1V10a1,1,0,0,0-2,0v6.13l-1.45-1a1,1,0,0,0-1.1,1.66Z" />
    </svg>,
  ];
  const dispatch = useAppDispatch();

  const router = [
    {
      path: "/",
      pathname: "Sản phẩm",
      key: "1",
    },
    {
      path: "/category",
      pathname: "Danh mục",
      key: "2",
    },
    {
      path: "/rank",
      pathname: "Rank",
      key: "3",
    },
    {
      path: "/manufacturer",
      pathname: "Hãng sản xuất",
      key: "4",
    },
    {
      path: "/promotion",
      pathname: "Khuyến mãi",
      key: "5",
    },
  ];

  return (
    <>
      <div className="brand-admin">
        {/* <img src={logo} alt="" /> */}
        <span style={{ fontWeight: "600" }}> Admin</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/admin/">
            <span
              className="icon"
              style={{
                background: page === "admin" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Sản phẩm</span>
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="10">
          <NavLink to="/admin/productupdate">
            <span
              className="icon"
              style={{
                background: page === "admin/productupdate" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Sản phẩm cập nhật</span>
          </NavLink>
        </Menu.Item> */}
        <Menu.Item key="10">
          <NavLink to="/admin/builddesign">
            <span
              className="icon"
              style={{
                background: page === "admin/builddesign" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Xây dựng thiết kế</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/admin/categoryproduct">
            <span
              className="icon"
              style={{
                background: page === "admin/categoryproduct" ? color : "",
              }}
            >
              {Category}
            </span>
            <span className="label">Danh mục bán lẻ</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="6">
          <NavLink to="/admin/categorycombo">
            <span
              className="icon"
              style={{
                background: page === "admin/categorycombo" ? color : "",
              }}
            >
              {Category}
            </span>
            <span className="label">Danh mục combo</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="3">
          <NavLink to="/admin/rank">
            <span
              className="icon"
              style={{
                background: page === "admin/rank" ? color : "",
              }}
            >
              {Category}
            </span>
            <span className="label">Rank</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="4">
          <NavLink to="/admin/manufacturer">
            <span
              className="icon"
              style={{
                background: page === "admin/manufacturer" ? color : "",
              }}
            >
              {Category}
            </span>
            <span className="label">Hãng sản xuất</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/admin/promotion">
            <span
              className="icon"
              style={{
                background: page === "admin/promotion" ? color : "",
              }}
            >
              {Category}
            </span>
            <span className="label">Khuyến mại</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="7">
          <NavLink to="/admin/company">
            <span
              className="icon"
              style={{
                background: page === "admin/company" ? color : "",
              }}
            >
              {Category}
            </span>
            <span className="label">Công ty</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="8">
          <NavLink to="/admin/combo">
            <span
              className="icon"
              style={{
                background: page === "admin/combo" ? color : "",
              }}
            >
              {Category}
            </span>
            <span className="label">Combo</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="9">
          <NavLink to="/admin/comment">
            <span
              className="icon"
              style={{
                background: page === "admin/comment" ? color : "",
              }}
            >
              {Category}
            </span>
            <span className="label">Comment</span>
          </NavLink>
        </Menu.Item>

        {/* 10 */}
      </Menu>
    </>
  );
}

export default Sidenav;
