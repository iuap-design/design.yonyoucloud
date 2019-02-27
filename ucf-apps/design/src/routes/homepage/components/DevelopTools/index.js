import React, { Component } from 'react';
//import { actions } from 'mirrorx';
import { Button } from 'tinper-bee';

import './index.less';

class DevelopTools extends Component {
    render() { //包含事件按钮
        return (
            <div className="middle4">
                <div>
                    <p>标准化业务组件开发工具</p>
                </div>
                <div>
                    <Button onClick={this.handleClick}>业务组件</Button>
                    <Button onClick={this.handleClick}>参照组件</Button>  
                </div>
                <div className="org-buttons">
                    <Button onClick={this.handleClick}>BPM流程组件</Button>
                    <Button onClick={this.handleClick}>附件管理组件</Button>
                    <Button onClick={this.handleClick}>附件管理组件</Button>
                    <Button onClick={this.handleClick}>权限组件</Button>
                    <Button onClick={this.handleClick}>国际化相关能力组件</Button>
                    <Button onClick={this.handleClick}>国际化相关能力组件</Button>
                    <Button onClick={this.handleClick}>权限组件</Button>
                    <Button onClick={this.handleClick}>国际化相关能力组件</Button>
                    <Button onClick={this.handleClick}>国际化相关能力组件</Button>
                </div>
                <div>
                    <Button onClick={this.handleClick}>查看更多</Button>
               </div>
            </div>
        );
    }
}

export default DevelopTools;