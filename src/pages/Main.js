import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {List, Button, Statistic, Icon, message} from 'antd';
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
    const data = ["1위! 최후의 점멸 댄스", "2위! 이시국씨의 일본맥주 떨이탐험", "2위! 고양이 마켓 후기"];
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
          {/*<h3 style={{ margin: '16px 0' }}></h3>*/}
          <div>오늘의 핫한 글~?</div>
          <List
              size="small"
              // header={}
              // footer={<div style={{ margin: '8px 0' }}>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
    );
  }
}

export default Main;