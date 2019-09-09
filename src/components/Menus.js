import React from "react";
import { Menu, Icon, message } from "antd";
import { Link } from "react-router-dom";
import "./DropMenu.css";
import SERVER_URL from "../config/config";

export default function Menus(props) {
  // eslint-disable-next-line react/prop-types
  const { toggleCollapsed, changeCurrentUser } = props;

  const logout = () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch(`${SERVER_URL}/signout`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        accessToken,
        refreshToken
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.success === true) {
          message.success("다음에 또 봐요, 나의 작가님.")
        } else {
          message.warning("아직 접속하지 않으셨어요. 들어오실래요?")
        }
      });
    changeCurrentUser(null);
  };
  console.log(changeCurrentUser)
  return (
    <div>
      <Menu mode="vertical-right" theme="dark">
        <Menu.Item key="1" onClick={toggleCollapsed}>
          <Icon type="home" />
          <span>Home</span>
          <Link to="/main" />
        </Menu.Item>
        <Menu.Item key="2" onClick={toggleCollapsed}>
          <Icon type="user" />
          <span>My Page</span>
          <Link to="/mypage" />
        </Menu.Item>
        <Menu.Item key="3" onClick={toggleCollapsed}>
          <Icon type="form" />
          <span>Write</span>
          <Link to="/write" />
        </Menu.Item>
        <Menu.Item key="4" onClick={toggleCollapsed}>
          <Icon type="read" />
          <span>Read</span>
          <Link to="/read/Topic" />
        </Menu.Item>
        <Menu.Item key="5" onClick={toggleCollapsed}>
          <Icon type="meh" />
          <span>Creator</span>
          <Link to="/creator" />
        </Menu.Item>
        <Menu.Item key="6" onClick={() => logout()}>
          <Icon type="logout" />
          <span>Sign out</span>
          <Link to="/" />
        </Menu.Item>
      </Menu>
    </div>
  );
}
