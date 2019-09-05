import React, { Component } from 'react';
import './Creator.css';

class Creator extends Component {
	render() {
		const creators = [ '강태훈', '육광휘', '김해준' ];
		const creatorsImg = creators.map((ele,index) => (
			<div className="creators" key={ele + index}>
				<img
					className="creatorsPic"
					src="//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png"
				/>
				<br />
				{ele}
			</div>
		));
		return (
			<div>
				<br />
				<h3>Hello, Writer</h3>
				<p>by codestates</p>
				<div id="usersInfo">
					<img
						className="usersPic"
						src="//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png"
					/>
					<div>
						유저이름
						<br />
						<br />
            Runaway trains
            <br />
						<div>{creatorsImg}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Creator;
