import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {Button, Icon, Input} from 'antd';

const ButtonGroup = Button.Group;
const {TextArea} = Input;

class Write extends Component {

  render() {

    return (
        <div className="flex-container">
          <div className="topic-bar">

            <span>{this.props.data.currentWriteTopic}</span>
          </div>
          <div className="write-area-box">
            <TextArea className="write-area" placeholder="엄청나게 보고싶다"/>
          </div>
          <div className="bottom-bar" >
            <ButtonGroup size="large">
              <Button type="dashed" size="large" shape="round">
                <Icon type="vertical-align-bottom" />
                임시저장
              </Button>
              <Button type="primary" size="large" shape="round">
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
