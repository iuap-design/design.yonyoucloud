import React, { Component } from 'react';
//import { actions } from 'mirrorx';
import { Button,Row,Col } from 'tinper-bee';
import './index.less';

class IuapIntroduce extends Component {
    render() {
        return (
            // <div className="IuapIntro-content-left">
            //     <div className="IuapIntro-content-font">
            //         <p className="IuapIntro-content-title">iuap design2.0</p><br/>
            //         <p className="IuapIntro-content-p">专业的B端业务设计体系,基于React.js的完整组件化解决方案及最佳实践</p>
            //     </div>
            //     <div className="IuapIntroduce-buttons">
            //         <Button colors="primary" onclick={this.handleClick}>开始使用</Button>
            //         <Button colors="primary" onclick={this.handleClick}>GitHub</Button>
            //         <Button colors="primary" onclick={this.handleClick}>开始使用</Button>
            //     </div> 
            // </div>
            <Row className='iuap-design'>
                <Col md={5}>
                    <p className="iuap-design-h1">iuap design2.0</p><br/>
                    <p className="iuap-design-ct">专业的B端业务设计体系,基于React.js的完整组件化解决方案及最佳实践</p>
                    <div className='iuap-design-btns'>
                        <Button>1</Button>
                        <Button>2</Button>
                        <div className='iuap-design-btn-bottom'>
                            <Button>3</Button>
                        </div> 
                    </div>
                </Col>
                <Col md={7}>
                    <img src=''></img>
                </Col>
            </Row>
        );
    }
}

export default IuapIntroduce;
