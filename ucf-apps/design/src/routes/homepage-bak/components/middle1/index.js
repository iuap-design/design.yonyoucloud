import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button } from 'tinper-bee';
import './index.less';

class Middle1 extends Component {
    render() {
        return (
            <div className="middle1">
                <div>iuap design2.0</div>
                <div>专业的B端业务设计体系,基于React.js的完整组件化解决方案及最佳实践</div>
                <div className="iuap-buttons">
                    <Button onclick={this.handleClick}>开始使用</Button>
                    <Button onclick={this.handleClick}>GitHub</Button>
                    <Button onclick={this.handleClick}>开始使用</Button>
                </div>
            </div>
        );
    }
}

export default Middle1;
