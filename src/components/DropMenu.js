import React from 'react';
import { Icon, Button } from 'antd';
import './DropMenu.css';
import Menus from './Menus';
// const { SubMenu } = Menu;
class DropMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false
		};
	}

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		console.log('지금필요한건',this.props.changeCurrentUser)
		return (
			<div className="dropMenu" style={{ width: 128 }}>
				<Button className="Menu-Button" type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 0 }}>
					<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
				</Button>
				{this.state.collapsed ? <Menus changeCurrentUser={this.props.changeCurrentUser} toggleCollapsed={this.toggleCollapsed} /> : null}
			</div>
		);
	}
}

export default DropMenu;

// Submenu 사용 (필요시)
// <SubMenu
//             key="sub2"
//             title={
//               <span>
//                 <Icon type="appstore" />
//                 <span>Navigation Two</span>
//               </span>
//             }
//           >
//             <Menu.Item key="9">Option 9</Menu.Item>
//             <Menu.Item key="10">Option 10</Menu.Item>
//             <SubMenu key="sub3" title="Submenu">
//               <Menu.Item key="11">Option 11</Menu.Item>
//               <Menu.Item key="12">Option 12</Menu.Item>
//             </SubMenu>
//           </SubMenu>
