import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import Case from '../components/Case';
import './index.less';

class Index extends Component {
    render() { 
        return (
            <div className="home" >
                <NavBar activeKey='5'/>
                <Case/>
            </div>
        );
    }
}

export default Index;
