import React, { Component } from 'react';
import { actions } from 'mirrorx';
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
                   <Tile className='component-range-aspect-tile' style={{border:false}} Component="a" href=""  >
                        <div className="a"> 
                           <img src={enterprise}/>
                           <span>企业级</span>
                        </div>
                   </Tile>
                   <Tile Component="a" href=""  className='component-range-aspect-tile'>
                       <div className="a"> 
                           <img src={keyboardAid}/>
                           <span>全键盘支持</span>
                       </div>
                   </Tile>
                   <Tile  Component="a" href=""  className='component-range-aspect-tile'>
                       <div className="a"> 
                           <img src={globalization}/>
                           <span>国际化</span>
                       </div>
                   </Tile>
                   <Tile  Component="a" href="" className='component-range-aspect-tile' >
                        <div className="a">
                            <img src={compability}/>
                            <span>兼容性</span>
                        </div>   
                   </Tile>
                   <Tile border="false" Component="a" href=""  className='component-range-aspect-tile'>
                       <div  className="a">
                           <img src={customization}/>
                           <span>定制化</span>
                       </div>
                   </Tile>
                </div>
            </div>
        );
    }
}

export default ComponentRange;