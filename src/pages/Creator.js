import React, { Component } from "react";
import "./Creator.css";

class Creator extends Component {
  render() {
    const creators = [
      {
        name: "강태훈",
        img:
          "https://files.slack.com/files-pri/TLJSSPZFE-FN1NFG2LV/i-didnt-choose-the-puglife-the-pug-life-chose-me-23261739.png"
      },
      {
        name: "육광휘",
        img:
          "https://files.slack.com/files-pri/TLJSSPZFE-FMQ91CAGK/deadpool.jpeg"
      },
      {
        name: "김해준",
        img: "https://t1.daumcdn.net/cfile/tistory/116CBB3F50EEACBB37"
      }
    ];
    const creatorsImg = creators.map((ele, index) => (
      <div className="creators" key={ele + index}>
        <img className="creatorsPic" src={ele.img} />
        <br />
        {ele.name}
      </div>
    ));
    return (
      <div>
        <br />
        <h3>Hello, Writer</h3>
        <p>by codestates</p>
        <br />
        <br />
        Runaway trains
        <br />
        <br />
        <div>{creatorsImg}</div>
      </div>
    );
  }
}

export default Creator;
