import React, { Component } from "react";
import { Progress } from "antd";
import { Image, Transition } from "semantic-ui-react";
import great from "../pages/img/123.png";
class ExperienceGuage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { animation: "zoom", duration: 1500, visible: false };
  }

  componentWillReceiveProps(Nextprops) {
    console.log(Nextprops, "바바바", this);
    if (Nextprops.isEventTime === true) {
      console.log("이벤트타입");
      this.setState({ visible: true }, () => {
        console.log("변경 트루!");
        this.takeDown.apply(this);
      });
    }
  }

  takeDown = () => {
    this.setState({ visible: false }, () => {
      this.props.endEvent();
    });
  };

  render() {
    let { point, isEventTime } = this.props;
    const { animation, duration, visible } = this.state;
    return (
      <div className="progress-box">
        <Progress
          style={{}}
          className="progress"
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068"
          }}
          status="active"
          showInfo={false}
          percent={point}
        />
        <div className="defualt-div">
          <Transition
            animation={animation}
            duration={duration}
            visible={visible}
          >
            <Image centered size="small" src={great} />
          </Transition>
        </div>
      </div>
    );
  }
}

export default ExperienceGuage;
