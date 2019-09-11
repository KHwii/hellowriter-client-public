import React, { Component } from "react";
import { Button } from "antd";
import SERVER_URL from "../config/config";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!this.props.data.currentUserId) {
      this.props.history.push("/");
    }
    this.getNotAllowedTopics();
  }

  getNotAllowedTopics = () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch(`${SERVER_URL}/topics/notAllowed`, {
      method: "GET",
      credentials: "include",
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
      credentials: "include",
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

    setTimeout(this.getNotAllowedTopics, 500);
  };

  render() {
    console.log(this.props.data);
    return (
      <div className="flex-container">
        <h2>Admin Page</h2>
        <div>클릭시 해당 주제가 사용자에게 공개됩니다.</div>
        <br />
        {this.state.notAllowedTopics
          ? this.state.notAllowedTopics.map(topic => {
              return (
                <div key={topic.id}>
                  <h3 className="allow-text">{topic.topic_text}</h3>
                  <Button
                    size="small"
                    onClick={this.allowTopic}
                    value={topic.id}
                    className="allow-btn"
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
