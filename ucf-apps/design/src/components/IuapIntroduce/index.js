import React, { Component } from 'react';
import { Button,Row,Col } from 'tinper-bee';
import introduce from 'images/introduce.png';
import './index.less';

class IuapIntroduce extends Component {
    render() {
        return (
            <Row className='iuap-design'>
                <Col md={5} sm={5}>
                    <p className="iuap-design-h1">iuap design</p>
                    <p className="iuap-design-ct">专业的B端业务设计体系，基于React.js的完整组件化解决方案及最佳实践</p>
                    <div className='iuap-design-btns'>
                        <Button className='start'>开始使用</Button>
                        <Button className='github'>GitHub</Button>
                    </div>
                    
                </Col>
                
                <Col md={7} sm={7} className="pic">
                    <img src={introduce}/>
                </Col>
            </Row>
        );
    }
}

export default IuapIntroduce;
