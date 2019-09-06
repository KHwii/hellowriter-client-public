import React, { Component } from "react";
import { Button } from "antd";
import { Input } from "semantic-ui-react";
import SERVER_URL from "../config/config";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goWelcome = () => {
    this.props.history.push("/welcome");
  };

  goSignIn = () => {
    this.props.history.push("/signup");
  };

  goMain = () => {
    this.props.history.push("/main");
  };

  toLongIn = () => {
    let id = document.body.querySelector("#email-input").value;
    let password = document.body.querySelector("#password-input").value;
    const body = JSON.stringify({ email: id,  password:password });
    if (id && password) {
      fetch(`${SERVER_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body
      })
        .then(res => res.json())
        .then(json => {
          // db에서 해당 유저 데이터가 있을 경우 response에 userid를 id 키에 매칭하여 전달한다는 가정 하 진행
          const accessToken = json.accessToken;
          const refreshToken = json.refreshToken;
          localStorage.setItem("accessToken", JSON.stringify(accessToken));
          localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
          console.log("응답: ", json);
          if (json.id !== undefined) {
            this.props.changeCurrentUser(json);
            this.goMain();
          } else {
            alert("가입 내용이 없습니다");
          }
        })
        .catch(err => console.log(err))
        // post 요청 후 해당 유저의 id 값을 받아와서 app 에 state 변경 후 다음 페이지로 이동

        .catch(err => console.log(err));
    } else {
      alert("이메일과 비밀번호를 모두 입력 해 주세요");
    }
  };

  render() {
    return (
      <div>
        <div>로그인</div>
        <div>
          <span>이메일 : </span>
          <Input id="email-input" />
        </div>
        <div>
          <span>비밀번호 : </span>
          <Input id="password-input" type="password" />
        </div>
        <div>
          <Button onClick={this.toLongIn}>로그인하기</Button>
        </div>
        <div>
          <Button onClick={this.goSignIn}>가입하기</Button>
          <Button onClick={this.goWelcome}>뒤로가기</Button>
        </div>
      </div>
    );
  }
}

export default Signin;
