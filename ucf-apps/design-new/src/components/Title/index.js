import React, { Component } from 'react';
import './index.less';

class Title extends Component {
    render() { 
        return (
            <h1 className="title-h1">
                {this.props.title}
            </h1>
        );
    }
}

export default Title;