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
                        <p className="iuap-design-ct">专业的B端业务设计体系，基于React.js的完整组件化解决方案及最佳实践</p>
                        <div className='iuap-design-btns'>
                            <Button className='start'  onClick={()=>{window.location.href="https://design.yonyoucloud.com/tinper-bee/"}}>开始使用</Button>
                            <Button className='github' onClick={()=>{window.location.href="https://github.com/iuap-design"}}>GitHub</Button>
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