import React, { Component } from 'react';
import { Col , Row } from 'tinper-bee';
import './index.less';

const obj = {
    '用友云':[
        {
            name:'用友云官网',href:''
        },
        {
            name:'用友云平台官网',href:''
        },
        {
            name:'用友云开放平台',href:''
        },
    ],
    '资源':[
        {
            name:'tinper-webide 示例系统',href:''
        },
        {
            name:'Lebra 移动端组件库',href:''
        },
    ],
    'JS-SDK':[
        {
            name:'sparrow.js 基础工具库',href:''
        },
        {
            name:'iuap-insight 端到端数据上报',href:''
        },
        {
            name:'小友 Web SDK',href:''
        },
        {
            name:'IMSDK',href:''
        },
        {
            name:'yyy-jssdk 数据采集SDK',href:''
        },
    ],
    '工具':[
        {
            name:'tinper-spriter 图片处理',href:''
        },
        {
            name:'tinper-uba 前端命令行工具',href:''
        },
        {
            name:'uba-gui 前端工程化工具',href:''
        },
        {
            name:'tinper-tdoc 静态文档网站生成',href:''
        },
    ],
    '关于tinper':[
        {
            name:'此处是tinper的文字描述',href:''
        },
        {
            name:'img',href:''
        },
    ],
}

class Footer extends Component {
    render() { 
        return (
            <div className="footer" >
                <div className="footer-bg">
                    <Row>
                    <Col className="empty" lg={1} md={0}  sm={0} xs={0}></Col>
                        {
                             Object.keys(obj).map((item,index)=>{
                                let list =[];
                                obj[item].forEach((element,i) => {
                                    if(element.name=='img'){
                                        list.push(
                                            <li key={i} className="li-sp">
                                                <div className="sp-area">
                                                    <img src="//design.yonyoucloud.com/static/tinper-bee/logo/qrcode.jpeg"/>
                                                    <span className="sp-area-span">
                                                        <span>
                                                            扫描二维码，<br/>
                                                            加入tinper官方群
                                                        </span>
                                                    </span>
                                                </div>
                                            </li>
                                        )
                                    }else{
                                        list.push(
                                            <li key={i}>
                                                <a href={element.href}>{element.name}</a>
                                            </li>
                                        )
                                    }
                                });
                                return <Col lg={2} md={2}  sm={0} xs={0} key={index}>
                                    <span className="link-title">{item}</span>
                                    <ul className="link-ul">
                                        {list}
                                    </ul>
                                </Col>
                             })
                        }
                        
                        <Col className="empty" lg={1} md={0}  sm={0} xs={0}></Col>
                    </Row>
                </div>
                <div className="footer-bottom">
                    Copyright © 2018 yonyou iuapdesign. All Rights Reserved版权所有 京ICP备15025219号-1   Made with  by FED team
                </div>
            </div>
        );
    }
}

export default Footer;