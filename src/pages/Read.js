/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable quotes */
import React, { Component } from "react";
import { Button } from "antd";

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curArticle: null
    };
  }

  componentDidMount() {
    if (this.props.data.currentReadTopics) {
      const accessToken = JSON.parse(localStorage.getItem("accessToken"));
      const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
      fetch("http://localhost:5000/article/random", {
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
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch("http://localhost:5000/article/random", {
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

  postEvaluation = event => {
    // 클릭한 평가 내용으로 post 요청(읽음 표시)
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch("http://localhost:5000/topics", {
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
      .then(json => console.log(json))
      .catch(err => console.log(err));

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
          <Button onClick={this.postEvaluation}>별로</Button>
          <Button onClick={this.postEvaluation}>그냥</Button>
          <Button onClick={this.postEvaluation}>좋아</Button>
        </div>
      </div>
    );
  }
}

export default Read;
