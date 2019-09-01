import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { Admin, Main, Mypage, MypageArticle, Read, ReadTopic, Signin, Signup, Welcome, Write, WriteTopic} from '../pages';
import {Layout} from 'antd';
import DropMenu from '../components/DropMenu';
import ExperienceGuage from '../components/ExperienceGuage';
import './App.css';

const {Header, Content} = Layout;
class App extends Component {
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
                    <Route exact path="/write/Topic" component={WriteTopic}/>
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
