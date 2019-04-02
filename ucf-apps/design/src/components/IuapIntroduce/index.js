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
                        <p className="iuap-design-ct">一套面向数字化企业的用户体验解决方案，为企业设计人员及开发者提供通用设计资源、标准React UI 组件库及场景化的典型案例等研发资产。</p>
                        <div className='iuap-design-btns'>
                            <Button className='start'  onClick={()=>{window.open('//'+window.location.host+'/tinper-bee')}}>开始使用</Button>
                            <Button className='github' onClick={()=>{window.open("https://github.com/iuap-design")}}>GitHub</Button>
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
                        专业的B端业务设计体系，基于React.js的完整组件化解决方案及最佳实践
                    </div>
                    <div className="mob-btns">
                        <Button className="mob-start" onClick={()=>{window.location.href="https://design.yonyoucloud.com/tinper-bee/"}}>开始使用</Button>
                        <Button className="mob-github" onClick={()=>{window.location.href="https://github.com/iuap-design"}}>GitHub</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default IuapIntroduce;