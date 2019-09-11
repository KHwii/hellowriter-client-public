import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import SERVER_URL from "../config/config";

class ReadTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ["1", "2", "3", "4", "5"]
    };
  }

  componentDidMount() {
    if (!this.props.data.currentUserId) {
      this.props.history.push("/");
    }
    this.getTopics();
  }

  getTopics = () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch(`${SERVER_URL}/tags`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        accessToken,
        refreshToken
      }
    })
      .then(res => res.json())
      .then(json => this.setState({ tags: json }))
      .catch(err => console.log(err));
  };

  goRead = () => {
    this.props.history.push("/read");
  };

  goMain = () => {
    this.props.history.push("/main");
  };

  handleClickEachTag = event => {
    this.props.changeCurrentReadTopic(event.target.innerText);
    this.goRead();
  };

  render() {
    return (
      <div className="App-Content">
        <div id="div-read-tags">
          {this.state.tags
            ? this.state.tags
                .filter(el => el !== "")
                .slice(0, 50)
                .map(tag => {
                  let color = ["yellow", "red", "orange"];
                  let randomNum = Math.floor(Math.random() * 3);
                  return (
                    <Button
                      circular
                      inverted
                      color={color[randomNum]}
                      onClick={this.handleClickEachTag}
                      key={tag}
                    >
                      {tag}
                    </Button>
                  );
                })
            : null}
          <div className="bottom-bar-topic">
            <Button color="yellow" circular onClick={this.goRead}>
              바로보기
            </Button>
            <Button color="orange" circular onClick={this.goMain}>
              뒤로가기
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadTopic;
