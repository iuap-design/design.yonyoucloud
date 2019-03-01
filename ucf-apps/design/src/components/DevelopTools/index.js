import React, { Component } from 'react';
import {Row,Col,Button,Tile} from 'tinper-bee';
import './index.less';

class DevelopTools extends Component {
    render() { //包含事件按钮
        return (
            <Row className="delop-tool">
                <Col md={12}> 
                    <p  className="tool-title" >标准化业务组件开发工具</p>
                </Col>
                <Col md={12}>
                <Button className="busi-comp-btn">业务组件</Button>
                <Button className="ref-comp-btn">参照组件</Button>
                </Col>
                <Col md={4}>  
                    <Tile>BPM流程组件</Tile>
                </Col>
                <Col md={4}>  
                    <Tile>附件管理组件</Tile>
                </Col>
                <Col md={4}>  
                    <Tile>附件管理组件</Tile>
                </Col>
                <Col md={4}> 
                    <Tile>权限组件</Tile>
                </Col>
                <Col md={4}>  
                    <Tile>国际化相关能力组件</Tile>
                </Col>
                <Col md={4}>  
                    <Tile>国际化相关能力组件</Tile>
                </Col>
                <Col md={4}> 
                    <Tile>权限组件</Tile>
                </Col>
                <Col md={4}>  
                    <Tile>国际化相关能力组件</Tile>
                </Col>
                <Col md={4}>  
                    <Tile>国际化相关能力组件</Tile>
                </Col>
                <Col md={12}>
                    <Button  ClassName="tool-more-btn" >查看更多</Button>
                </Col>    
            </Row>
        );
    }
}
export default DevelopTools;