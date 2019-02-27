import React, { Component } from 'react';
import { actions } from 'mirrorx';
import './index.less';

class Middle2 extends Component {
    render() {
        return (
            <div className="middle2">
                <div className="title">设计语言能力</div>
                <div className="size">iuap design 是一个企业级前端集成解决方案，基于开源前端技术平台tinper上，给用户提供前端模型框架kero、在线模板中心、强大的在线可视化页面设计器以及丰富的企业应用开发架构方案，并且提供技术咨询和技术培训，帮助用户快速构建应用。</div>
                <div className="a1">
                    <ul>
                        <li>
                            <div pic1><img src="" width="100px" height="100px"></img></div>
                            <div>在线设计器</div>
                        </li>
                        <li>
                            <div pic1><img src="" width="100px" height="100px"></img></div>
                            <div>丰富的模板库</div>
                        </li>
                        <li>
                            <div pic1><img src="" width="100px" height="100px"></img></div>
                            <div>MVVM框架</div>
                        </li>
                        <li>
                            <div pic1><img src="" width="100px" height="100px"></img></div>
                            <div>MVVM框架</div>
                        </li>
                    </ul>  
                </div>
            </div>
        );
    }
}

export default Middle2;