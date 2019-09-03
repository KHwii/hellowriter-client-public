import React, {Component} from 'react';
import {Icon, Input, message} from 'antd';
import {Confirm, Button} from 'semantic-ui-react'

const {TextArea} = Input;

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      phaseOneBool: false,
      burnDate: "",
      publish: ""
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
    console.log(this, "어디보");
    this.setState({burnDate: (new Date()).setSeconds(value)});
    this.setState({phaseTwoBool: true});
  };

  phaseTwoHandle = (value) => {
  }

  phaseOnePop = () => this.setState({phaseOneBool: true});
  phaseOneClose = () => this.setState({phaseOneBool: false});

  render() {
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
          <div className="bottom-bar" >
            <Button.Group size="medium">
              <Button type="dashed" onClick={this.mediateSave}>
                <Icon type="vertical-align-bottom" />
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
                       <Button onClick={this.phaseOneHandle(3600)} inverted color='olive'>한시간</Button>
                       <div style={{width: "0px"}}/>
                       <Button onClick={this.phaseOneHandle(86400)} inverted color='yellow'>하루</Button>
                       <div style={{width: "0px"}}/>
                       <Button onClick={this.phaseOneHandle(2592000)} inverted color='orange'>한달</Button>
                       <div style={{width: "0px"}}/>
                       <Button onClick={this.phaseOneHandle(31536000000)} inverted color='red'>천년</Button>
                     </Button.Group>
                   }
                   open={this.state.phaseOneBool}
                   onCancel={this.phaseOneClose}
                   onConfirm={this.phaseOneClose}
          />
          {/*<Confirm className={"confirmPhaseBurn"}*/}
          {/*         header="글은 꼭 자신을 위한 것이기도 하고 타인을 위한 것이기도 합니다."*/}
          {/*         content={*/}
          {/*           <Button.Group className="confirmPhaseBurnButtonGroup" size='large'>*/}
          {/*             <Button onClick={this.phaseTwoHandle("private")} inverted color='olive'>비공개</Button>*/}
          {/*             <div style={{width: "0px"}}/>*/}
          {/*             <Button onClick={this.phaseTwoHandle("half")} inverted color='yellow'>한정판 공개</Button>*/}
          {/*             <div style={{width: "0px"}}/>*/}
          {/*             <Button onClick={this.phaseTwoHandle("public")} inverted color='orange'>공개</Button>*/}
          {/*           </Button.Group>*/}
          {/*         }*/}
          {/*         open={this.state.phaseTwoBool}*/}
          {/*/>*/}
        </div>
    );
  }
}

export default Write;
