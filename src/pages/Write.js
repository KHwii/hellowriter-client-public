import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {Button, Icon, Input, message} from 'antd';

const ButtonGroup = Button.Group;
const {TextArea} = Input;

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {text: "", title: ""}
  }

  // super(props) 안해주면 CSS가 엎어지는 현상 발생함. 왜그럴까

  mediateSave = () => {
    message.success('This is a success message');
    console.log("mediateSave 호출!");
    const {email} = this.props.data;
    const body = JSON.stringify({email,});
    fetch('http://localhost:5000/article/',
        {
          method: 'POST',
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        }).then((res) => res.json())
        .then((res) => {
          console.log(res, "res.json() 결과");

        })
        .catch((err) => console.log(err))
  };
  mainSave = () => {
  };

  titleHandle = (e) => {
    this.setState({title: e.target.value})
  };
  textHandle = (e) => {
    this.setState({title: e.target.value})
  };

  render() {
    return (
        <div className="flex-container">
          <div className="topic-bar">
            <span>{this.props.data.currentWriteTopic}</span>
          </div>
          <div className="write-area-box">
            <Input className="title-area" value={this.state.title} placeholder="title" autoFocus='true'
                   onChange={this.titleHandle}/>
            <TextArea className="write-area" value={this.state.text} placeholder="엄청나게 보고싶다"
                      onChange={this.textHandle}/>
          </div>
          <div className="bottom-bar" >
            <ButtonGroup size="large">
              <Button type="dashed" size="large" shape="round" onClick={this.mediateSave}>
                <Icon type="vertical-align-bottom" />
                임시저장
              </Button>
              <Button type="primary" size="large" shape="round" onClick={this.mainSave}>
                <Icon type="forward"/>
                Write now
              </Button>
            </ButtonGroup>
          </div>
        </div>
    );
  }
}

export default withRouter(Write);
