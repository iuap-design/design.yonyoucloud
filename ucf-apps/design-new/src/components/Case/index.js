import React, { Component } from 'react';
import { Row,Col,Tile } from 'tinper-bee';
import Title from '../Title';
import './index.less';

const baseUrl = '//design.yonyoucloud.com/static/tinper-bee/logo/monochrome/'

const imgs={
    '郎酒CRM平台':baseUrl+'ljCRM'+'.png',
    '中兴通讯':baseUrl+'zxtx'+'.png',
    '台湾华新丽华-MES 系统':baseUrl+'hxlh'+'.png',
    '全友数字营销系统':baseUrl+'qyszyxxt'+'.png',
    '杭州路桥':baseUrl+'hzlq'+'.png',
    '四维图新':baseUrl+'swtx'+'.png',
    '象屿集团':baseUrl+'xyjt'+'.png',
    '三一重工':baseUrl+'sany'+'.png',
    '南通化轻物流系统':baseUrl+'nthqwlxt'+'.png',
    '江铜贵溪冶炼厂-智能工厂':baseUrl+'gyzngc'+'.png',
    '杭州绿城':baseUrl+'hzlc'+'.png',
    '尚层装饰':baseUrl+'sczs'+'.png',
}


class Case extends Component { 

    render() {
        return (
            <div className="case">
                <Title title="客户案例"/>
                <div className="case-ctn">
                <Row>
                    {
                        Object.keys(imgs).map((title,index)=>{
                            let newUrl = imgs[title] + "?v=2.0.7";
                            return (
                                <Col className="case-ctn-item"  key={index} lg={2} md={3} sm={4} xs={4}>
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