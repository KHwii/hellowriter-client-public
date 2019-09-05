import React from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import './DropMenu.css';
import Menus from './Menus';
// const { SubMenu } = Menu;
class DropMenu extends React.Component {
	state = {
		collapsed: false
	};

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		return (
			<div className="dropMenu" style={{ width: 512 }}>
				<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
					<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
				</Button>
				{this.state.collapsed ? <Menus /> : null}
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
