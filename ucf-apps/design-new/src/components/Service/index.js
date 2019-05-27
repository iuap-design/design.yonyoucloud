import React, { Component } from 'react';
import { Col , Row } from 'tinper-bee';
import Title from '../Title';
import './index.less';

class Service extends Component {
    render() { 
        return (
            <div className="service" >
                <Title title="丰富多样的开发服务"/>
                <Row>
                    <Col sm={4} xs={6}>
                        <div className="service-item">
                            <img src="//design.yonyoucloud.com/static/tinper-bee/logo/mock.png"/>
                            <span className="item-title">
                                MOCK
                            </span>
                            <span className="item-script">
                                高效、易用、功能强大的API管理平台
                            </span>
                        </div>
                    </Col>
                    <Col sm={4} xs={6}>
                        <div className="service-item">
                            <img src="//design.yonyoucloud.com/static/tinper-bee/logo/ynpm.png"/>
                            <span className="item-title">
                                YNPM
                            </span>
                            <span className="item-script">
                                前端资源包共享平台
                            </span>
                        </div>
                    </Col>
                    <Col sm={4} xs={6}>
                        <div className="service-item">
                            <img src="//design.yonyoucloud.com/static/tinper-bee/logo/cdn.png"/>
                            <span className="item-title">
                                CDN
                            </span>
                            <span className="item-script">
                                公共静态资源库
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Service;