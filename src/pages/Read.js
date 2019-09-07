/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable quotes */
import React, { Component } from "react";
import { Button, message } from "antd";
import SERVER_URL from "../config/config";

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curArticle: null,
      loading: false
    };
  }

  componentDidMount() {
    if (this.props.data.currentReadTopics) {
      const accessToken = JSON.parse(localStorage.getItem("accessToken"));
      const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
      fetch(`${SERVER_URL}/article/random`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          accessToken,
          refreshToken
        },
        body: {
          topic: this.props.data.currentReadTopics
        }
      })
        .then(res => res.json())
        .then(json => this.setState({ curArticle: json }))
        .catch(err => console.log(err));
    } else {
      this.getArticle();
    }
  }

  getArticle = () => {
    console.log("제로 1")
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch(`${SERVER_URL}/article/random`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        accessToken,
        refreshToken
      }
    })
      .then(res => res.json())
      .then(json => this.setState({ curArticle: json }))
      .catch(err => console.log(err));
  };

  postEvaluation = async event => {
    this.setState({ loading: true });
    // 클릭한 평가 내용으로 post 요청(읽음 표시)
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    let result = await fetch(`${SERVER_URL}/read`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        accessToken,
        refreshToken
      },
      body: JSON.stringify({
        article_id: this.state.curArticle.id,
        user_id: this.props.data.currentUserId,
        rating: event.target.innerText
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        console.log("오나?");
        this.setState({ loading: false }, () => {
          message.success("당신의 평가를 고이고이 접어 보관했습니다. 📦");
          console.log("오나?");
        });
      })
      .catch(err => console.log(err, "프로미스 에러 "));
    console.log("1단");
    this.getArticle();
  };

  render() {
    return (
      <div>
        <div id="render-article-div">
          {this.state.curArticle
            ? this.state.curArticle.article_text
            : "article 미 선택"}
        </div>
        <div>
          <Button loading={this.state.loading} onClick={this.postEvaluation}>
            별로
          </Button>
          <Button loading={this.state.loading} onClick={this.postEvaluation}>
            그냥
          </Button>
          <Button loading={this.state.loading} onClick={this.postEvaluation}>
            좋아
          </Button>
        </div>
      </div>
    );
  }
}

export default Read;
