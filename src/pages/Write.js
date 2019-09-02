import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import {Button, Icon, Input} from 'antd';

const {TextArea} = Input;
class Write extends Component {
  render() {
    return (
        <div className="flex-container">
          <div className="topic-bar">
            <span>{this.props.data.currentWriteTopic}</span>
          </div>
          <div className="write-area-box">
            <TextArea
                placeholder="Autosize height with minimum and maximum number of lines"
                autosize={{ minRows: 2, maxRows: 6 }}
            />
            {console.log(this.props.data, "들어온 데이터")}
          </div>
          <div className="bottom-bar">
            <Button.Group size="large">
              <Button >
                <Icon type="vertical-align-bottom" />
                임시저장
              </Button>
              <Button type="primary">
                <Icon type="forward"/>
                Write now
              </Button>
            </Button.Group>
          </div>
        </div>
    );
  }
}

export default withRouter(Write);
