import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import {Layout} from 'antd';
import {
  Admin, Main, Mypage, MypageArticle, Read, ReadTopic, Signin, Signup, Welcome, Write, WriteTopic,
} from '../pages';
import DropMenu from '../components/DropMenu';
import ExperienceGuage from '../components/ExperienceGuage';
import './App.css';

const {Header, Content} = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWriteTopic: "none"
    }
  }

  changeCurrentWriteTopic = (string) => {
    this.setState({currentWriteTopic: string});
    console.log("주제변경")
  };

  render() {
    return (
        <div className="container">
          <Layout className="App-table">
            <div className="App-table-cell">
              <div className="centerContents">
                <Header className="Header-Box">
                  <DropMenu/>
                  HEADER
                  <ExperienceGuage/>
                </Header>
                <Content className="App-Content">
                  <Switch>
                    <Route exact path="/main" component={Main}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/mypage" component={Mypage}/>
                    <Route exact path="/mypage/Article" component={MypageArticle}/>
                    <Route exact path="/write" component={Write}/>

                    <Route exact path="/write/topic" changeCurrentWriteTopic={this.changeCurrentWriteTopic}
                           render={(props) => <WriteTopic {...props}
                                                          data={{
                                                            email: '222@naver.com',
                                                            nickname: 'JSON아저씨',
                                                            currentWriteTopic: this.state.currentWriteTopic
                                                          }}/>}/>
                    {/*Todo 진짜 데이터가 App에서 관리되면 같은 키값으로 리팩토링해주세요*/}
                    <Route exact path="/read" component={Read}/>
                    <Route exact path="/read/Topic" component={ReadTopic}/>
                    <Route exact path="/mypage/Article" component={MypageArticle}/>
                    <Route exact path="/admin" component={Admin}/>
                    <Route path="/" component={Welcome}/>
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
