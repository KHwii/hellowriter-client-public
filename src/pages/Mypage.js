/* eslint-disable comma-dangle */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import IsLoading from '../components/IsLoading';
import './Mypage.css';

class Mypage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: {
				total: 0,
				timeCaptule: 0,
				topic: 0
			},
			totalInfo: {
				total: 0,
				topics: 0,
				users: 0
			},
			isLoading: true
		};
	}

	componentDidMount() {
		// fetch에 server/user/article로 변경
		fetch('http://localhost:5000/user/article')
			.then((res) => res.json())
			.then((res) => {
				const data = {
					total: res.info.results,
					timeCaptule: res.info.results,
					topic: res.info.results
				};
				this.setState({
					userData: data
				});
			})
      .catch((err) => console.error(err));
		// fetch주소에 server/totalinfo로 변경
		fetch('https://randomuser.me/api/?results=10')
			.then((res) => res.json())
			.then((res) => {
				const data = {
					total: res.info.results,
					topics: res.info.results,
					users: res.info.results
				};
				this.setState({
					totalInfo: data,
					isLoading: false
				});
			})
			.catch((err) => console.error(err));
	}

	render() {
		const { userData, totalInfo, isLoading } = this.state;
		console.log('너상태가뭐야', isLoading);
		return isLoading ? (
			<IsLoading />
		) : (
			<div className="flex-container">
				<div className="my-page">
					<span>마이페이지</span>
				</div>
				<div className="mypage-info-table">
					<p>내가 쓴글 : {userData.total}개</p>
					<p>타임캡슐 : {userData.timeCaptule}개</p>
					<p>내가 발행한 주제 : {userData.topic}개</p>
					<div>
						전체현황
						<p> 전체글 : {totalInfo.total}개</p>
						<p>토픽 : {totalInfo.topics}개</p>
						<p>유저 : {totalInfo.users}개</p>
					</div>
					<div />
				</div>
				<div className="bottom-bar">
					<Button id="mypage-homeBtn" size="large" onClick={this.changePageHome}>
						<Link to="/main">HOME</Link>
					</Button>
				</div>
			</div>
		);
	}
}

export default Mypage;
