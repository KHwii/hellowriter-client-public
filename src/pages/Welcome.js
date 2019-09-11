/* eslint-disable no-tabs */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import logo2 from "./img/logo.png";
import { Confirm, Button, Divider, Icon } from "semantic-ui-react";

class Welcome extends Component {
  go(string) {
    this.props.history.push("/" + string);
  }

  render() {
    return (
      <div className="welcomePage">
        <div className="wel-upper-box">
          <img className="wel-image" src={logo2} alt="" />
          <div className="wel-text-box">
            <span className="span_middle">
              은밀한 운명적 글쓰기, Hello Wirter에서 새로운 글의 인연을 만나세요
            </span>
          </div>
        </div>
        <Button.Group
          className="wel-bottom-box"
          style={{
            margin: "auto auto 3em auto",
            padding: "1em 1em 3em 1em"
          }}
        >
          <Button
            color="orange"
            circular
            Inverted
            className="Topic-Button"
            onClick={() => {
              this.go("signup");
            }}
            style={{
              margin: "1em auto 0 auto"
            }}
          >
            Sign up
            <Icon fitted name="sign-in" />
          </Button>
          <Button.Or
            style={{
              margin: "1em 0 auto 0"
            }}
          />
          <Button
            color="yellow"
            circular
            Inverted
            className="Topic-Button"
            onClick={() => {
              this.go("signin");
            }}
            style={{
              margin: "1em auto 0 auto"
            }}
          >
            Sign in
            <Icon fitted name="level up" />
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default Welcome;
