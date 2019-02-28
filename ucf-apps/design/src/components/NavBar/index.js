import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button,Row,Col,FormControl,Dropdown,Menu,Select,Icon,InputGroup } from 'tinper-bee';
//import enterprise from 'images/enterprise.png';
//import navlogo from 'images/navlog.png';
import './index.less';
const Item = Menu.Item;
class NavBar extends Component {
     handleChange = value => {
          console.log(`select ${value}`);
      };
    render() {
        return (
            <Row className='nav'>
                <Col className='nav-left' md={5}>
                    <span className='nav-logo'>
                    </span>
                    <span className='nav-search'>
                        {/* <FormControl type="search" placeholder='123' /> */}
                        <InputGroup>
					<InputGroup.Button>
						<Button>
                        <Icon type="uf-bell" /></Button>
					</InputGroup.Button>
					<FormControl type="text" />
				</InputGroup>

                    </span>
                </Col>
                <Col className='nav-right' md={5}>
                    <ul className="nav-options">
                        <li><a href="">首页</a></li>
                        <li><a href="">设计语言</a></li>
                        <li><a href="">基础组件</a></li>
                        <li><a href="">应用组件</a></li>
                        <li><a href="">典型案例</a></li>
                    </ul>  
                    <Select className="nav-select" defaultValue="简体中文" style={{ width: 64, marginRight: 6 }} onChange={this.handleChange} showSearch={true}>
                       <Option value="繁体中文">繁体中文</Option>
                       <Option value="简体中文">简体中文</Option>
                       <Option value="英文">英文</Option>
                    </Select>
                </Col>          
            </Row>
        );
    }
}

export default NavBar;