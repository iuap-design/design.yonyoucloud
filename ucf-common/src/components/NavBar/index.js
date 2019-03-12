import React, { Component } from 'react';
import { Button,Row,Col,FormControl,Dropdown,Menu,Select,Icon,InputGroup } from 'tinper-bee';
import logo from 'images/iuapdesignz.svg';

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
              <Item key="1" className="first-show">首页</Item>
              <Item key="2">设计语言</Item>
              <Item key="3"><a href="/tinper-bee">基础组件</a></Item>
              <Item key="4"><a href="/tinper-acs">应用组件</a></Item>
              <Item key="5"><a href="/case/preview">典型案例</a></Item>
            </Menu>
        );

        let activeKey = this.state.activeKey;
        return (
            <div >
                <Row className='nav'>
                <Col className='nav-left' md={5}>
                    <span className='nav-logo '>
                        <a href="http://127.0.0.1:3000/design"><img src={logo} /></a>
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
                        <li><a href="/tinper-bee">基础组件</a></li>
                        <li><a href="/tinper-acs">应用组件</a></li>
                        <li><a href="/case/preview" target="_blank">典型案例</a></li>
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
                   <img src={logo} />
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