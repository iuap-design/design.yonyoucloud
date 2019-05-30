import React, { Component } from 'react';
import { Col , Row } from 'tinper-bee';
import Title from '../Title';
import './index.less';

class Service extends Component {
    render() { 
        return (
            <div className="service" >
                <Title title="生态与服务"/>
                <Row>
                    <Col sm={4} xs={12}>
                        <a target='_blank' href='https://mock.yonyoucloud.com/' className='link'>
                            <div className="service-item">
                                <img src="//design.yonyoucloud.com/static/tinper-bee/logo/mock.png"/>
                                <span className="item-title">
                                    Mock 平台
                                </span>
                                <span className="item-script">
                                    专注提升前后端协同开发效率
                                </span>
                            </div>
                        </a>
                    </Col>
                    <Col sm={4} xs={12}>
                        <a target='_blank' href='https://package.yonyoucloud.com/#/' className='link'>
                            <div className="service-item">
                                <img src="//design.yonyoucloud.com/static/tinper-bee/logo/ynpm.png"/>
                                <span className="item-title">
                                    YNPM
                                </span>
                                <span className="item-script">
                                    用友Node镜像服务与工具
                                </span>
                            </div>
                        </a>
                    </Col>
                    <Col sm={4} xs={12}>
                        <a target='_blank' href='/dist/cdn/index.html' className='link'>
                            <div className="service-item">
                                <img src="//design.yonyoucloud.com/static/tinper-bee/logo/cdn.png"/>
                                <span className="item-title">
                                    CDN
                                </span>
                                <span className="item-script">
                                    用友静态资源公共库
                                </span>
                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Service;