import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import './WriteTopic.css';


class WriteTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTopic: 'test 토픽입니다. fetch 후 받는 토픽으로 대체될거에요',
    };
  }

  getTopic = () => {
    console.log("getTopic호출!");

    const {email, nickname} = this.props.data;
    const body = JSON.stringify({email, nickname});
    fetch('http://localhost:5000/topics/random',
        {
          method: 'POST',
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        }).then((res) => res.json())
        .then((res) => {
          console.log(res,"res.json() 결과");
          this.props.changeCurrentWriteTopic(res);
        })
        .catch((err) => console.log(err))
  };
  goWrite = () => {
    this.props.history.push('/write');
  };

  componentDidMount() {
    this.getTopic();
  }

  render() {
    const ButtonGroup = Button.Group;
    return (
        <div>
          <div className="TopicBox">
            <div className="Topic-TEXT">
              {this.state.curTopic}
            </div>
            <ButtonGroup>
              <Button onClick={this.getTopic}>
                <Icon type="reload"/>
                새로운 주제 받기
              </Button>
              <Button onClick={this.goWrite}
                  type="primary">
                Write Now!
                <Icon type="right"/>
              </Button>
            </ButtonGroup>
          </div>
        </div>
    );
  }
}

export default WriteTopic;