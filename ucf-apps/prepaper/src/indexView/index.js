import React, { Component } from 'react';
import PrePage from '../components/PrePage';
import NavBar from '../components/NavBar';
import './index.less';

class Index extends Component {
    render() { 
        return (
            <div className="home" >
                <NavBar activeKey='index'/>
                <PrePage/>
            </div>
        );
    }
}

export default Index;
