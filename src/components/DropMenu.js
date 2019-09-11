import React from "react";
import { Icon, Menu, message } from "antd";
import { Link } from "react-router-dom";
import SERVER_URL from "../config/config";
const { SubMenu } = Menu;
class DropMenu extends React.Component {
  logout = () => {
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
          message.success("다음에 또 봐요, 나의 작가님.");
        } else {
          message.warning("아직 접속하지 않으셨어요. 들어오실래요?");
        }
      });
    this.props.changeCurrentUser(null);
  };

  render() {
    const { currentUserId } = this.props;
    return (
      <Menu onClick={this.handleClick} mode="horizontal" theme="dark">
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="down-square" style={{ fontSize: "2em" }} />
            </span>
          }
        >
          <Menu.Item key="1">
            <Icon type="home" />
            <span>Home</span>
            <Link to="/main" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span>My Page</span>
            <Link to="/mypage" />
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="form" />
            <span>Write</span>
            <Link to="/write/topic" />
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="read" />
            <span>Read</span>
            <Link to="/read/Topic" />
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="meh" />
            <span>Creator</span>
            <Link to="/creator" />
          </Menu.Item>
          {currentUserId === 1 || currentUserId === 2 || currentUserId === 3 ? (
            <Menu.Item key="7">
              <Icon type="idcard" />
              <span>Admin</span>
              <Link to="/admin" />
            </Menu.Item>
          ) : null}
          <Menu.Item
            key="6"
            onClick={() => {
              this.logout();
            }}
          >
            <Icon type="logout" />
            <span>Sign out</span>
            <Link to="/" />
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default DropMenu;
