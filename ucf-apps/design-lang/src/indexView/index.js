import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import './index.less';

class Index extends Component {
    render() { 
        return (
            <div className="home" >
                <NavBar activeKey='design'/>
                <Footer/>
            </div>
        );
    }
}

export default Index;
