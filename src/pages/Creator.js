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
      <div className="creators" key={ele + index}>
        <img alt="fail" className="creatorsPic" src={ele.img} />
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
        Runaway trains
        <br />
        <br />
        <div>{creatorsImg}</div>
      </div>
    );
  }
}

export default Creator;
