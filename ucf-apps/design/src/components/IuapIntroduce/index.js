import React, { Component } from 'react';
//import { actions } from 'mirrorx';
import { Button,Row,Col } from 'tinper-bee';
import './index.less';
import introduce from 'images/introduce.png';

class IuapIntroduce extends Component {
    render() {
        return (
            <Row className='iuap-design'>
                <Col md={5}>
                    <p className="iuap-design-h1">iuap design2.0</p><br/>
                    <p className="iuap-design-ct">专业的B端业务设计体系,基于React.js的完整组件化解决方案及最佳实践</p>
                    <div className='iuap-design-btns'>
                        <Button className='u-button'>开始使用</Button>
                        <Button>GitHub</Button>
                        <div>
                            <Button className='iuap-design-btn-bottom'>开始使用</Button>
                        </div> 
                    </div>
                </Col>
                <Col md={7}>
                    <img src={introduce}/>
                </Col>
            </Row>
        );
    }
}

export default IuapIntroduce;
