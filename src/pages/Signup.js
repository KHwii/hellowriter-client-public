/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-tabs */
/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Signup extends Component {
	constructor(props) {
		super(props);
	}
	async onSubmit(e) {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		const checkpassword = e.target.checkpassword.value;
		const nickname = e.target.nickname.value;
		const userInfo = {};
		console.log(email, password, nickname);
		userInfo.email = email;
		if (password.length <= 8) {
			alert('비밀번호는 8자리 이상 입력해주세요.');
		} else if (password !== checkpassword) {
			alert('비밀번호를 확인해주세요.');
		} else {
			userInfo.password = password;
		}
		userInfo.nickname = nickname;
		console.log(userInfo);
		//아래에 서버 post주소를 넣어주면됩니다.
		await fetch('http://127.0.0.1:3000', {
			method: 'POST',
			body: JSON.stringify(userInfo),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => {
				alert('회원가입이 완료되었습니다.');
				return response.json();
			})
			.catch((error) => console.error(error));
	}
	render() {
		return (
			<div className="signUpPage">
				<header>회원가입 </header>
				<form action="/signup" method="post" onSubmit={this.onSubmit}>
					<div>
						이메일 : <input type="email" name="email" placeholder="이메일" />
					</div>
					<div>
						비밀번호 : <input type="password" name="password" placeholder="비밀번호" />
					</div>
					<div>
						비밀번호 확인 : <input type="password" name="checkpassword" placeholder="비밀번호를 한 번 더 입력해주세요" />
					</div>
					<div>
						작가명 : <input type="text" name="nickname" placeholder="작가명" />
					</div>
					<input type="submit" value="회원가입" />
				</form>
			</div>
		);
	}
}

export default Signup;
