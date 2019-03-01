import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button } from 'tinper-bee';
//import {AcButton} from 'ac-button';
import './index.less';


class RichCase extends Component {
    render() { //包含事件按钮
        return (
           <div className="richcase-content">
                <p className="richcase-title">丰富案例覆盖典型业务场景</p>
                 <Button className="richcase-btn"  onClick={this.handleClick}>查看案例</Button>
            </div>
        );
    }
}

export default RichCase;