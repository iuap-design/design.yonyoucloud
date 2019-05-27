import React, { Component } from 'react';
import { Col , Row } from 'tinper-bee';
import Title from '../Title'
import './index.less';

class Banner extends Component {
    render() { 
        return (
            <div  style={{'height':document.body.clientHeight+180}}>
                <div className="banner" style={{'height':document.body.clientHeight}}>
                    <div className="header">
                        <span className="header-left">
                            <a href='/' className="index">首页</a>
                            <a>技术博客</a>
                        </span>
                        <span className="header-right">
                            <a>Github</a>
                        </span>
                    </div>
                    <div className="left-text">
                        <div className="tinper">
                            <a href='/'>
                                <img src="//tinper.org/assets/images/tinperlogos%2060w.png"/>
                            </a>
                        </div>
                        <div className="tinper-title">
                            企业级大前端基础设施平台
                        </div>
                        <div className="tinper-ctn">
                            tinper 致力于为企业客户和个人开发者提供快速构建泛端应用的服务和能力，<br/>
                            其中包含了完整的开发框架、公共SDK以及配套的开发服务，<br/>
                            用友网络大前端团队为您提供技术服务。
                        </div>
                    </div>
                    <div className="design">
                        <Title title="便捷高效的设计"/>
                        <Row>
                            <Col className="design-item" sm={4} xs={6}>
                                <div className="img">
                                    <img src="//design.yonyoucloud.com/static/tinper-bee/logo/tinper-bee.png"/>
                                </div>
                                <span className="design-item-h">
                                    tinper-bee
                                </span>
                                <span className="design-item-l">
                                    基础组件库
                                </span>
                            </Col>
                            <Col className="design-item" sm={4} xs={6}>
                                <div className="img">
                                    <img src="//design.yonyoucloud.com/static/tinper-bee/logo/tinper-acs.png"/>
                                </div>
                                <span className="design-item-h">
                                    tinper-acs
                                </span>
                                <span className="design-item-l">
                                    业务组件库（含参照）
                                </span>
                            </Col>
                            <Col className="design-item" sm={4} xs={6}>
                                <div className="img">
                                    <img src="//design.yonyoucloud.com/static/tinper-bee/logo/tinper-case.png"/>
                                </div>
                                <span className="design-item-h">
                                    典型案例
                                </span>
                                <span className="design-item-l">
                                    业务组件库（含参照）
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;