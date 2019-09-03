import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
	render() {
		return (
			<div className="Welcome-box">
				<h4>Hello, Writer. I read you, you lead me.</h4>
				<div>
					<Link to="/signup">Sign up</Link>
					<Link to="/signin">Sign in</Link>
				</div>
			</div>
		);
	}
}

export default Welcome;
