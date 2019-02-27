import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button } from 'tinper-bee';
import './index.less';

class Middle4 extends Component {
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
                    <Button onClick={this.handleClick}>查看案例</Button>
                    <Button onClick={this.handleClick}>查看案例</Button>
                    <Button onClick={this.handleClick}>查看案例</Button>
                    <Button onClick={this.handleClick}>查看案例</Button>
                    <Button onClick={this.handleClick}>查看案例</Button>
                    <Button onClick={this.handleClick}>查看案例</Button>
                    <Button onClick={this.handleClick}>查看案例</Button>
                    <Button onClick={this.handleClick}>查看案例</Button>
                    <Button onClick={this.handleClick}>查看案例</Button>
                </div>
                <div>
                    <Button onClick={this.handleClick}>查看案例</Button>
                </div>
            </div>
        );
    }
}

export default Middle4;