import React, { Component } from 'react';
import {Row,Col,Tile} from 'tinper-bee';
import './index.less';
import enterprise from 'images/enterprise.png';
import keyboardAid from 'images/keyboardAid.png';
import globalization from 'images/globalization.png';
import compability from 'images/compability.png';
import customization from 'images/customization.png';
class ComponentRange extends Component {
    render() {
        return (
            <div className="component-range-content">
            <Row >
                <Col className="component-range-title" md={12}>基础组件全覆盖60+</Col>
           </Row>
            <Row>
            <Col className="component-range-aspect  firm" md={2} sm={4} xs={6}>
                <Tile  border={true} className='component-range-aspect-tile' style={{border:false}} Component="a" href=""  >
                    <div className="cont"> 
                        <img src={enterprise}/>
                        <span>企业级特性</span>
                    </div>
                </Tile>
            </Col>
            <Col className="component-range-aspect" md={2} sm={4} xs={6}>
                <Tile  border={true} Component="a" href=""  className='component-range-aspect-tile'>
                    <div className="cont"> 
                        <img src={keyboardAid}/>
                        <span>全键盘支持</span>
                    </div>
                </Tile>
            </Col>
            <Col className="component-range-aspect"  md={2} sm={4} xs={6}>
                <Tile   border={true} Component="a" href=""  className='component-range-aspect-tile'>
                    <div className="cont"> 
                        <img src={globalization}/>
                        <span>国际化方案</span>
                    </div>
                </Tile>
            </Col>
            <Col className="component-range-aspect"  md={2} sm={4} xs={6}>
                <Tile   border={true}  Component="a" href="" className='component-range-aspect-tile' >
                    <div className="cont">
                        <img src={compability}/>
                        <span>多端兼容性</span>
                    </div>   
                </Tile>
            </Col>
            <Col className="component-range-aspect  order"  md={2} sm={4} xs={6}>
                <Tile border={true} Component="a" href=""  className='component-range-aspect-tile'>
                    <div  className="cont">
                        <img src={customization}/>
                        <span>定制化主题</span>
                    </div>
                </Tile>
            </Col>
           </Row>
        </div>
            
        );
    }
}

export default ComponentRange;