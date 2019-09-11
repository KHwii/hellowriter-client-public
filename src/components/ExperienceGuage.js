import React, { Component } from "react";
import { Progress } from "antd";

class ExperienceGuage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
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
      </div>
    );
  }
}

export default ExperienceGuage;
