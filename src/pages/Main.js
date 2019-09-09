import React, { Component } from "react";
import { List, Button, Statistic, Icon, message } from "antd";
import SERVER_URL from "../config/config";
import IsLoading from "../components/IsLoading";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotArticleTitle: [0, 1, 2, 3, 4],
      currentStatus: {
        burning: 0,
        timecapsule: 0,
        topicRefCount: 0
      },
      isLoading: true
    };
  }

  componentDidMount() {
    if (!this.props.data.currentUserId) {
      this.props.history.push("/");
    } else {
      const accessToken = JSON.parse(localStorage.getItem("accessToken"));
      const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));

      fetch(`${SERVER_URL}/article/hot`, {
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
          console.log(res);
          console.log(res,"에러가 난 경위");
          let data = undefined
          if ((res.data.length<4 )) {
            data = ["빈공간","빈공간","빈공간","빈공간"];
          } else {
            data = res.data.splice(0, 3);
          }
          this.setState(
            {
              hotArticleTitle: data,
              currentStatus: {
                burning: res.burning,
                timecapsule: res.timecapsule,
                topicRefCount: res.topicRefCount
              },
              isLoading: false
            },
            () => console.log("초기화완료")
          );
        })
        .catch(err => console.error(err));
    }
  }

  goWrite = () => {
    message.success("🐶 속시원한 글 쓰기를 준비중! ", 0.5);
    setTimeout(() => this.props.history.push("/write/topic"), 1000);
  };
  goRead = () => {
    message.success("🦊 속시원한 드립을 읽으러 갑니다. ", 0.5);
    setTimeout(() => this.props.history.push("/read/topic"), 1000);
  };
  render() {
    const { hotArticleTitle, isLoading } = this.state;
    const data = [hotArticleTitle[0], hotArticleTitle[1], hotArticleTitle[2]];
    return isLoading ? (
      <IsLoading />
    ) : (
      <div className="Mina-Containner">
        <div className="Top-Infomation">
          <Statistic
            title="불타는 당신의 글"
            value={this.state.currentStatus.burning}
            prefix={<Icon type="fire" />}
          />
          <Statistic
            title="시간여행 중인 글"
            value={this.state.currentStatus.timecapsule}
            prefix={<Icon type="branches" />}
          />
          <Statistic
            title="이슈 인용 지수"
            value={11}
            prefix={<Icon type="line-chart" />}
          />
        </div>
        <div>
          <Button.Group size="default">
            <Button
              onClick={this.goWrite}
              type="primary"
              loading={this.state.isLoading}
            >
              <Icon type="left" />
              쓰러가기
            </Button>
            <Button
              onClick={this.goRead}
              type="primary"
              loading={this.state.isLoading}
            >
              읽으러가기
              <Icon type="right" />
            </Button>
          </Button.Group>
        </div>
        {/*<h3 style={{ margin: '16px 0' }}></h3>*/}
        <div>오늘의 핫한 글~?</div>
        <List
          size="small"
          // header={}
          // footer={<div style={{ margin: '8px 0' }}>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default Main;
