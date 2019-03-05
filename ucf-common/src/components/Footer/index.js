import React, { Component } from 'react';
import { actions } from 'mirrorx';
import './index.less';
import { Icon,Row,Col } from 'tinper-bee';
import phone from 'images/phone.png';
import mail from 'images/mail.png';
import search from 'images/search.png';
import time from 'images/time.png';
class Footer extends Component {
    render() { //包含事件按钮 
        return (
            <div className="footer">
                <Row className='footer-top'>
                    <Col className="footer-top-item" md={3} xs={12} sm={6} >
                        <p>相关资源</p>
                        <ul>
                            <li>
                                <a href="https://mock.yonyoucloud.com/">Mock 接口管理平台</a>
                            </li>
                            <li>
                                <a href="https://package.yonyoucloud.com/#/">YNPM-快速、安全、可统计的 包管理平台</a>
                            </li>
                            <li>
                                <a href="https://github.com/tinper-acs/ac-tools">ac-tools 业务组件开发工具</a>
                            </li>
                            <li>
                                <a href="https://github.com/tinper-acs/ac-tools">YYIMSDK 即时通讯 SDK</a>
                            </li>
                            <li>
                                <a href="https://www.yuque.com/ucf-web/book">UCF-WEB 微前端框架</a>
                            </li>
                            <li>
                                <a href="http://tinper.org/webide/">Moy 框架在线示例</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer-top-item" md={3} xs={12} sm={6}>
                        <p>社区</p>
                            <ul>
                                <li>
                                    <a href="https://github.com/iuap-design/blog/issues">云平台体验技术团队BLOG</a>
                                </li>
                                <li>
                                    <a href="">tinper 官方技术交流群</a>
                                </li>
                            </ul>
                    </Col>
                    <Col className="footer-top-item" md={3} xs={12} sm={6}>
                        <p>帮助</p>
                        <ul>
                            <li>
                                <a href="https://github.com/tinper-bee">组件Github 源码</a>
                            </li>
                            <li>
                                <a href="https://github.com/iuap-design/tinper-bee/releases">更新记录</a>
                            </li>
                            <li>
                                <a href="">常见问题</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer-top-item" md={3} xs={12} sm={6}>
                        <p>联系我们</p>
                            <ul>
                                <li>
                                <img src={phone}/> 400-6815456
                                </li>
                                <li><img src={mail}/> zhaoyni@yonyou.com</li>
                                <li>
                                    <img src={search}/> 北京市海淀区北清路68号用友产业园iuap事业部
                                </li>
                                <li>
                                    <img src={time}/> 周一至周五9:00-17:00
                                </li>
                            </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="footer-middle" md={12} xs={12} sm={12} >
                        <div className="footer-line">
                        </div>
                    </Col>
                    <Col className="footer-base" md={12}  xs={12} sm={12}>
                        <div className="footer-base-font">
                            <p>
                                版权所有：用友网络科技股份有限公司 2016 京ICP备05007539号-7 京ICP证100714号 京公网安备1101080209224号
                            </p>
                            <p>
                                Made with by FED team
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            
        );
    }
}

export default Footer;