import React, { Component } from "react";
import { Button } from "antd";
import SERVER_URL from "../config/config";

class Admin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.getNotAllowedTopics();
  }

  getNotAllowedTopics = () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch(`${SERVER_URL}/topics/notAllowed`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accessToken,
        refreshToken
      }
    })
      .then(res => res.json())
      .then(json => this.setState({ notAllowedTopics: json }))
      .catch(err => console.log(err));
  };

  allowTopic = event => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch(SERVER_URL + "/topics/confirmAllow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accessToken: accessToken,
        refreshToken: refreshToken
      },
      body: JSON.stringify({
        id: Number(event.target.value)
      })
    })
      .then(res => res.json())
      .then(json => json)
      .catch(err => console.log(err));

    this.getNotAllowedTopics();
  };

  render() {
    return (
      <div className="flex-container">
        <h2>Admin Page</h2>
        <h4>발행 허용 클릭 시 사용자에게 해당 주제가 오픈됩니다</h4>
        {this.state.notAllowedTopics
          ? this.state.notAllowedTopics.map(topic => {
              return (
                <div key={topic.id}>
                  <span>{topic.topic_text}</span>
                  <Button
                    size="small"
                    onClick={this.allowTopic}
                    value={topic.id}
                  >
                    발행 허용
                  </Button>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Admin;
