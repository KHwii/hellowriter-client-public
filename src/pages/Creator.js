import React, { Component } from "react";
import "./Creator.css";
import Ykh from "./img/ykh.jpeg";
import Kth from "./img/giphy.gif";

class Creator extends Component {
  render() {
    const creators = [
      {
        name: "육광휘",
        img: Ykh
      },
      {
        name: "강태훈",
        img: Kth
      },
      {
        name: "김해준",
        img: "https://t1.daumcdn.net/cfile/tistory/116CBB3F50EEACBB37"
      }
    ];
    const creatorsImg = creators.map((ele, index) => (
      <div className="creators" key={index}>
        <img alt="fail" className="creatorsPic" src={ele.img} />
        <br />
        {ele.name}
      </div>
    ));
    return (
      <div>
        <br />
        <h2>Hello, Writer</h2>
        <h3>by codestates</h3>
        <br />
        <div id="creator-info">
          <h3>Runaway trains</h3>
          <br />
          <br />
          <div>{creatorsImg}</div>
        </div>
      </div>
    );
  }
}

export default Creator;
