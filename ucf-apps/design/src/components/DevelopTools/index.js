import React, { Component } from 'react';
import {Row,Col,Button} from 'tinper-bee';
import './index.less';

class DevelopTools extends Component {
    render() { //包含事件按钮
        return (
            <Row className="develop-tools">
                <Col className="tools-title" md={10}>
                标准化业务组件开发工具
                </Col>
                <Col  md={10}>
                <Button className="btn-Color">业务组件</Button>
                <Button>参照组件</Button>
                </Col>
                <Col md={4}>  
                    <Button>BPM流程组件</Button>
                </Col>
                <Col md={4}>  
                    <Button>附件管理组件</Button>
                </Col>
                <Col md={4}>  
                    <Button>附件管理组件</Button>
                </Col>
                <Col md={4}>  
                    <Button>权限组件</Button>
                </Col>
                <Col md={4}>  
                    <Button>国际化相关能力组件</Button>
                </Col>
                <Col md={4}>  
                    <Button>国际化相关能力组件</Button>
                </Col>
                <Col md={4}>  
                    <Button>权限组件</Button>
                </Col>
                <Col md={4}>  
                    <Button>国际化相关能力组件</Button>
                </Col>
                <Col md={4}>  
                    <Button>国际化相关能力组件</Button>
                </Col>
            </Row>
        );
    }
}

export default DevelopTools;