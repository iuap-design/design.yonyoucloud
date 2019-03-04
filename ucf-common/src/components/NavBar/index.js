import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button,Row,Col,FormControl,Dropdown,Menu,Select,Icon,InputGroup } from 'tinper-bee';
import logo from '../../static/images/iuapdesignz.svg';
import './index.less';

const Option = Select.Option;


class NavBar extends Component {

    render() {
        return (
            <Row className='nav'>
                <Col className='nav-left' md={5}>
                    <span className='nav-logo '>
                        <img src={logo} />
                    </span>
                    <span className='nav-split'>|</span>
                    <span className='nav-search'>
                        <FormControl placeholder='在iuap design 中搜索' type='search' />
                    </span>
                </Col>
                <Col className='nav-right' md={7}>
                    <ul className="nav-options">
                        <li><a href="">首页</a></li>
                        <li><a target='_blank' href="//www.yuque.com/mo-college/vis-design/krfr2r">设计语言</a></li>
                        <li><a href="">基础组件</a></li>
                        <li><a href="">应用组件</a></li>
                        <li><a href="">典型案例</a></li>
                        <li>
                            <Select defaultValue="zh_CN" dropdownClassName='nav-lang-select'>
                                <Option value="zh_CN">简体中文</Option>
                                <Option value="zh_TW">繁体中文</Option>
                                <Option value="en_US">英文</Option>
                            </Select>
                        </li>
                    </ul>  
                   
                </Col>          
            </Row>
        );
    }
}

export default NavBar;