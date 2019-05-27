import React, { Component } from 'react';
import Banner from '../components/Banner';
import Technology from '../components/Technology';
import Service from '../components/Service';
import Case from '../components/Case';
import Footer from '../components/Footer';
import './index.less';

class Index extends Component {
    render() { 
        return (
            <div className="home" >
                <Banner/>
                <Technology/>
                <Service/>
                <Case/>
                <Footer/>
            </div>
        );
    }
}

export default Index;