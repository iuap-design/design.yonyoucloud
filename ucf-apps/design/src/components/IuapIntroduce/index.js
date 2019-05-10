import React, { Component } from 'react';
import { Button,Row,Col} from 'tinper-bee';
import introduce from 'images/introduce.png';
import './index.less';

class IuapIntroduce extends Component {
    render() {
        return (
            <div className="iuap">
                <Row className='iuap-design'>
                    <Col md={5} sm={5}>
                        <p className="iuap-design-h1">iuap design</p>
                        <p className="iuap-design-ct">一套面向企业数字化的用户体验系统，基于简、晰、智、敏的模块化设计理念提供通用设计资源、UI 组件、场景化模板等研发资产，让设计人员及开发者专注于极致体验。</p>
                        <div className='iuap-design-btns'>
                            <Button className='start'><a href="https://design.yonyoucloud.com/tinper-bee">开始使用</a></Button>
                            <Button className='github'><a target="_blank" href="https://github.com/iuap-design">GitHub</a></Button>
                        </div>
                    </Col>
                    <Col md={7} sm={7} className="pic">
                        <img src={introduce}/>
                    </Col>
                </Row>
                <div className="mob-iuap-design">
                     <div className="pic-div">
                        <img className="pic" src={introduce}/>
                    </div>
                    <div className="mob-iuap-ct" >
                        一套面向企业数字化的用户体验系统，基于简、晰、智、敏的模块化设计理念提供通用设计资源、UI 组件、场景化模板等研发资产，让设计人员及开发者专注于极致体验。
                    </div>
                    <div className="mob-btns">
                        <Button className="mob-start"><a href="https://design.yonyoucloud.com/tinper-bee">开始使用</a></Button>
                        <Button className="mob-github"><a target="_blank" href="https://github.com/iuap-design">GitHub</a></Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default IuapIntroduce;