import React, { Component } from 'react';
import { actions } from 'mirrorx';
import './index.less';

class Footer extends Component {
    render() { //包含事件按钮 
        return (
            <div className="footer">
                <div className="footer-top-items">
                    <div className="footer-top-item">
                        <h5>相关资源</h5>
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
                    </div>
                    <div className="footer-top-item">
                        <h5>社区</h5>
                        <ul>
                            <li>
                                <a href="https://github.com/iuap-design/blog/issues">云平台体验技术团队BLOG</a>
                            </li>
                            <li>
                                <a href="">tinper 官方技术交流群</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-top-item">
                        <h5>帮助</h5>
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
                    </div>
                    <div className="footer-top-item">
                    <h5>联系我们</h5>
                        <ul>
                            <li>
                                <a href="">400-6815456</a>
                            </li>
                            <li>zhaoyni@yonyou.com</li>
                            <li>
                                北京市海淀区北清路68号用友产业园iuap事业部
                            </li>
                            <li>
                                周一至周五9:00-17:00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-middle">
                </div>
                <div className="footer-base">
                    <div className="footer-base-font-container">
                        <p className="footer-base-font">
                            版权所有：用友网络科技股份有限公司 2016 京ICP备05007539号-7 京ICP证100714号 京公网安备1101080209224号 Made with by FED team 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
