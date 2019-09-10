import React, { Component } from "react";
import { Progress } from "antd";
import { Image, Transition } from "semantic-ui-react";

class ExperienceGuage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { animation: "zoom", duration: 500, visible: false };
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
    console.log("펄스시작");
    this.setState({ visible: false }, () => {
      console.log("펄스끝!");
      this.props.endEvent();
    });
  };

  render() {
    let { point, isEventTime } = this.props;
    console.log(point, isEventTime, "변화상태를 보고해주세요~");
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
          percent={point}
        />
        <div>
          <Transition
            animation={animation}
            duration={duration}
            visible={visible}
          >
            <Image
              centered
              size="small"
              src="https://react.semantic-ui.com/images/leaves/4.png"
            />
          </Transition>
        </div>
      </div>
    );
  }
}

export default ExperienceGuage;
