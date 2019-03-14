import React, { Component } from 'react';
import { Row,Col } from 'tinper-bee';
import './index.less';
import { Icon } from 'tinper-bee';
import mail from 'images/mail.png';
import address from 'images/address.png';
class Footer extends Component {
    render() { 
        return (
            <div className="footer">
                <Row className='footer-top'>
                    <Col className="footer-top-item" md={3} xs={12} sm={6} >
                        <p><b>相关资源</b></p>
                        <ul>
                            <li>
                                <a target="_blank" href="https://mock.yonyoucloud.com/">Mock 接口管理平台</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://package.yonyoucloud.com/#/">YNPM-用友Node镜像服务</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/tinper-bee/bee-tools">bee-tools 基础组件开发工具</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/tinper-acs/ac-tools">ac-tools 业务组件开发工具</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/tinper-acs/ac-tools">YYIMSDK 即时通讯 SDK</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.yuque.com/ucf-web/book">UCF-WEB 微前端框架</a>
                            </li>
                            <li>
                                <a target="_blank" href="http://tinper.org/webide/">Moy 框架在线示例</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/lebra/lebra-components">lebra-components 移动组件库</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer-top-item" md={3} xs={12} sm={6}>
                        <p><b>社区</b></p>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://github.com/iuap-design/blog/issues">云平台体验技术团队BLOG</a>
                                </li>
                                <li>
                                    {/* <a href="">tinper 官方技术交流群</a> */}
                                    tinper 官方技术交流群
                                </li>
                            </ul>
                    </Col>
                    <Col className="footer-top-item" md={3} xs={12} sm={6}>
                        <p><b>帮助</b></p>
                        <ul>
                            <li>
                                <a target="_blank" href="https://github.com/tinper-bee">组件Github 源码</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/iuap-design/tinper-bee/releases">更新记录</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/iuap-design/tinper-bee/issues">常见问题</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="footer-top-item" md={3} xs={12} sm={6}>
                        <p><b>联系我们</b></p>
                            <ul>
                                <li>
                                    <img src='//iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/logo/address.png'/> 北京市海淀区北清路68号用友产业园
                                </li>
                                <li><img src='//iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/logo/mail.png'/> guoyff@yonyou.com</li>
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
                            <p className="copy-right" >
                                版权所有：用友网络科技股份有限公司 2016 京ICP备05007539号-7 京ICP证100714号 京公网安备1101080209224号
                            </p>
                            <p className="produ">
                                Powered by yonyou
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            
        );
    }
}

export default Footer;