import React, { Component } from 'react';
import { actions } from 'mirrorx';
import './index.less';

class Middle3 extends Component {
    render() {
        return (
            <div className="middle3">
                <div className="title">基础组件全覆盖60+</div>
                <div className="a1">
                    <ul>
                        <li>
                            <div ><img src=""></img></div>
                            <div>企业级</div>
                        </li>
                        <li>
                            <div ><img src="" ></img></div>
                            <div>全键盘支持</div>
                        </li>
                        <li>
                            <div ><img src=""></img></div>
                            <div>国际化</div>
                        </li>
                        <li>
                            <div><img src=""></img></div>
                            <div>兼容性</div>
                        </li>
                        <li>
                            <div ><img src=""></img></div>
                            <div>定制化</div>
                        </li>
                    </ul>  
                </div>
            </div>
        );
    }
}

export default Middle3;