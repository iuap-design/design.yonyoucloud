import React, { Component } from 'react';
import Footer from '../Footer';
import './index.less';


class footer extends Component {
    render() { //包含事件按钮 
        return (
            <div className="home">
              <Footer/>
            </div>
        );
    }
}

export default footer;
