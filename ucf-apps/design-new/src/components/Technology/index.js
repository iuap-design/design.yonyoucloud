import React, { Component } from 'react';
import { Col , Row } from 'tinper-bee';
import Title from '../Title'
import './index.less';

class Technology extends Component {
    render() { 
        return (
            <div className="technology">
                <Title title="前端编程模型"/>
                <Row className="technology-ctn">
                    <Col xs={12}>
                        <div className="ctn ctn-1">
                            <a className='link' target='_blank' href='http://tinper.org/ucf-web/'>
                                
                                    <img src="//design.yonyoucloud.com/static/tinper-bee/logo/ucf-web2.png"/>
                                
                                <span className="ctx">
                                    <span className="ctx-title">
                                        UCF-Web
                                    </span>
                                    <span className="description">
                                        专注性能和效率的微前端框架
                                    </span>
                                    <a target='_blank' href='http://tinper.org/ucf-web/'>
                                        查看详情 >
                                    </a>
                                </span>
                                {/* <img className="img-right" src="//design.yonyoucloud.com/static/tinper-bee/logo/ucf-web.png"/> */}
                            </a>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className="ctn">
                            <img src="//design.yonyoucloud.com/static/tinper-bee/logo/mdf.png"/>
                            <span className="ctx">
                                <span className="ctx-title">
                                    MDF
                                </span>
                                <span className="description">
                                    基于元数据的模型驱动开发框架
                                </span>
                                <a target='_blank' href='http://tinper.org/mdf/'>
                                    查看详情 >
                                </a>
                            </span>
                        </div>
                    </Col>
                    <Col  md={6}  xs={12}>
                        <div className="ctn">
                            <a className='link' target='_blank' href='http://docs.tinper.org/moy/'>
                                <img src="//design.yonyoucloud.com/static/tinper-bee/logo/moy.png"/>
                                <span className="ctx">
                                    <span className="ctx-title">
                                        Moy
                                    </span>
                                    <span className="description">
                                        轻量级MVVM前端框架
                                    </span>
                                    <a target='_blank' href='http://docs.tinper.org/moy/'>
                                        查看详情 >
                                    </a>
                                </span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Technology;