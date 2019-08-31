import {Route} from 'react-router-dom';
import React, { Component } from 'react';
import {Admin, Main, Mypage, MypageArticle, Read, ReadTopic, Signin, Signup, Welcome, Write, WriteTopic,DropMenu, E } from 'src/pages'

class App extends Component {
  render() {
    return (
        <div>
          This is App /shared/App.js

          <Route exact path="/" component={}/>
          <Route exact path="/about" component={About}/>
          <Route eaact path="/about/:name" component={About}/>

        </div>
    );
  }
}
export default App;
