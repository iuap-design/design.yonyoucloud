import React, { Component } from 'react';
import Banner from '../components/Banner';
import Technology from '../components/Technology';
import Service from '../components/Service';
import Case from '../components/Case';
import CaseYonyou from '../components/Case';
import Footer from '../components/Footer';
import './index.less';
const baseUrl = '//design.yonyoucloud.com/static/tinper-bee/logo/monochrome/'

const imgs1={
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
    '尚层装饰':baseUrl+'sczs'+'.png'
}
const imgs2={
    '用友网络nccloud':baseUrl+'nccloud'+'.png',
    '用友网络-精智IOT 后台管理系统':baseUrl+'jzIOT'+'.png',
    '用友网络-开发者中心':baseUrl+'kfzzx'+'.png',
    '用友网络-专属云应用平台':baseUrl+'zsyyypt'+'.png',
    '用友网络-开放平台':baseUrl+'kfpt'+'.png',
    '用友网络-企业账号中心':baseUrl+'qyzhzx'+'.png',
    '用友网络-U8Cloud 数据中心':baseUrl+'U8Cloud'+'.png',
    '用友网络-diwork 工作台':baseUrl+'diwork'+'.png',
    '用友网络-NC 工程云':baseUrl+'NCgcy'+'.png',
    '用友网络-NC 司库云':baseUrl+'NCsky'+'.png',
}
class Index extends Component {
    render() { 
        return (
            <div className="home" >
                <Banner/>
                <Technology/>
                <Service/>
                <Case imgs={imgs1} title='客户案例'/>
                <CaseYonyou imgs={imgs2} title='用友系产品案例'/>
                <Footer/>
            </div>
        );
    }
}

export default Index;