import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Statistic, Icon} from 'antd';
class Main extends Component {
  goWrite = () => {

  }
  goRead = () => {

  }
  render() {
    return (
        <div className="Mina-Containner">
          <div className="Top-Infomation">
            <Statistic title="불타는 중" value={100} prefix={<Icon type="fire"/>}/>
            <Statistic title="시간여행 중" value={1128} prefix={<Icon type="branches"/>}/>
            <Statistic title="이슈인용횟수" value={1128} prefix={<Icon type="line-chart"/>}/>
          </div>
          <div>

            <Button.Group size="default">
              <Button type="primary">
                <Icon type="left"/>
                쓰러가기
              </Button>
              <Button type="primary">
                읽으러가기
                <Icon type="right"/>
              </Button>
            </Button.Group>

            <Link className="welcomeBtn" to="/signup">Sign up</Link>
            <Link className="welcomeBtn" to="/signin">Sign in</Link>
          </div>
        </div>
    );
  }
}

export default Main;