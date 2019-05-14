import React, { Component } from 'react';
import { Button,Row,Col} from 'tinper-bee';
import richcase from 'images/richcase.png';
import './index.less';
class PrePage extends Component {
    render() {
        return (
            <div className="pre">
                <Row className='pre-design'>
                    <Col md={5} sm={5}>
                        <p className="pre-design-h1">iuap design</p>
                        <p className="pre-design-ct">丰富案例覆盖典型业务场景</p>
                        <div className='pre-design-btns'>
                            {/* <Button className='start'><a  href="/case/preview" target="_blank">预览</a></Button> */}
                            <Button className='start'><a  href="/case/preview" target="_blank">预览</a></Button>
                            <Button className='github'><a target="_blank" href="http://git.yonyou.com/iuap-pap-demo/iuap-pap-demo-fe">查看源码</a></Button>
                        </div>
                    </Col>
                    <Col md={7} sm={7} className="pic">
                        <img src={richcase}/>
                    </Col>
                </Row>
                <div className="mob-pre">
                     <div className="pic-div">
                         <img src={richcase}/>
                    </div>
                    <div className="mob-pre-h1">
                        iuap design
                    </div>
                    <div className="mob-pre-ct" >
                        丰富案例覆盖典型业务场景
                    </div>
                    <div className="mob-btns">
                        <Button className="mob-start"><a href="/case/preview" target="_blank">预览</a></Button>
                        <Button className="mob-github"><a target="_blank" href="http://git.yonyou.com/iuap-pap-demo/iuap-pap-demo-fe">查看源码</a></Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default PrePage;