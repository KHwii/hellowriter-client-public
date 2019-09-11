import React, { Component } from "react";
import { message, Input, Form } from "antd";
import { Button } from "semantic-ui-react";
import SERVER_URL from "../config/config";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", hidden: true };
  }

  onSubmit = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkpassword = e.target.checkpassword.value;
    const nickname = e.target.nickname.value;
    const userInfo = {};
    userInfo.email = email;
    if (password.length < 8) {
      message.error("비밀번호는 8자리 이상 입력해주세요.");
      return;
    } else if (password !== checkpassword) {
      message.error("비밀번호를 확인해주세요.");
      return;
    } else {
      userInfo.password = password;
    }
    userInfo.nickname = nickname;
    fetch(`${SERVER_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res);
        message.success("회원가입이 완료되었습니다.");
        setTimeout(() => {
          this.props.history.push("/signin");
        }, 1500);
      })
      .catch(error => console.error(error));
  };

  // eslint-disable-next-line react/sort-comp
  checkMail = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const body = JSON.stringify({ email });
    fetch(`${SERVER_URL}/signup/email`, {
      method: "POST",
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      body
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.duplicated === true) {
          message.error("중복된 메일 입니다.!");
          // console.log(res, "res.json() 결과");
        } else if (res.duplicated === false) {
          message.success("메일이 잘생겼네요.");
          // console.log(res, "res.json() 결과");
          this.setState({ hidden: false });
        } else {
          console.log("통신실패");
        }
      })
      .catch(err => console.log(err));
  };

  onChangeEmail = e => {
    this.setState({ email: e.target.value, hidden: true });
  };

  render() {
    return (
      <div className="signUpPage">
        <div>
          <span className="span_middle"> 회원가입 </span>
        </div>
        <Form action="/signup" method="post" onSubmit={this.onSubmit}>
          <div className="mail box">
            {/*<span className="span_middle"> mail </span>*/}
            <Input
              onChange={this.onChangeEmail}
              type="email"
              name="email"
              placeholder="이메일"
              style={{
                width: "50%",
                verticalAlign: "text-top",
                margin: " 0 0.5em"
              }}
            />
            <br />
            <Button
              color="orange"
              circular
              Inverted
              onClick={this.checkMail}
            >
              Check Mail
            </Button>
          </div>
          <div className="box">
            {/*<span className="span_middle"> password </span>*/}
            <Input
              style={{
                width: "50%",
                verticalAlign: "text-top",
                margin: " 0 0.5em"
              }}
              type="password"
              name="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="box">
            {/*<span className="span_middle"> password </span>*/}
            <Input
              type="password"
              name="checkpassword"
              style={{
                width: "50%",
                verticalAlign: "text-top",
                margin: " 0 0.5em"
              }}
              placeholder="비밀번호를 한 번 더 입력해주세요"
            />
          </div>
          <div className="box">
            <Input
              style={{
                width: "50%",
                verticalAlign: "text-top",
                margin: " 0 0.5em"
              }}
              type="text"
              name="nickname"
              placeholder="작가명"
            />
          </div>
          <Button
              color="yellow"
              circular
              Inverted
              style={{ width: "30%"}}
              hidden={this.state.hidden} type="submit" value="회원가입">
               Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
