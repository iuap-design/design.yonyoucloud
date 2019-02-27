import React, { Component } from 'react';
import NavBar from '../NavBar';
import IuapIntroduce from '../IuapIntroduce';
import LanguageAbility from '../LanguageAbility';
import ComponentRange from '../ComponentRange';
import RichCase from '../RichCase';
import DevelopTools from '../DevelopTools';
import Footer from '../Footer';
import './index.less';

class footer extends Component {
    render() { //包含事件按钮 
        return (
            <div className="home" >
                <NavBar/>
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

export default footer;