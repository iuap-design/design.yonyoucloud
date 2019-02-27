import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button } from 'tinper-bee';
import './index.less';

class RichCase extends Component {
    render() { //包含事件按钮
        return (
            <div className="richcase-content">
                <p className="richcase-content-title">丰富案例覆盖典型业务场景</p><br/>
                <Button className="richcase-button" colors="primary" onClick={this.handleClick}>查看案例</Button>
            </div>
        );
    }
}

export default RichCase;