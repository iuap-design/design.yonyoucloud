import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button } from 'tinper-bee';
import richcase from 'images/richcase.png';
//import {AcButton} from 'ac-button';
import './index.less';


class RichCase extends Component {
    render() { //包含事件按钮
        return (
           <div className="richcase-content">
                <div className="para1"/>
                <div className="img-div" >
                    <img className="pic" src={richcase}/>
                </div>
                <div className="richcase-text">
                    <p className="richcase-title-top">丰富案例覆盖典型</p>
                    <p className="richcase-title-bottom">业务场景</p>
                    <Button className="richcase-btn"  onClick={this.handleClick}>查看案例</Button>
                </div>
            </div>
        );
    }
}

export default RichCase;