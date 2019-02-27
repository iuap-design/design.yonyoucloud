import React, { Component } from 'react';
import { actions } from 'mirrorx';
import { Button } from 'tinper-bee';
import './index.less';

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <div className="navcontainer">
                    <div id="a1">
                    
                    </div>
                    <div id="a2">
                      
                    </div>
                    <div id="a3">
                        <ul id="nav">
                            <li><a href="">首页</a></li>
                            <li><a href="">设计语言</a></li>
                            <li><a href="">基础组件</a></li>
                            <li><a href="">应用组件</a></li>
                            <li><a href="">典型案例</a></li>
                        </ul>
                    </div>
                </div>  
            </div>
        );
    }
}

export default NavBar;