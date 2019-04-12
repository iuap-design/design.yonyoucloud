import React, { Component } from 'react';
import { Row,Col,Tile } from 'tinper-bee';
import './index.less';

const baseUrl = '//design.yonyoucloud.com/static/tinper-bee/logo/'

const imgs={
    '用友网络nccloud':baseUrl+'用友网络nccloud'+'.png',
    '中兴通讯':baseUrl+'中兴通讯'+'.png',
    '三一重工':baseUrl+'三一重工'+'.png',
    '象屿集团':baseUrl+'象屿集团'+'.png',
    '郎酒CRM平台':baseUrl+'郎酒CRM平台'+'.png',
    '杭州绿城':baseUrl+'杭州绿城'+'.png',
    '台湾华新丽华-MES 系统':baseUrl+'台湾华新丽华-MES 系统'+'.png',
    '杭州路桥':baseUrl+'杭州路桥'+'.png',
    '江铜贵溪冶炼厂-智能工厂':baseUrl+'江铜贵溪冶炼厂-智能工厂'+'.png',
    '用友网络-U8Cloud 数据中心':baseUrl+'用友网络-U8Cloud 数据中心'+'.png',
    '尚层装饰':baseUrl+'尚层装饰'+'.png',
    '四维图新':baseUrl+'四维图新'+'.png',
    '全友数字营销系统':baseUrl+'全友数字营销系统'+'.png',
    '南通化轻物流系统':baseUrl+'南通化轻物流系统'+'.png',
    '用友网络-精智IOT 后台管理系统':baseUrl+'用友网络-精智IOT 后台管理系统'+'.png',
    '用友网络-开发者中心':baseUrl+'用友网络-开发者中心'+'.png',
    '用友网络-专属云应用平台':baseUrl+'用友网络-专属云应用平台'+'.png',
    '用友网络-开放平台':baseUrl+'用友网络-开放平台'+'.png',
    '用友网络-企业账号中心':baseUrl+'用友网络-企业账号中心'+'.png',
    '用友网络-微服务治理平台':baseUrl+'用友网络-微服务治理平台'+'.png',
    '用友网络-diwork 工作台':baseUrl+'用友网络-diwork 工作台'+'.png',
    '用友网络-NC 工程云':baseUrl+'用友网络-NC 工程云'+'.png',
    '用友网络-NC 司库云':baseUrl+'用友网络-NC 司库云'+'.png',
    '用友网络-用友云平台官网':baseUrl+'用友网络-用友云平台官网'+'.png',
}

class Case extends Component { 

    render() {
        return (
            <div className="case">
                <div className="case-title">
                    <p>客户案例</p>
                </div>
                <div className="case-ctn">
                <Row>
                    {
                        Object.keys(imgs).map((title,index)=>{
                            let newUrl = imgs[title] + "?v=2.0.7";
                            return (
                                <Col className="case-ctn-item"  key={index} lg={2} md={3} sm={4} xs={6}>
                                    <Tile>
                                        <img src={newUrl} title={title} alt={title}/>
                                    </Tile>
                                </Col>
                            )
                        })
                    }
                </Row>
                </div>
            </div>
        )
    }
}
export default Case;