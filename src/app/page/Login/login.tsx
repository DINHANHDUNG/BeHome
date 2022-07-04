import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postLoginAdmin } from "../../../features/Admin/accountAdmin";
import { accountAdminStore } from "../../../use-selector";
import {
  openNotificationWithIcon,
  useAppDispatch,
  useAppSelector,
} from "../../hooks";
// import { openNotification } from "../../component/Notifi/noti";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { openNotification } from "../../component/Notifi/noti";
// import { postLogin } from "../../features/Customer/account";
import "./login.css";
function Login() {
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const acc = useAppSelector(accountAdminStore);
  // console.log(acc);

  useEffect(() => {
    if (localStorage.getItem("tokenadmin")) {
      history("/admin");
    }
  }, [acc.token]);

  const [username, setUsername] = useState(String);
  const [password, setPassword] = useState(String);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      submit();
    }
  };

  function submit() {
    console.log(username, password);
    if (username.length > 0 && password.length > 0) {
      dispatch(
        postLoginAdmin({
          username,
          password,
        })
      );
    } else {
      openNotificationWithIcon("warning", "Vui lòng điền username và password");
    }
  }
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            name=""
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name=""
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <label>Password</label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="#" onClick={submit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            SIGNIN
          </a>

          <Link to="/register">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
