/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

class Welcome extends Component {
	render() {
		return (
			<div className="welcomePage">
				<h1 id="welcomeWrite">Hello, Writer.</h1>
				<div>
					<Link className="welcomeBtn" to="/signup">Sign up</Link>
					<Link className="welcomeBtn" to="/signin">Sign in</Link>
				</div>
			</div>
		);
	}
}

export default Welcome;
