import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Statistic, Icon, message} from 'antd';
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoading: false}
  }

  goWrite = () => {
    message.success('🐶 속시원한 글 쓰기를 준비중! ',1);
    setTimeout(() => this.props.history.push('/write/topic'), 1500)
  }
  goRead = () => {
    message.success('🦊 속시원한 드립을 읽으러 갑니다. ',1);
    setTimeout(() => this.props.history.push('/read/topic'), 1500)
  }
  render() {
    return (
        <div className="Mina-Containner">
          <div className="Top-Infomation">
            <Statistic title="불타는 중" value={1} prefix={<Icon type="fire"/>}/>
            <Statistic title="시간여행 중" value={3} prefix={<Icon type="branches"/>}/>
            <Statistic title="이슈인용횟수" value={11} prefix={<Icon type="line-chart"/>}/>
          </div>
          <div>
            <Button.Group size="default">
              <Button onClick={this.goWrite} type="primary" loading={this.state.isLoading}>
                <Icon type="left"/>
                쓰러가기
              </Button>
              <Button onClick={this.goRead} type="primary" loading={this.state.isLoading}>
                읽으러가기
                <Icon type="right"/>
              </Button>
            </Button.Group>
          </div>
        </div>
    );
  }
}

export default Main;