import React, { Component } from "react";
import { Progress } from "antd";
import { Image, Transition } from "semantic-ui-react";

class ExperienceGuage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { animation: "zoom", duration: 500, visible: false };
  }

  componentWillReceiveProps() {
    if (this.isEventTime === true) {
      this.setState({ visible: true }, () => {
        setTimeout(() => {
          this.setState({ visible: false });
        }, 2000);
      });
    }
  }

  render() {
    const { point, isEventTime } = this.props;
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
            {visible && (
              <Image
                centered
                size="small"
                src="https://react.semantic-ui.com/images/leaves/4.png"
              />
            )}
          </Transition>
        </div>
      </div>
    );
  }
}

export default ExperienceGuage;
