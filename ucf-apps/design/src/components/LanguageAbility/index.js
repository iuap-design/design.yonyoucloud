import React, { Component } from 'react';
import { Row,Col } from 'tinper-bee'; 
import './index.less';
import red from 'images/red.png';
import white from 'images/white.png';
//设计稿内容还未定
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
                <Col md={12}>
                    <div>
                        <p className="lang-content">
                            iuap design 是一个企业级前端集成解决方案，基于开源前端技术平台tinper上，给用户提供前端模型框架kero、在线模板中心、强大的在线可视化页面设计器以及丰富的企业应用开发架构方案，并且提供技术咨询和技术培训，帮助用户快速构建应用。
                        </p>
                    </div>
                </Col>
                <Col className="lang-base-first" md={2}>
                    <div>
                         <img src={red}/>
                         <p>明确清晰</p>
                    </div>
                </Col>
                <Col md={2}  className="lang-base-second">
                    <div>
                        <img src={white}/>
                        <p>高效可靠</p>
                    </div>
                </Col>
                <Col md={2}  className="lang-base-third">
                    <div>
                        <img src={white}/>
                        <p>灵活简易</p>
                    </div>
                </Col>
                <Col className="lang-base-forth" md={2}>
                    <div>
                        <img src={white}/>
                        <p>智能顺心</p>
                    </div>
                </Col>
                <Col className="lang-base-fifth" md={2}>
                    <div>
                        <img src={white}/>
                        <p>标准一致</p>
                    </div>
                </Col>
                <Col className="lang-base-sixth" md={2}>
                    <div>
                        <img src={white}/>
                        <p>活力美观</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default LanguageAbility;