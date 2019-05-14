import React, { Component } from 'react';
import { Row,Col,Tile } from 'tinper-bee';
import './index.less';

const baseUrl = '//design.yonyoucloud.com/static/tinper-bee/logo/'

const imgs={
    '用友网络nccloud':baseUrl+'nccloud'+'.png',
    '中兴通讯':baseUrl+'zxtx'+'.png',
    '三一重工':baseUrl+'sany'+'.png',
    '象屿集团':baseUrl+'xyjt'+'.png',
    '郎酒CRM平台':baseUrl+'ljCRM'+'.png',
    '杭州绿城':baseUrl+'hzlc'+'.png',
    '台湾华新丽华-MES 系统':baseUrl+'hxlh'+'.png',
    '杭州路桥':baseUrl+'hzlq'+'.png',
    '江铜贵溪冶炼厂-智能工厂':baseUrl+'gyzngc'+'.png',
    '用友网络-U8Cloud 数据中心':baseUrl+'U8Cloud'+'.png',
    '尚层装饰':baseUrl+'sczs'+'.png',
    '四维图新':baseUrl+'swtx'+'.png',
    '全友数字营销系统':baseUrl+'qyszyxxt'+'.png',
    '南通化轻物流系统':baseUrl+'nthqwlxt'+'.png',
    '用友网络-精智IOT 后台管理系统':baseUrl+'jzIOT'+'.png',
    '用友网络-开发者中心':baseUrl+'kfzzx'+'.png',
    '用友网络-专属云应用平台':baseUrl+'zsyyypt'+'.png',
    '用友网络-开放平台':baseUrl+'kfpt'+'.png',
    '用友网络-企业账号中心':baseUrl+'qyzhzx'+'.png',
    '用友网络-微服务治理平台':baseUrl+'wfwzlpt'+'.png',
    '用友网络-diwork 工作台':baseUrl+'diwork'+'.png',
    '用友网络-NC 工程云':baseUrl+'NCgcy'+'.png',
    '用友网络-NC 司库云':baseUrl+'NCsky'+'.png',
    '用友网络-用友云平台官网':baseUrl+'yptui'+'.png',
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
                                    <Tile border={false}>
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