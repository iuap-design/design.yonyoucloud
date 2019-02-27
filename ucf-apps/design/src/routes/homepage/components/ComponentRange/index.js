import React, { Component } from 'react';
//import { actions } from 'mirrorx';
import { Tile } from 'tinper-bee'; 
import './index.less';

class ComponentRange extends Component {
    render() {
        return (
            <div className="component-range-content">
                <div className="component-range-title">基础组件全覆盖60+</div>
                <div className="component-range-aspect">
                   <Tile  Component="a" href="" style={{width:200,height:300}}>
                   <div>
                       <img src="D:/iuap_design/iuapdesign/ucf-common/src/static/images/enterprise.png"/><br/>
                       <p>企业级</p>
                   </div>
                       
                   </Tile>
                   <Tile Component="a" href="" style={{width:200,height:300}}>
                       <img src="D:\iuap_design\iuapdesign\ucf-common\src\static\images\keyboardAid.png"/><br/>
                       <p>全键盘支持</p>
                   </Tile>
                   <Tile  Component="a" href="" style={{width:200,height:300}}>
                       <img src="D:\iuap_design\iuapdesign\ucf-common\src\static\images\globalization.png"/><br/>
                       <p>国际化</p>
                   </Tile>
                   <Tile  Component="a" href="" style={{width:200,height:300}}>
                       <img src="D:\iuap_design\iuapdesign\ucf-common\src\static\images\compability.png"/><br/>
                       <p>兼容性</p>
                   </Tile>
                   <Tile  Component="a" href="" style={{width:200,height:300}}>
                       <img src="D:\iuap_design\iuapdesign\ucf-common\src\static\images\customization.png"/><br/>
                       <p>定制化</p>
                   </Tile>
                </div>
            </div>
        );
    }
}

export default ComponentRange;