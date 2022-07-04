import { Badge, Button, Col, Dropdown, List, Row, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutOutlined, UnlockOutlined } from "@ant-design/icons";
// import { profile, toggler } from "../../../assets/icon/iconsvg";
// import {
//   ChangePassAdmin,
//   postLogoutAdmin,
// } from "../../../../features/admin/accountAdmin";
// import { useDispatch } from "react-redux";
// import { useAppSelector } from "../../../commom/hooks";
// import { accountAdminStore } from "../../../commom/use-selector";
import ModalChangePass from "../../component/customer/modal/ChangePassword/modal-changepass";
import { profile, toggler } from "../../assets/icon/iconsvg";
import { ChangePassAdmin, postLogoutAdmin } from "../../../features/Admin/accountAdmin";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { accountAdminStore } from "../../../use-selector";
function Headeradmin({ placement, name, subName, onPress }: any) {
  const dispatch = useAppDispatch();
  const { Title, Text } = Typography;
  const [visible, setVisible] = useState(false);
  const acc = useAppSelector(accountAdminStore);
  const datause = [
    {
      title: "Đổi mật khẩu",
      avatar: <UnlockOutlined style={{ color: "#000" }} />,
    },
    {
      title: "Đăng xuất",
      avatar: <LogoutOutlined style={{ color: "#000" }} />,
    },
  ];
  const menuuse = (
    <List
      min-width="100%"
      className="header-notifications-dropdown"
      itemLayout="horizontal"
      dataSource={datause}
      renderItem={(item, idx) => (
        <List.Item
          key={idx}
          onClick={() => {
            console.log(item.title);
            if (item.title === "Đăng xuất") {
              dispatch(postLogoutAdmin());
            }

            if (item.title === "Đổi mật khẩu") {
              setVisible(true);
            }
          }}
        >
          <List.Item style={{ cursor: "pointer" }}>
            <Typography.Text style={{ marginRight: "10px" }}>
              {item.avatar}{" "}
            </Typography.Text>{" "}
            {item.title}
          </List.Item>
        </List.Item>
      )}
    />
  );
  return (
    <div>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          {/* <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{name?.replace("/", "")}</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="ant-page-header-heading">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                type="link"
                className="sidebar-toggler"
                onClick={() => onPress()}
                style={{ marginRight: "0px" }}
              >
                {toggler}
              </Button>
              <Link
                to="/admin"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "#000",
                  fontWeight: "bold",
                  paddingTop: "5px",
                }}
              >
                <span>BEHOME</span>
              </Link>
            </div>
          </div>
        </Col>

        <Col span={24} md={18} className="header-control">
          <Dropdown overlay={menuuse} trigger={["click"]}>
            <Link to="#" className="btn-sign-in">
              {profile}
              <span>{"Admin"}</span>
            </Link>
          </Dropdown>
        </Col>
      </Row>

      <ModalChangePass
        visible={visible}
        toggle={() => {
          setVisible(false);
        }}
        toggleChangePass={(value: {
          newpassword: String;
          oldpassword: String;
        }) => {
          console.log(value);
          dispatch(
            ChangePassAdmin({
              id: Number(acc.listuser.id),
              oldpassword: value.oldpassword.toString(),
              newpassword: value.newpassword.toString(),
            })
          );
        }}
      />
    </div>
  );
}

export default Headeradmin;
