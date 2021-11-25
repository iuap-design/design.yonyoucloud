import React, { Component } from 'react';
import { Col , Row } from 'tinper-bee';
import Title from '../Title'
import './index.less';

class Banner extends Component {
    render() { 
        return (
            <div  className="banner">
                <div className="header">
                    <span className="header-left">
                        <a href='#' className="index">首页</a>
                        <a target='_blank' href='https://github.com/iuap-design/blog/issues'>技术博客</a>
                    </span>
                    <span className="header-right">
                        <a target='_blank' href="https://github.com/iuap-design">Github</a>
                        <a target='_blank' href="https://yondesign.yonyou.com/homepage/#/">切回新版</a>
                    </span>
                </div>
                <div className="left-text">
                    <div className="tinper">
                        <a target='_blank' href='/'>
                            <img src="//design.yonyoucloud.com/static/tinper-bee/logo/tinperlogos.png"/>
                        </a>
                    </div>
                    <div className="tinper-title">
                        企业级大前端基础设施平台
                    </div>
                    <div className="tinper-ctn">
                        为数字化企业实现多终端快速开发及产品极致体验提供一站式解决方案
                    </div>
                </div>
                {
                    this.props.isMobile?<img className='img-mobile-bg' src='//design.yonyoucloud.com/static/tinper-bee/logo/mobilebanner.png'></img>:<img className='img-bg' src='//design.yonyoucloud.com/static/tinper-bee/logo/banner.png'></img>
                }
                <div className="design">
                        <Title title="为数字化企业而生的体验能力"/>
                        <Row>
                            <Col className="design-item" md={4} xs={12}>
                                <a target='_blank' href='http://bee.tinper.org' className="link">
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
                            <Col className="design-item" md={4} xs={12}>
                                <a target='_blank' href='http://bee.tinper.org/tinper-acs/' className="link">
                                    <div className="img">
                                        <img src="//design.yonyoucloud.com/static/tinper-bee/logo/tinper-acs.png"/>
                                    </div>
                                    <span className="design-item-h">
                                        tinper-acs
                                    </span>
                                    <span className="design-item-l">
                                        应用组件库
                                    </span>
                                </a>
                            </Col>
                            <Col className="design-item" md={4} xs={12}>
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
        );
    }
}

export default Banner;