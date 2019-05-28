import React, { Component } from 'react';
import { Col , Row } from 'tinper-bee';
import Title from '../Title'
import './index.less';

class Banner extends Component {
    render() { 
        return (
            <div  style={{'height':1110}}>
                <div className="banner" style={{'height':930}}>
                    <div className="header">
                        <span className="header-left">
                            <a href='#' className="index">首页</a>
                            <a target='_blank' href='https://github.com/iuap-design/blog/issues'>技术博客</a>
                        </span>
                        <span className="header-right">
                            <a target='_blank' href="https://github.com/iuap-design/tinper-bee">Github</a>
                        </span>
                    </div>
                    <div className="left-text">
                        <div className="tinper">
                            <a target='_blank' href='/'>
                                <img src="//tinper.org/assets/images/tinperlogos%2060w.png"/>
                            </a>
                        </div>
                        <div className="tinper-title">
                            企业级大前端基础设施平台
                        </div>
                        <div className="tinper-ctn">
                            为数字化企业实现多终端快速开发及产品极致体验提供一站式解决方案
                        </div>
                    </div>
                    <div className="design">
                        <Title title="为数字化企业而生的体验能力"/>
                        <Row>
                            <Col className="design-item" sm={4} xs={6}>
                                <a target='_blank' href='http://bee.tinper.org/tinper-bee/' className="link">
                                    <div className="img">
                                        <img src="//design.yonyoucloud.com/static/tinper-bee/logo/tinper-bee.png"/>
                                    </div>
                                    <span className="design-item-h">
                                        tinper-bee
                                    </span>
                                    <span className="design-item-l">
                                        基础组件库
                                    </span>
                                </a>
                            </Col>
                            <Col className="design-item" sm={4} xs={6}>
                                <a target='_blank' href='http://bee.tinper.org/tinper-acs/' className="link">
                                    <div className="img">
                                        <img src="//design.yonyoucloud.com/static/tinper-bee/logo/tinper-acs.png"/>
                                    </div>
                                    <span className="design-item-h">
                                        tinper-acs
                                    </span>
                                    <span className="design-item-l">
                                        应该组件库
                                    </span>
                                </a>
                            </Col>
                            <Col className="design-item" sm={4} xs={6}>
                                <a target='_blank' href='http://bee.tinper.org/prepaper/' className="link">
                                    <div className="img">
                                        <img src="//design.yonyoucloud.com/static/tinper-bee/logo/tinper-case.png"/>
                                    </div>
                                    <span className="design-item-h">
                                        tinper-honeycumb
                                    </span>
                                    <span className="design-item-l">
                                        蜂巢-典型案例系统
                                    </span>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;