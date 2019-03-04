import React, { Component } from 'react';
import { Row,Col } from 'tinper-bee'; 
import './index.less';
//设计稿内容还未定
class LanguageAbility extends Component {
    render() {
        return (
            // <div className="lang-ability">
            //     <div className="lang-title">设计语言能力</div>
            //     <div className="lang-content">iuap design 是一个企业级前端集成解决方案，基于开源前端技术平台tinper上，给用户提供前端模型框架kero、在线模板中心、强大的在线可视化页面设计器以及丰富的企业应用开发架构方案，并且提供技术咨询和技术培训，帮助用户快速构建应用。</div>
            //     <div className="lang-aspect">
            //            <p >在线设计器         丰富的模板库            MVVM框架         MVVM框架</p>  
            //     </div>                 
            // </div>
            <Row className="lang-ability">
                <Col md={12} >
                    <p className="lang-title">
                    设计语言能力
                    </p>
                </Col>
                <Col md={12}>
                    <p className="lang-content">
                        iuap design 是一个企业级前端集成解决方案，基于开源前端技术平台tinper上，给用户提供前端模型框架kero、在线模板中心、强大的在线可视化页面设计器以及丰富的企业应用开发架构方案，并且提供技术咨询和技术培训，帮助用户快速构建应用。
                    </p>
                </Col>
                <Col className="lang-base-first" md={3}>
                    在线设计器
                </Col>
                <Col md={3}  className="lang-base-second">
                    丰富的模板库    
                </Col>
                <Col md={3}  className="lang-base-third">
                    MVVM框架 
                </Col>
                <Col className="lang-base-forth" md={3}>
                    MVVM框架 
                </Col>
            </Row>
        );
    }
}

export default LanguageAbility;