import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './DropMenu.css';

export default function Menus() {
	return (
		<div>
			<Menu
				mode="vertical-left"
                theme="dark"
			>
				<Menu.Item key="1" title="Hoasd">
					<Icon type="home" />
					<span>Home</span>
					<Link to="/main" />
				</Menu.Item>
				<Menu.Item key="2">
					<Icon type="user" />
					<span>My Page</span>
					<Link to="/mypage" />
				</Menu.Item>
				<Menu.Item key="3">
					<Icon type="form" />
					<span>Write</span>
					<Link to="/write" />
				</Menu.Item>
				<Menu.Item key="4">
					<Icon type="read" />
					<span>Read</span>
					<Link to="/read" />
				</Menu.Item>
				<Menu.Item key="5">
					<Icon type="meh" />
					<span>Creator</span>
					<Link to="/creator" />
				</Menu.Item>
				<Menu.Item key="6">
					<Icon type="logout" />
					<span>Sign out</span>
					<Link to="/" />
				</Menu.Item>
			</Menu>
		</div>
	);
}
