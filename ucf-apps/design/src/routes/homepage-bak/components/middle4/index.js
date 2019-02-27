import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button } from 'tinper-bee';
import './index.less';

class Middle4 extends Component {
    render() { //包含事件按钮
        return (
            <div className="middle4">
                <div>丰富案例覆盖典型业务场景</div>
                <div className="org-buttons">
                    <Button colors="primary" onClick={this.handleClick}>查看案例</Button>
                </div>
            </div>
        );
    }
}

export default Middle4;