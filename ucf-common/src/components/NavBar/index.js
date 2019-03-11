import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button,Row,Col,FormControl,Dropdown,Menu,Select,Icon,InputGroup } from 'tinper-bee';
import logo from 'images/iuapdesignz.svg';
import classnames from 'classnames';

import './index.less';

const Option = Select.Option;
const { Item } = Menu;
function onSelect({ key }) {
    console.log(`${key} selected`);
}

function onVisibleChange(visible) {
    console.log(visible);
}

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state={
            activeKey:this.props.activeKey
        }
    }
    //移动端
    // constructor(props, context) {
    //     super(props, context);
    //     this.state = {
    //         current: '1'
    //     }
    // }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    //-------------------


    componentDidMount(){
        docsearch({ 
            apiKey: 'd388a4977faabf821db64112c8abdcf7', 
            indexName: 'bee_tinper', 
            inputSelector: '#componentSearch', 
            debug: false // Set debug to true if you want to inspect the dropdown 
        }); 
    }
    

    render() {
        const menu1 = (
            <Menu
              onSelect={onSelect}>
              <Item key="1">首页</Item>
              <Item key="2">设计语言</Item>
              <Item key="3">基础组件</Item>
              <Item key="4">应用组件</Item>
              <Item key="5">典型案例</Item>
            </Menu>
        );

        let activeKey = this.state.activeKey;
        return (
            <div nav_des>
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
                        <li><a href="//design.yyuap.com/tinper-bee">基础组件</a></li>
                        <li><a href="//design.yyuap.com/tinper-acs">应用组件</a></li>
                        <li><a href="//design.yyuap.com/case/preview" target="_blank">典型案例</a></li>
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
            <div className="mob-nav">
                {/* <span className='nav-logo '> */}
                   <img src={logo} />
                {/* </span> */}

                {/* 下拉菜单 */}
                {/* <span className="nav-content">
                    <Select  dropdownClassName='nav-content'>
                        <Option value="homepage">首页</Option>
                        <Option value="design_lang">设计语言</Option>
                        <Option value="base_comp">基础组件</Option>
                        <Option value="apply_comp">应用组件</Option>
                        <Option value="spec_case">典型案例</Option>
                    </Select>
               </span> */}

               <span className="nav-content">
                   <Dropdown
                        trigger={['click']}
                        overlay={menu1}
                        animation="slide-up"
                        onVisibleChange={onVisibleChange}>
                        <Button ><Icon type="uf-navmenu"></Icon></Button>
                    </Dropdown> 
               </span>
            </div>
        </div> 
        );
    }
}

export default NavBar;