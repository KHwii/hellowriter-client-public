import React, { Component } from "react";
import { Icon, Spin, Input, message } from "antd";
import { Confirm, Button, Dimmer, Loader, Image } from "semantic-ui-react";
import SERVER_URL from "../config/config";
import { IsLoading } from "../components";

import { Icon as semanticIcon } from "semantic-ui-react";

const { TextArea } = Input;
const antIcon = <Icon type="loading" style={{ fontSize: 96 }} spin />;

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burnDate: "",
      publish: "",
      timeCapDate: "",
      title: "",
      text: "",
      phaseOneBool: false,
      phaseTwoBool: false,
      phaseThreeBool: false,
      phaseFourBool: false
    };
  }

  componentDidMount() {
    if (!this.props.data.currentUserId) {
      this.props.history.push("/");
    }
  }

  mediateSave = () => {
    const { email } = this.props.data;
    const { title, text } = this.state;
    const body = JSON.stringify({ email, title, text });
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    fetch(`${SERVER_URL}/stash/`, {
      method: "POST",
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        accessToken,
        refreshToken
      },
      body
    })
      .then(res => res.json())
      .then(res => {
        message.success("Save success!");
        console.log(res, "res.json() 결과");
      })
      .catch(err => console.log(err));
  };
  titleHandle = e => {
    this.setState({ title: e.target.value });
  };
  textHandle = e => {
    this.setState({ text: e.target.value });
  };
  mainSave = () => {
    this.phaseOnePop();
  };
  phaseOneHandle = value => {
    this.setState({
      burnDate: new Date().setSeconds(value),
      phaseTwoBool: true
    });
  };
  phaseTwoHandle = value => {
    this.setState({ publish: value, phaseThreeBool: true });
  };
  phaseThreeHandle = value => {
    this.props.handleWriteCounter();
    this.setState(
      {
        timeCapDate: new Date().setSeconds(value),
        phaseFourBool: true,
        phaseOneBool: false,
        phaseTwoBool: false,
        phaseThreeBool: false
      },
      () => {
        const { burnDate, publish, timeCapDate, title, text } = this.state;
        const {
          currentUserId,
          currentWriteTopic,
          isCustomIssue
        } = this.props.data;
        const body = JSON.stringify({
          currentUserId,
          title,
          text,
          burnDate,
          publish,
          will_public_at: timeCapDate,
          isCustomIssue,
          topic_text: currentWriteTopic
        });
        const accessToken = JSON.parse(localStorage.getItem("accessToken"));
        const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
        fetch(`${SERVER_URL}/article`, {
          method: "POST", // include, *same-origin, omit
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            accessToken,
            refreshToken
          },
          body
        })
          .then(res => res.json())
          .then(res => {
            setTimeout(() => {
              this.setState({ phaseFourBool: false }, () => {
                message.success(
                  "비바람이 몰아치는 가운데 당신의 기록이 어딘가에 남았어요! 🙊"
                );
                this.props.changeActivePoint(30);
                setTimeout(() => this.props.history.push("/write/topic"), 0);
              });
            }, 3000);
          })
          .catch(err => console.log(err));
      }
    );
  };
  phaseOnePop = () => this.setState({ phaseOneBool: true });

  closePop = () =>
    this.setState({
      phaseOneBool: false,
      phaseTwoBool: false,
      phaseThreeBool: false
    });

  render() {
    if (!this.state.phaseFourBool) {
      return (
        <div className="flex-container">
          <div className="topic-bar">
            <h4 className="center-string">
              {this.props.data.currentWriteTopic}
            </h4>
          </div>
          <div className="write-area-box">
            <Input
              style={{
                display: "flex",
                flex: "0 1",
                color: "white",
                "font-size": "1.5em",
                background: "rgba(170,156,145,0.62)"
              }}
              className="title-area"
              value={this.state.title}
              placeholder="title"
              autoFocus={true}
              onChange={this.titleHandle}
            />
            <TextArea
              style={{
                display: "flex",
                flex: "1",
                color: "white",
                "font-size": "1.2em",
                margin: "0.5em 0 0.5em 0",
                background: "rgba(170,156,145,0.4)"
              }}
              className="write-area"
              value={this.state.text}
              placeholder="엄청나게 보고싶다"
              onChange={this.textHandle}
            />
          </div>
          <div className="bottom-bar">
            <Button.Group
              size="medium"
              style={{
                display:"flex",
                flex: 1
              }}
            >
              <Button
                style={{
                  flex: 1
                }}
                circular
                inverted
                onClick={this.mediateSave}
              >
                <semanticIcon name="arichive" />
                임시저장
              </Button>
              <Button.Or
                style={{
                  margin: "auto 0 auto 0"
                }}
              />
              <Button
                style={{
                  flex: 1
                }}
                circular
                inverted
                color="red"
                onClick={this.mainSave}
              >
                <semanticIcon name="level up" />
                Write now
              </Button>
            </Button.Group>
          </div>
          <Confirm
            className={"confirmPhaseBurn"}
            header="헬로라이트의 글에는 생명이 있습니다. 이 글은 언제 사라질까요?"
            content={
              <Button.Group
                className="confirmPhaseBurnButtonGroup"
                size="large"
              >
                <Button
                  onClick={() => this.phaseOneHandle(3600)}
                  inverted
                  color="olive"
                >
                  한시간
                </Button>
                <Button
                  onClick={() => this.phaseOneHandle(86400)}
                  inverted
                  color="yellow"
                >
                  하루
                </Button>
                <Button
                  onClick={() => this.phaseOneHandle(2592000)}
                  inverted
                  color="orange"
                >
                  한달
                </Button>
                <Button
                  onClick={() => this.phaseOneHandle(31536000000)}
                  inverted
                  color="red"
                >
                  천년
                </Button>
              </Button.Group>
            }
            open={this.state.phaseOneBool}
            close={String(this.state.phaseTwoBool)}
          />
          <Confirm
            className={"confirmPhaseBurn"}
            header="이 세상에 몇명만 아는 비밀을 만들어보세요."
            content={
              <Button.Group
                className="confirmPhaseBurnButtonGroup"
                size="large"
              >
                <Button
                  onClick={() => this.phaseTwoHandle("private")}
                  inverted
                  color="olive"
                >
                  비공개
                </Button>
                <Button
                  onClick={() => this.phaseTwoHandle("half")}
                  inverted
                  color="yellow"
                >
                  한정판 공개
                </Button>
                <Button
                  onClick={() => this.phaseTwoHandle("public")}
                  inverted
                  color="orange"
                >
                  공개
                </Button>
              </Button.Group>
            }
            open={this.state.phaseTwoBool}
            close={String(this.state.phaseTwoBool)}
          />
          <Confirm
            className={"confirmPhaseBurn"}
            header="이글이 타임머신을 타고 미래에 공개된다면 어떨까요?"
            content={
              <Button.Group className="confirmPhaseBurnButtonGroup">
                <Button
                  onClick={() => this.phaseThreeHandle(31536000000)}
                  inverted
                  color="orange"
                  style={{
                    padding: "0.75em 1em 0.75em 1em"
                  }}
                >
                  천년뒤에?
                </Button>
                <Button
                  onClick={() => this.phaseThreeHandle(2592000)}
                  inverted
                  color="orange"
                  style={{
                    padding: "0.75em 1em 0.75em 1em"
                  }}
                >
                  한달뒤에?
                </Button>
                <Button
                  onClick={() => this.phaseThreeHandle(86400)}
                  inverted
                  color="yellow"
                  style={{
                    padding: "0.75em 1em 0.75em 1em"
                  }}
                >
                  하루뒤에?
                </Button>
                <Button
                  onClick={() => this.phaseThreeHandle(0)}
                  inverted
                  color="olive"
                  style={{
                    padding: "0.75em 1em 0.75em 1em"
                  }}
                >
                  NOW
                </Button>
              </Button.Group>
            }
            open={this.state.phaseThreeBool}
            close={String(this.state.phaseThreeBool)}
          />
        </div>
      );
    } else {
      return (
        <div className="Load-outer">
          <Spin
            wrapperClassName="loader-child"
            indicator={antIcon}
            tip="당신의 향기를 기록중~"
          />
        </div>
      );
    }
  }
}

export default Write;
