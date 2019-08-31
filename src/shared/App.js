import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { Admin, Main, Mypage, MypageArticle, Read, ReadTopic, Signin, Signup, Welcome, Write, WriteTopic} from '../pages';

class App extends Component {
  render() {
    return (
        <div>
          This is App /shared/App.js
          <Switch>
            <Route path="/" component={Welcome}/>
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
          </Switch>
        </div>
    );
  }
}
export default App;
