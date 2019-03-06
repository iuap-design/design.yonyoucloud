import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import IuapIntroduce from '../components/IuapIntroduce';
import LanguageAbility from '../components/LanguageAbility';
import ComponentRange from '../components/ComponentRange';
import RichCase from '../components/RichCase';
import DevelopTools from '../components/DevelopTools';
import Footer from 'components/Footer';
import './index.less';

class Index extends Component {
    render() { 
        return (
            <div className="home" >
                <NavBar activeKey='index'/>
                <IuapIntroduce/>
                <LanguageAbility/>
                <ComponentRange/>
                <RichCase/>
                <DevelopTools/>
                <Footer/>
            </div>
        );
    }
}

export default Index;
