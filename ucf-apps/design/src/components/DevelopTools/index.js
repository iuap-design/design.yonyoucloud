import React, { Component } from 'react';
import {Row,Col,Button} from 'tinper-bee';
import './index.less';

class DevelopTools extends Component {
    render() { //包含事件按钮
        return (
            <Row className="develop-tools">
                <col className="tools-title" md={12}>
                标准化业务组件开发工具
                </col>
                <col  md={12}>
                <Button className="btn-color">业务组件</Button>
                <Button>参照组件</Button>
                </col>
                <col md={4}>  
                    <Button>BPM流程组件</Button>
                </col>
                <col md={4}>  
                    <Button>附件管理组件</Button>
                </col>
                <col md={4}>  
                    <Button>附件管理组件</Button>
                </col>
                <col md={4}>  
                    <Button>权限组件</Button>
                </col>
                <col md={4}>  
                    <Button>国际化相关能力组件</Button>
                </col>
                <col md={4}>  
                    <Button>国际化相关能力组件</Button>
                </col>
                <col md={4}>  
                    <Button>权限组件</Button>
                </col>
                <col md={4}>  
                    <Button>国际化相关能力组件</Button>
                </col>
                <col md={4}>  
                    <Button>国际化相关能力组件</Button>
                </col>
            </Row>
        );
    }
}

export default DevelopTools;