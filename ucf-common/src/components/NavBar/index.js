import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button,Row,Col,FormControl,Dropdown,Menu,Select,Icon,InputGroup } from 'tinper-bee';
import logo from 'images/iuapdesignz.svg';
import classnames from 'classnames';

import './index.less';

const Option = Select.Option;


class NavBar extends Component {

    componentDidMount(){
        docsearch({ 
            apiKey: 'd388a4977faabf821db64112c8abdcf7', 
            indexName: 'bee_tinper', 
            inputSelector: '#componentSearch', 
            debug: false // Set debug to true if you want to inspect the dropdown 
        }); 
    }
    render() {
        return (
            <div>
                <Row className='nav'>
                <Col className='nav-left' md={5}>
                    <span className='nav-logo '>
                        <img src={logo} />
                    </span>
                    <span className='nav-split'>|</span>
                    <span className='nav-search'>
                        <FormControl id='componentSearch' placeholder='在iuap design 中搜索' type='search' />
                    </span>
                </Col>
                <Col className='nav-right' md={7}>
                    <ul className="nav-options">
                        <li><a className="first-show" href="#" >首页</a></li>
                        <li><a href="" >设计语言</a></li>
                        <li><a href="//design.yyuap.com/tinper-bee/">基础组件</a></li>
                        <li><a href="//design.yyuap.com/tinper-acs/">应用组件</a></li>
                        <li><a href="//design.yyuap.com/case/preview">典型案例</a></li>
                        <li>
                            <Select defaultValue="zh_CN" dropdownClassName='nav-lang-select'>
                                <Option value="zh_CN">简体中文</Option>
                                <Option value="zh_TW" disabled={true}>繁体中文</Option>
                                <Option value="en_US" disabled={true}>英文</Option>
                            </Select>
                        </li>
                    </ul>  
                </Col>          
            </Row>
            <Row className="mob-nav">
                <Col md={8}>
                    <img src={logo}/>
                </Col>
                <Col md={4}>
                </Col>
            </Row>
            </div> 
        );
    }
}

export default NavBar;