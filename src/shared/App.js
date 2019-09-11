import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Layout } from "antd";
import {
  Admin,
  Main,
  Mypage,
  MypageArticle,
  Read,
  ReadTopic,
  Signin,
  Signup,
  Welcome,
  Write,
  WriteTopic,
  Creator
} from "../pages";
import { DropMenu, ExperienceGuage } from "../components";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReadTopic: null,
      currentWriteTopic: "FAKE_승재님 BLINK DANCE 볼래 안볼래?",
      isCustomIssue: false,
      email: "fakeUser",
      nickname: "fakeNick",
      point: 77,
      currentUserId: 1,
      isEventTime: false,
      writeCount: 0
    };
  }
  handleWriteCounter = () => {
    const prevCount = this.state.writeCount;
    this.setState({ writeCount: prevCount + 1 });
  };
  resetWriteCounter = () => {
    this.setState({ writeCount: 0 });
  };
  endEvent = () => {
    this.setState({ isEventTime: false });
  };
  changeActivePoint = v => {
    let nextPoint = this.state.point + v;
    if (nextPoint > 100) {
      nextPoint = nextPoint - 100;
      this.setState({ point: nextPoint, isEventTime: true });
    }
    this.setState({ point: nextPoint });
  };
  changeCurrentUser = event => {
    this.setState({ currentUserId: event });
  };
  changeCurrentWriteTopic = (string, bool) => {
    this.setState({ currentWriteTopic: string, isCustomIssue: bool }, () => {
      console.log("changed to ", this.state.currentWriteTopic);
    });
  };
  changeCurrentReadTopic = event => {
    this.setState({ currentReadTopic: event });
  };

  render() {
    return (
      <div className="first-container">
        <div className="second-container">
          <div className="Header-Box">
            {this.state.currentUserId ? (
              <>
                <DropMenu
                  changeCurrentUser={this.changeCurrentUser}
                  currentUserId={this.state.currentUserId}
                  data={this.state}
                />
                <ExperienceGuage
                  isEventTime={this.state.isEventTime}
                  point={this.state.point}
                  endEvent={this.endEvent}
                />
              </>
            ) : null}
          </div>
          <div className="App-Content">
            <Switch>
              <Route
                exact
                path="/main"
                render={props => (
                  <Main
                    {...props}
                    data={this.state}
                    changeCurrentReadTopic={this.changeCurrentReadTopic}
                  />
                )}
              />
              <Route
                exact
                path="/signin"
                render={props => (
                  <Signin
                    {...props}
                    changeCurrentUser={this.changeCurrentUser}
                    data={this.state}
                  />
                )}
              />
              <Route exact path="/signup" component={Signup} />
              <Route
                exact
                path="/mypage"
                render={props => <Mypage {...props} data={this.state} />}
              />
              <Route exact path="/mypage/Article" component={MypageArticle} />
              <Route
                exact
                path="/write"
                render={props => (
                  <Write
                    {...props}
                    changeActivePoint={this.changeActivePoint}
                    data={this.state}
                    handleWriteCounter={this.handleWriteCounter}
                  />
                )}
              />
              <Route
                exact
                path="/write/topic"
                render={props => (
                  <WriteTopic
                    {...props}
                    changeCurrentWriteTopic={this.changeCurrentWriteTopic}
                    data={this.state}
                    resetWriteCounter={this.resetWriteCounter}
                  />
                )}
              />
              <Route
                exact
                path="/read"
                changeCurrentReadTopic={this.changeCurrentReadTopic}
                render={props => (
                  <Read
                    {...props}
                    changeActivePoint={this.changeActivePoint}
                    data={this.state}
                  />
                )}
              />
              <Route
                exact
                path="/read/Topic"
                render={props => (
                  <ReadTopic
                    {...props}
                    changeCurrentReadTopic={this.changeCurrentReadTopic}
                    data={this.state}
                  />
                )}
              />
              <Route exact path="/mypage/Article" component={MypageArticle} />
              <Route
                exact
                path="/admin"
                render={props => <Admin {...props} data={this.state} />}
              />
              <Route exact path="/" component={Welcome} />
              <Route exact path="/creator" component={Creator} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
