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
                        <p className="pre-design-h1">蜂巢，基于 iUAP Design 的典型案例系统</p>
                        <p className="pre-design-ct">从大量业务实践场景提炼而来，结合 iUAP 专属云应用平台门户，提供了包含A1单表查询、A2单表行内编辑、A3单表弹窗编辑、B1左树右表、B2一主一子、B3一主多子、参照示例等经典常用的单据模式，源码开放，开发者可参考借鉴。</p>
                        <p className="pre-design-acount">在线系统提供两个演示账号，普通账号：demo/123qwe，管理员账号：admin/123456b。</p>
                        <div className='pre-design-btns'>
                            {/* <Button className='start'><a  href="/case/preview" target="_blank">预览</a></Button> */}
                            <Button className='start'><a  href="/case/preview" target="_blank">预览</a></Button>
                            <Button className='github'><a target="_blank" href="https://github.com/yonyou-iuap/iuap-pap-demo-fe">查看源码</a></Button>
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
                        蜂巢，基于 iUAP Design 的典型案例系统
                    </div>
                    <div className="mob-pre-ct" >
                        从大量业务实践场景提炼而来，结合 iUAP 专属云应用平台门户，提供了包含A1单表查询、A2单表行内编辑、A3单表弹窗编辑、B1左树右表、B2一主一子、B3一主多子、参照示例等经典常用的单据模式，源码开放，开发者可参考借鉴。
                    <p>在线系统提供两个演示账号，普通账号：demo/123qwe，管理员账号：admin/123456b。</p>
                    </div>
                    <div className="mob-btns">
                        <Button className="mob-start"><a href="/case/preview" target="_blank">预览</a></Button>
                        <Button className="mob-github"><a target="_blank" href="http://git.yonyou.com/iuap-pap-demo/iuap-pap-demo-fe">查看源码</a></Button>
                        <a className="mobstart"></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default PrePage;