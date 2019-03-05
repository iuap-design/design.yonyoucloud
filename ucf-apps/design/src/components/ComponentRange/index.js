import React, { Component } from 'react';
import {Row,Col,Tile} from 'tinper-bee';
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
                   <Tile  border={false} className='component-range-aspect-tile' style={{border:false}} Component="a" href=""  >
                        <div className="cont"> 
                           <img src={enterprise}/>
                           <span>企业级</span>
                        </div>
                   </Tile>
                   <Tile  border={false} Component="a" href=""  className='component-range-aspect-tile'>
                       <div className="cont"> 
                           <img src={keyboardAid}/>
                           <span>全键盘支持</span>
                       </div>
                   </Tile>
                   <Tile   border={false} Component="a" href=""  className='component-range-aspect-tile'>
                       <div className="cont"> 
                           <img src={globalization}/>
                           <span>国际化</span>
                       </div>
                   </Tile>
                   <Tile   border={false}  Component="a" href="" className='component-range-aspect-tile' >
                        <div className="cont">
                            <img src={compability}/>
                            <span>兼容性</span>
                        </div>   
                   </Tile>
                   <Tile border={false} Component="a" href=""  className='component-range-aspect-tile'>
                       <div  className="cont">
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