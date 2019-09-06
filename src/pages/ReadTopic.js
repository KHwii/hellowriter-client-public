import React, { Component } from "react";
import { Button } from "antd";

class ReadTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ["1", "2", "3", "4", "5"]
    };
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch("http://localhost:5000/tags", {
      method: "GET",
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
      <div>
        <div>
          {this.state.tags
            ? this.state.tags.map(tag => {
                return (
                  <Button onClick={this.handleClickEachTag} key={tag}>
                    {tag}
                  </Button>
                );
              })
            : null}
        </div>
        <div>
          <Button onClick={this.goRead}>바로보기</Button>
          <Button onClick={this.goMain}>뒤로가기</Button>
        </div>
      </div>
    );
  }
}

export default ReadTopic;
