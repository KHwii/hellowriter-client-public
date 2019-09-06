import React from "react";
import { Menu, Icon, message } from "antd";
import { Link } from "react-router-dom";
import "./DropMenu.css";

export default function Menus(props) {
  const toggleCollapsed = props.toggleCollapsed;

  const logout = () => {
    fetch("http://localhost:5000/signout", {
      method: "GET", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        credentials: "include"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res, "res.json() 결과");
      })
      .catch(err => console.log(err));
  };
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
          <Link to="/read" />
        </Menu.Item>
        <Menu.Item key="5" onClick={toggleCollapsed}>
          <Icon type="meh" />
          <span>Creator</span>
          <Link to="/creator" />
        </Menu.Item>
        <Menu.Item
          key="6"
          onClick={() => {
            logout();
            toggleCollapsed();
          }}
        >
          <Icon type="logout" />
          <span>Sign out</span>
          <Link to="/" />
        </Menu.Item>
      </Menu>
    </div>
  );
}
