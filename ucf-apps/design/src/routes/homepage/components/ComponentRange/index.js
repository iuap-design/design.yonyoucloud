import React, { Component } from 'react';
//import { actions } from 'mirrorx';
import { Tile } from 'tinper-bee'; 
import './index.less';
import enterprise from 'images/enterprise.png';
import keyboardAid from 'images/keyboardAid.png';
import globalization from 'images/globalization.png';
import compability from 'images/compability.png';
import customization from 'images/customization.png';

class ComponentRange extends Component {
    render() {
        return (
            <div className="component-range-content">
                <div className="component-range-title">基础组件全覆盖60+</div>
                <div className="component-range-aspect">
                   <Tile className='component-range-aspect-tile' Component="a" href=""  >
                   <div>
                       <img src={enterprise}/><br/>
                       <p>企业级</p>
                   </div>
                       
                   </Tile>
                   <Tile Component="a" href=""  className='component-range-aspect-tile'>
                       <img src={keyboardAid}/><br/>
                       <p>全键盘支持</p>
                   </Tile>
                   <Tile  Component="a" href=""  className='component-range-aspect-tile'>
                   <img src={globalization}/><br/>
                       <p>国际化</p>
                   </Tile>
                   <Tile  Component="a" href="" className='component-range-aspect-tile' >
                   <img src={compability}/><br/>
                       <p>兼容性</p>
                   </Tile>
                   <Tile border="false" Component="a" href=""  className='component-range-aspect-tile'>
                   <img src={customization}/><br/>
                       <p>定制化</p>
                   </Tile>
                </div>
            </div>
        );
    }
}

export default ComponentRange;