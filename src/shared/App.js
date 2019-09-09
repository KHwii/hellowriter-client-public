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
import DropMenu from "../components/DropMenu";
import ExperienceGuage from "../components/ExperienceGuage";
import "./App.css";

const { Header, Content } = Layout;

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
      currentUserId: null,
      isEventTime: false
    };
  }
  changeActivePoint = v => {
    console.log(v,"타입검사")
    let nextPoint = this.state.point + v;
    if (nextPoint > 100) {
      nextPoint = nextPoint - 100;
      this.setState({ point: nextPoint, isEventTime: true });
    }
    this.setState({ point: nextPoint });
  };
  endEvent = () => {
    this.setState({ isEventTime: false }, () => {
      console.log(this.state);
    });
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
      <div className="container">
        <Layout className="App-table">
          <div className="App-table-cell">
            <div className="centerContents">
              <Header style={{ paddingLeft: "5px" }} className="Header-Box">
                <DropMenu />
                <ExperienceGuage
                  isEventTime={this.state.isEventTime}
                  point={this.state.point}
                  endEvent={this.endEvent}
                />
              </Header>
              <Content className="App-Content">
                <Switch>
                  <Route
                    exact
                    path="/main"
                    component={Main}
                    changeCurrentReadTopic={this.changeCurrentReadTopic}
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
                  <Route
                    exact
                    path="/mypage/Article"
                    component={MypageArticle}
                  />
                  <Route
                    exact
                    path="/write"
                    render={props => <Write {...props} changeActivePoint={this.changeActivePoint} data={this.state} />}
                  />
                  <Route
                    exact
                    path="/write/topic"
                    render={props => (
                      <WriteTopic
                        {...props}
                        changeCurrentWriteTopic={this.changeCurrentWriteTopic}
                        data={this.state}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/read"
                    changeCurrentReadTopic={this.changeCurrentReadTopic}
                    render={props => <Read {...props} changeActivePoint={this.changeActivePoint} data={this.state} />}
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
                  <Route
                    exact
                    path="/mypage/Article"
                    component={MypageArticle}
                  />
                  <Route exact path="/admin" component={Admin} />
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/creator" component={Creator} />
                </Switch>
              </Content>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
export default App;
