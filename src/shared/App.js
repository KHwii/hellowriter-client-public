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
      point: 77.7
    };
  }

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
                <ExperienceGuage point={this.state.point} />
              </Header>
              <Content className="App-Content">
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
                  <Route
                    exact
                    path="/mypage/Article"
                    component={MypageArticle}
                  />
                  <Route
                    exact
                    path="/write"
                    render={props => <Write {...props} data={this.state} />}
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
                  {/*Todo 진짜 데이터가 App에서 관리되면 같은 키값으로 리팩토링해주세요*/}
                  <Route
                    exact
                    path="/read"
                    changeCurrentReadTopic={this.changeCurrentReadTopic}
                    render={props => <Read {...props} data={this.state} />}
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
                  <Route
                    exact
                    path="/admin"
                    render={props => <Admin {...props} data={this.state} />}
                  />
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
