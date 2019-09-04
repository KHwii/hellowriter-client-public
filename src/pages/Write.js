import React, {Component} from 'react';
import {Icon, Input, message} from 'antd';
import {Confirm, Button, Dimmer, Loader, Image, Segment} from 'semantic-ui-react'

const {TextArea} = Input;

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burnDate: "",
      publish: "",
      timeCapDate: "",
      title: "",
      text: "",
      phaseOneBool: false,
      phaseTwoBool: false,
      phaseThreeBool: false,
      phaseFourBool: false,
    }
  }

  mediateSave = () => {
    console.log("mediateSave 호출!");
    const {email} = this.props.data;
    const {title, text} = this.state;
    const body = JSON.stringify({email, title, text});
    console.log("준비된", body);
    fetch('http://localhost:5000/stash/',
        {
          method: 'POST',
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        }).then((res) => res.json())
        .then((res) => {
          message.success('Save success!');
          console.log(res, "res.json() 결과");
        })
        .catch((err) => console.log(err))
  };
  titleHandle = (e) => {
    this.setState({title: e.target.value})
  };
  textHandle = (e) => {
    this.setState({text: e.target.value})
  };
  mainSave = () => {
    this.phaseOnePop()
  };
  phaseOneHandle = (value) => {
    this.setState({burnDate: new Date().setSeconds(value), phaseTwoBool: true});
  };
  phaseTwoHandle = (value) => {
    this.setState({publish: value, phaseThreeBool: true});
  };
  phaseThreeHandle = (value) => {
    this.setState({
      timeCapDate: new Date().setSeconds(value),
      phaseFourBool: true,
      phaseOneBool: false,
      phaseTwoBool: false,
      phaseThreeBool: false
    }, () => {
      console.log("최종제출 호출!");
      const {burnDate, publish, timeCapDate, title, text} = this.state;
      const {email, currentWriteTopic, isCustomIssue} = this.props;
      const body = JSON.stringify({email, title, text, burnDate, publish, will_public_at:timeCapDate,isCustomIssue,topic_text:currentWriteTopic});
      console.log("준비된", body);
      fetch('http://localhost:5000/article/',
          {
            method: 'POST', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
            },
            body,
          }).then((res) => res.json())
          .then((res) => {

            console.log(res, "res.json() 결과");
            setTimeout(() => {
              this.setState({phaseFourBool: false}, () => {
                message.success('비바람이 몰아치는 가운데 당신의 기록이 어디에 남았어요! 🙊');
                setTimeout(() => this.props.history.push('/write/topic'), 0)
              })
            }, 1500);
          })
          .catch((err) => console.log(err))
    });
  };
  phaseOnePop = () => this.setState({phaseOneBool: true});

  closePop = () => this.setState({phaseOneBool: false, phaseTwoBool: false, phaseThreeBool: false});

  render() {
    if (!this.state.phaseFourBool) {
      return (
          <div className="flex-container">
            <div className="topic-bar">
              <span>{this.props.data.currentWriteTopic}</span>
            </div>
            <div className="write-area-box">
              <Input className="title-area" value={this.state.title} placeholder="title" autoFocus={true}
                     onChange={this.titleHandle}/>
              <TextArea className="write-area" value={this.state.text} placeholder="엄청나게 보고싶다"
                        onChange={this.textHandle}/>
            </div>
            <div className="bottom-bar">
              <Button.Group size="medium">
                <Button type="dashed" onClick={this.mediateSave}>
                  <Icon type="vertical-align-bottom"/>
                  임시저장
                </Button>
                <Button color='blue' type="primary" onClick={this.mainSave}>
                  <Icon type="forward"/>
                  Write now
                </Button>
              </Button.Group>
            </div>
            <Confirm className={"confirmPhaseBurn"}
                     header="헬로라이트의 글에는 생명이 있습니다. 이 글은 언제 사라질까요?"
                     content={
                       <Button.Group className="confirmPhaseBurnButtonGroup" size='large'>
                         <Button onClick={() => this.phaseOneHandle(3600)} inverted color='olive'>한시간</Button>
                         <div style={{width: "0px"}}/>
                         <Button onClick={() => this.phaseOneHandle(86400)} inverted color='yellow'>하루</Button>
                         <div style={{width: "0px"}}/>
                         <Button onClick={() => this.phaseOneHandle(2592000)} inverted color='orange'>한달</Button>
                         <div style={{width: "0px"}}/>
                         <Button onClick={() => this.phaseOneHandle(31536000000)} inverted color='red'>천년</Button>
                       </Button.Group>
                     }
                     open={this.state.phaseOneBool}
                     close={String(this.state.phaseTwoBool)}
            />
            <Confirm className={"confirmPhaseBurn"}
                     header="이 세상에 몇명만 아는 비밀을 만들어보세요."
                     content={
                       <Button.Group className="confirmPhaseBurnButtonGroup" size='large'>
                         <Button onClick={() => this.phaseTwoHandle("private")} inverted color='olive'>비공개</Button>
                         <div style={{width: "0px"}}/>
                         <Button onClick={() => this.phaseTwoHandle("half")} inverted color='yellow'>한정판 공개</Button>
                         <div style={{width: "0px"}}/>
                         <Button onClick={() => this.phaseTwoHandle("public")} inverted color='orange'>공개</Button>
                       </Button.Group>
                     }
                     open={this.state.phaseTwoBool}
                     close={String(this.state.phaseTwoBool)}
            />
            <Confirm className={"confirmPhaseBurn"}
                     header="이글이 타임머신을 타고 미래에 공개된다면 어떨까요?"
                     content={
                       <Button.Group className="confirmPhaseBurnButtonGroup" size='large'>
                         <Button onClick={() => this.phaseThreeHandle(0)} inverted color='olive'>NOW</Button>
                         <div style={{width: "0px"}}/>
                         <Button onClick={() => this.phaseThreeHandle(86400)} inverted color='yellow'>하루뒤에?</Button>
                         <div style={{width: "0px"}}/>
                         <Button onClick={() => this.phaseThreeHandle(2592000)} inverted color='orange'>한달뒤에?</Button>
                         <div style={{width: "0px"}}/>
                         <Button onClick={() => this.phaseThreeHandle(31536000000)} inverted color='orange'>천년뒤에?</Button>
                       </Button.Group>
                     }
                     open={this.state.phaseThreeBool}
                     close={String(this.state.phaseThreeBool)}
            />
          </div>
      )
    } else {//phase four 단계 로드
      return (
          <Segment className="Load-Container">
            <Dimmer className="Load-outer" active inverted>
              <Loader inverted content="당신의 향기를 기록중~"/>
            </Dimmer>
            <Image className="Load-Image" src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png'/>
          </Segment>
      )
    }
  }
}

export default Write;
