import React, { Component } from 'react';
import { Button,Row,Col,FormControl,Dropdown,Menu,Select,Icon,InputGroup } from 'tinper-bee';
import './index.less';

const Option = Select.Option;
const { Item } = Menu;

class NavBar extends Component {
    constructor(props){ 
        super(props);
        this.state={
            version:''
        } 
    }
    componentDidMount(){
        docsearch({ 
            apiKey: 'd388a4977faabf821db64112c8abdcf7', 
            indexName: 'bee_tinper', 
            inputSelector: '#componentSearch', 
            debug: false // Set debug to true if you want to inspect the dropdown 
        }); 

        // axios.get('//tinper-bee-theme-server.online.app.yyuap.com/server/version')
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
    render() {
        const menu1 = (
            <Menu>
              <Item key="1" className="first-show">首页</Item>
              <Item key="2" className="lang">设计语言</Item>
              <Item key="3"><a  href="/tinper-bee" onTouchStart={()=>{}}>基础组件</a></Item>
              <Item key="4"><a  href="/tinper-acs" onTouchStart={()=>{}}>应用组件</a></Item>
              <Item key="5"><a  href="/prepaper" onTouchStart={()=>{}}>典型案例</a></Item>
            </Menu>
        );
        return (
            <div >
                <Row className='nav'>
                <Col className='nav-left' md={5}>
                    <span className='nav-logo '>
                        <a href="#">
                            <img src='//design.yonyoucloud.com/static/tinper-bee/logo/iuapdesign.svg' />
                            <span className='version'>{ TINPERVERSION }</span>
                        </a>
                    </span>
                    <span className='nav-split'>|</span>
                    <span className='nav-search'>
                        <FormControl id='componentSearch' placeholder='在iuap design 中搜索' type='search' />
                    </span>
                </Col>
                <Col className='nav-right' md={7}>
                    <ul className="nav-options">
                        <li><a className="first-show" href="#" >首页</a></li>
                        <li  className="language">设计语言</li>
                        <li><a  href="/tinper-bee">基础组件</a></li>
                        <li><a  href="/tinper-acs">应用组件</a></li>
                        {/* <li><a  href="/case/preview" target="_blank">典型案例</a></li> */}
                        <li><a href="/prepaper">典型案例</a></li>
                        <li>
                            <Select defaultValue="zh_CN" dropdownClassName='nav-lang-select'>
                                <Option value="zh_CN">简体中文</Option>
                                <Option value="zh_TW" disabled={true}  disabletarget="_blank">繁体中文</Option>
                                <Option value="en_US" disabled={true}>英文</Option>
                            </Select>
                        </li>
                    </ul>  
                </Col>          
            </Row>
            <div className="mob-nav">
                <a href="#">
                    <img src='//design.yonyoucloud.com/static/tinper-bee/logo/iuapdesign.svg' />
                    <span className='version'>{ TINPERVERSION }</span>
                </a>
               <span className="nav-content">
                   <Dropdown
                        overlayClassName="aaa"
                        trigger={['click']}
                        overlay={menu1}
                        animation="slide-up">
                        <Button ><Icon type="uf-navmenu"></Icon></Button>
                   </Dropdown> 
               </span>
            </div>
        </div> 
        );
    }
}

export default NavBar;