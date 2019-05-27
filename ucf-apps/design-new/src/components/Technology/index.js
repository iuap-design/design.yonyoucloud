import React, { Component } from 'react';
import { Col , Row } from 'tinper-bee';
import Title from '../Title'
import './index.less';

class Technology extends Component {
    render() { 
        return (
            <div className="technology">
                <Title title="便捷高效的设计"/>
                <Row className="technology-ctn">
                    <Col xs={12} className="ctn-1">
                        <div className="ctn">
                            <img src="//design.yonyoucloud.com/static/tinper-bee/logo/ucf-web2.png"/>
                            <span className="ctx">
                                <span className="ctx-title">
                                    ucf-web
                                </span>
                                <span className="description">
                                    专注性能和效率的微前端框架
                                </span>
                                <a>
                                    查看详情 >
                                </a>
                            </span>
                            <img className="img-right" src="//design.yonyoucloud.com/static/tinper-bee/logo/ucf-web.png"/>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="ctn">
                            <img src="//design.yonyoucloud.com/static/tinper-bee/logo/mdf.png"/>
                            <span className="ctx">
                                <span className="ctx-title">
                                    MDF
                                </span>
                                <span className="description">
                                    前端框架
                                </span>
                                <a>
                                    查看详情 >
                                </a>
                            </span>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="ctn">
                            <img src="//design.yonyoucloud.com/static/tinper-bee/logo/moy.png"/>
                            <span className="ctx">
                                <span className="ctx-title">
                                    moy
                                </span>
                                <span className="description">
                                    轻量级前端框架
                                </span>
                                <a>
                                    查看详情 >
                                </a>
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Technology;