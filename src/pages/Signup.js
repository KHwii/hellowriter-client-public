/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-tabs */
/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import {message, Button} from 'antd';
import SERVER_URL from "../config/config";

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {email: '', hidden: true};
	}

	onSubmit = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;
		const checkpassword = e.target.checkpassword.value;
		const nickname = e.target.nickname.value;
		const userInfo = {};
		userInfo.email = email;
		if (password.length < 8) {
			alert('비밀번호는 8자리 이상 입력해주세요.');
		} else if (password !== checkpassword) {
			alert('비밀번호를 확인해주세요.');
		} else {
			userInfo.password = password;
		}
		userInfo.nickname = nickname;
		fetch(`${SERVER_URL}/signup`, {
			method: 'POST',
			body: JSON.stringify(userInfo),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then( (res)=>{
				console.log(res)
				alert('회원가입이 완료되었습니다.');
				setTimeout(()=> {
					this.props.history.push('/signin');
				},1500)
			})
			.catch((error) => console.error(error));
	};

	// eslint-disable-next-line react/sort-comp
	checkMail = () => {
		console.log('checkMail 호출!');
		const {email} = this.state;
		const body = JSON.stringify({email});
		fetch(`${SERVER_URL}/signup/email`,
				{
					method: 'POST',
					credentials: 'same-origin', // include, *same-origin, omit
					headers: {
						'Content-Type': 'application/json',
					},
					body,
				}).then((res) => res.json())
				.then((res) => {
					console.log(res);
					if (res.duplicated === true) {
						message.error('중복된 메일 입니다.!');
						console.log(res, 'res.json() 결과');
					} else if (res.duplicated === false) {
						message.success('메일이 잘생겼네요.');
						console.log(res, 'res.json() 결과');
						this.setState({hidden: false})
					} else {
						console.log('통신실패');
					}
				}).catch((err) => console.log(err));
	}

	onChangeEmail = (e) => {
		this.setState({email: e.target.value,hidden:true});
	}

	render() {
		return (
			<div className="signUpPage">
				<header>회원가입 </header>
				<form action="/signup" method="post" onSubmit={this.onSubmit}>
					<div>
						이메일 : <input onChange={this.onChangeEmail} type="email" name="email" placeholder="이메일"/>
					</div>
					<Button onClick={this.checkMail}>
						이메일 중복확인
					</Button>
					<div>
						비밀번호 : <input type="password" name="password" placeholder="비밀번호" />
					</div>
					<div>
						비밀번호 확인 : <input type="password" name="checkpassword" placeholder="비밀번호를 한 번 더 입력해주세요" />
					</div>
					<div>
						작가명 : <input type="text" name="nickname" placeholder="작가명" />
					</div>
					<input hidden={this.state.hidden} type="submit" value="회원가입"/>
				</form>
			</div>
		);
	}
}

export default Signup;
