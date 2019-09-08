import React, { Component } from "react";
import { Progress } from "antd";
import Overray from "./Overray";
import { Image, Transition } from "semantic-ui-react";

class ExperienceGuage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { animation: "zoom", duration: 500, visible: false };
  }

  render() {
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
          percent={this.props.point}
        />
        <>
          <Transition.Group animation={animation} duration={duration}>
            {visible && (
              <Image
                centered
                size="small"
                src="https://react.semantic-ui.com/images/leaves/4.png"
              />
            )}
          </Transition.Group>
        </>
      </div>
    );
  }
}

export default ExperienceGuage;
