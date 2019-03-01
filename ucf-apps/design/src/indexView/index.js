import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import IuapIntroduce from '../components/IuapIntroduce';
import LanguageAbility from '../components/LanguageAbility';
import ComponentRange from '../components/ComponentRange';
import RichCase from '../components/RichCase';
import DevelopTools from '../components/DevelopTools';
import Footer from '../../../../ucf-common/src/components/Footer';
import './index.less';

class Index extends Component {
    render() { //包含事件按钮 ss
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

export default Index;
