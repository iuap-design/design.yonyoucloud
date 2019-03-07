import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button } from 'tinper-bee';
import richcase from 'images/richcase.png';
import './index.less';


class RichCase extends Component {
    render() {
        return (
           <div className="richcase-content">
                <div className="para1"/>
                <div className="img-div" >
                    <img className="pic" src={richcase}/>
                </div>
                <div className="richcase-text">
                    <p className="richcase-title">丰富案例覆盖典型业务场景</p>
                    <Button className="richcase-btn"  onClick={()=>{window.location.href="https://design.yonyoucloud.com/case/preview"}}>查看案例</Button>
                </div>
            </div>
        );
    }
}

export default RichCase;