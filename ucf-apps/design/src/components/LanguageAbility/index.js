import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Tile } from 'tinper-bee'; 
import './index.less';
import enterprise from 'images/enterprise.png';
import keyboardAid from 'images/keyboardAid.png';
import globalization from 'images/globalization.png';
import compability from 'images/compability.png';
import customization from 'images/customization.png';

class LanguageAbility extends Component {
    render() {
        return (
            <div className="lang-ability">
                <div className="lang-title">设计语言能力</div>
                <div className="lang-content">iuap design 是一个企业级前端集成解决方案，基于开源前端技术平台tinper上，给用户提供前端模型框架kero、在线模板中心、强大的在线可视化页面设计器以及丰富的企业应用开发架构方案，并且提供技术咨询和技术培训，帮助用户快速构建应用。</div>
                <div className="lang-aspect">
                   <Tile  Component="a" href="" style={{width:200,height:300}}>
                   <div>
                       <p>在线设计器</p>
                   </div>
                       
                   </Tile>
                   <Tile Component="a" href="" style={{width:200,height:300}}>
                       <p>丰富的模板库</p>
                   </Tile>
                   <Tile  Component="a" href="" style={{width:200,height:300}}>
                       <p>MVVM框架</p>
                   </Tile>
                   <Tile  Component="a" href="" style={{width:200,height:300}}>
                       <p>MVVM框架</p>
                   </Tile>
                </div>
            </div>
        );
    }
}

export default LanguageAbility;