import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button,Row,Col,FormControl,Dropdown,Menu } from 'tinper-bee';
//import enterprise from 'images/enterprise.png';
//import navlogo from 'images/navlog.png';
const Item = Menu.Item;
class NavBar extends Component {
    render() {
        const menu = (
            <Menu>
              <Item key="1">简体中文</Item>
              <Item key="2">繁体中文</Item>
              <Item key="3">英文</Item>
            </Menu>
        );
        return (
            <Row className='nav'>
                <Col className='nav-left' md={5}>
                    <span className='nav-logo'>
                    </span>
                    <span className='nav-search'>
                        <FormControl/>
                    </span>
                </Col>
                <Col className='nav-right' md={5}>
                    <Dropdown overlay={menu}>
                        <Button colors='primary'>点击显示</Button>
                    </Dropdown>
                    <ul className="nav-options">
                        <li><a href="">首页</a></li>
                        <li><a href="">设计语言</a></li>
                        <li><a href="">基础组件</a></li>
                        <li><a href="">应用组件</a></li>
                        <li><a href="">典型案例</a></li>
                    </ul>  
                </Col>          
            </Row>
        );
    }
}

export default NavBar;