import React, { Component } from 'react';
import { Row,Col } from 'tinper-bee'; 
import './index.less';
class LanguageAbility extends Component {
    render() {
        return (
                <Row className="lang-ability">
                <Col md={12}> 
                    <div>
                        <p className="lang-title">
                            设计语言能力
                        </p>
                    </div>  
                </Col>
                <Col className="lang-base-first" md={3} xs={12} sm={12}>
                    <div>
                         <img className="white-radius" src="//design.yonyoucloud.com/static/tinper-bee/logo/LanguageAbility1.png"/>
                         <p style={{fontSize:20}}>明确清晰</p>
                    </div>
                </Col>
                <Col className="lang-base-second"  md={3} xs={12} sm={12}>
                    <div>
                    <img className="white-radius" src="//design.yonyoucloud.com/static/tinper-bee/logo/LanguageAbility2.png"/>
                        <p  style={{fontSize:20}}>灵活简易</p>
                    </div>
                </Col>
                <Col className="lang-base-third" md={3} xs={12} sm={12}>
                    <div>
                    <img className="white-radius" src="//design.yonyoucloud.com/static/tinper-bee/logo/LanguageAbility3.png"/>
                        <p style={{fontSize:20}}>标准一致</p>
                    </div>
                </Col>
                <Col className="lang-base-forth" md={3} xs={12} sm={12}>
                    <div>
                    <img className="white-radius" src="//design.yonyoucloud.com/static/tinper-bee/logo/LanguageAbility4.png"/>
                        <p style={{fontSize:20}}>活力美观</p>
                    </div>
                </Col>
            </Row>   
        );
    }
}

export default LanguageAbility;