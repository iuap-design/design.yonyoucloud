import React, { Component } from 'react';
import { Col , Row } from 'tinper-bee';
import './index.less';

const obj = {
    '用友企业云服务':[
        {
            name:'用友企业云服务官网',href:'https://www.yonyoucloud.com/'
        },
        {
            name:'用友云平台官网',href:'https://www.yonyoucloud.com/category.php?id=27'
        },
        {
            name:'用友云开放平台',href:'https://open.diwork.com/#/'
        },
    ],
    '资源':[
        {
            name:'tinper-webide 示例系统',href:'http://tinper.org/webide/#/demos/ui/button'
        },
        {
            name:'Lebra 移动端组件库',href:'https://github.com/lebra/lebra-components'
        },
    ],
    'JS-SDK':[
        {
            name:'sparrow.js 基础工具库',href:'http://docs.tinper.org/sparrow/'
        },
        {
            name:'iuap-insight 端到端数据上报',href:'https://github.com/iuap-design/iuap-insight'
        },
        {
            name:'小友 Web SDK',href:'https://github.com/iuap-design/xiaoyouweb'
        },
        {
            name:'IMSDK',href:'https://github.com/iuap-design/YYIMSDK'
        },
        {
            name:'yyy-jssdk 数据采集SDK',href:'http://git.yonyou.com/users/sign_in'
        },
    ],
    '工具':[
        {
            name:'tinper-spriter 图片处理',href:'https://github.com/iuap-design/blog/issues/194'
        },
        {
            name:'tinper-uba 前端命令行工具',href:'https://github.com/iuap-design/tinper-uba'
        },
        {
            name:'uba-gui 前端工程化工具',href:'https://github.com/tinper-uba/uba-gui'
        },
        {
            name:'tinper-tdoc 静态文档网站生成',href:'https://github.com/iuap-design/tdoc/blob/master/README.md'
        },
    ],
    '关于tinper':[
        {
            name:'tinper，企业级大前端基础设施平台，为数字化企业实现多终端快速开发及产品极致体验提供一站式解决方案',href:'javascript:void(0)'
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
                    
                </div>
                <div className="links">
                    <Row>
                        <Col xs={1}></Col>
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
                                                <a target='_blank' href={element.href}>{element.name}</a>
                                            </li>
                                        )
                                    }
                                });
                                return <Col lg={2} md={2}  sm={2} xs={12} key={index}>
                                    <span className="link-title">{item}</span>
                                    <ul className="link-ul">
                                        {list}
                                    </ul>
                                </Col>
                             })
                        }
                        
                        <Col xs={1}></Col>
                    </Row>
                </div>
                <div className="footer-bottom">
                Copyright © 2019 tinper . 京ICP备15025219号-1 
                </div>
            </div>
        );
    }
}

export default Footer;