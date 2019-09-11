import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Carousel } from "antd";
import IsLoading from "../components/IsLoading";
import "./Mypage.css";
import SERVER_URL from "../config/config";

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        total: 0,
        timecapsule: 0,
        topic: 0
      },
      totalInfo: {
        total: 0,
        topics: 0,
        users: 0
      },
      isLoading: true
    };
  }

  componentDidMount() {
    if (!this.props.data.currentUserId) {
      this.props.history.push("/");
    }
    // fetch에 server/user/article로 변경
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch(`${SERVER_URL}/user/article`, {
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
        const data = {
          total: res.total,
          timecapsule: res.timecapsule,
          topic: res.topic
        };
        this.setState(
          {
            userData: data
          },
          () => {
            "스테이트 변경";
          }
        );
      })
      .catch(err => console.error(err));
    fetch(`${SERVER_URL}/app/info`, {
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
        const data = {
          total: res.total,
          topics: res.topics,
          users: res.users
        };
        this.setState({
          totalInfo: data,
          isLoading: false
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { userData, totalInfo, isLoading } = this.state;
    return isLoading ? (
      <IsLoading />
    ) : (
      <div className="flex-container">
        <div className="my-page">
          <span>마이페이지</span>
        </div>
        <div autoplay>
          <div id="hello-writer-user-div">
            <h2>나는 어때</h2>
            <h3>내가 쓴글 : {userData.total} 개</h3>
            <h3>타임캡슐 : {userData.timecapsule} 개</h3>
            <h3>내가 발행한 주제 : {userData.topic} 개</h3>
          </div>
          <div id="hello-writer-info-div">
            <h2>우리는 어때</h2>
            <h3>전체글 : {totalInfo.total} 개</h3>
            <h3>토픽 : {totalInfo.topics} 개</h3>
            <h3>유저 : {totalInfo.users} 개</h3>
          </div>
        </div>

        <div className="mypage-bottom-bar">
          <Button
            id="mypage-homeBtn"
            size="large"
            onClick={this.changePageHome}
          >
            <Link to="/main">HOME</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Mypage;
