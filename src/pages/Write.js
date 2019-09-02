import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {Button, Icon} from 'antd';

const {ButtonGroup} = Button;
class Write extends Component {
  render() {
    return (
        <div className="flex-container">
          <div className="topic-bar">
            <span>{this.props.data.currentWriteTopic}</span>
          </div>
          <div className="write-area">
            "안녕"
            {console.log(this.props.data, "들어온 데이터")}
          </div>
          <div className="bottom-bar">
            <ButtonGroup size='large'>
              <Button onClick={this.getTopic}>
                <Icon type="reload"/>
                Write now
              </Button>
              <Button onClick={this.goWrite}
                      type="primary">
                임시저장
                <Icon type="right"/>
              </Button>
            </ButtonGroup>
          </div>
        </div>
    );
  }
}

export default withRouter(Write);
