import React, { Component } from 'react';
import { Row,Col,Button,Tile,Carousel } from 'tinper-bee';
import classnames from 'classnames';
import CaseItem from './CaseItem'
import './index.less';

const baseUrl = '//design.yonyoucloud.com/static/tinper-bee/logo/'

const imgs={
    '中兴通讯':baseUrl+'中兴通讯'+'.png',
    '三一重工':baseUrl+'三一重工'+'.png',
    '台湾华新丽华-MES 系统':baseUrl+'台湾华新丽华-MES 系统'+'.png',
    '阳光保险':baseUrl+'阳光保险'+'.png',
    '象屿集团':baseUrl+'象屿集团'+'.png',
    '杭州路桥':baseUrl+'杭州路桥'+'.png',
    '杭州绿城':baseUrl+'杭州绿城'+'.png',
    '江铜贵溪冶炼厂-智能工厂':baseUrl+'江铜贵溪冶炼厂-智能工厂'+'.png',
    '郎酒CRM平台':baseUrl+'郎酒CRM平台'+'.png',
    '南通化轻物流系统':baseUrl+'南通化轻物流系统'+'.png',
    '全友数字营销系统':baseUrl+'全友数字营销系统'+'.png',
    '尚层装饰':baseUrl+'尚层装饰'+'.png',
    '四维图新':baseUrl+'四维图新'+'.png',
    '用友网络nccloud':baseUrl+'用友网络nccloud'+'.png',
    '用友网络-U8Cloud 数据中心':baseUrl+'用友网络-U8Cloud 数据中心'+'.png',
    '用友网络-精智IOT 后台管理系统':baseUrl+'用友网络-精智IOT 后台管理系统'+'.png',
    '用友网络-开发者中心':baseUrl+'用友网络-开发者中心'+'.png',
    '用友网络-专属云应用平台':baseUrl+'用友网络-专属云应用平台'+'.png',
    '用友网络-开放平台':baseUrl+'用友网络-开放平台'+'.png',
    '用友网络-企业账号中心':baseUrl+'用友网络-企业账号中心'+'.png',
    '用友网络-微服务治理平台':baseUrl+'用友网络-微服务治理平台'+'.png',
    '用友网络-用友云平台官网':baseUrl+'用友网络-用友云平台官网'+'.png',
    '用友网络-云平台 UI 模板':baseUrl+'用友网络-云平台 UI 模板'+'.png',
    '用友网络-diwork 工作台':baseUrl+'用友网络-diwork 工作台'+'.png',
    '用友网络-NC 工程云':baseUrl+'用友网络-NC 工程云'+'.png',
    '用友网络-NC 司库云':baseUrl+'用友网络-NC 司库云'+'.png',
    '用友网络-工单系统':baseUrl+'用友网络-工单系统'+'.png',
}
const toLogos=()=>{
    let logos={},key=0;
    logos[0]=[];
    Object.keys(imgs).forEach((item,index)=>{
        if(index%8==0&&index>0){
            key++;
            logos[key]=[]
            logos[key].push({
                title:item,
                url:imgs[item]
            });
        }else{
            logos[key].push({
                title:item,
                url:imgs[item]
            });
        }
    })
    return logos;
}

let logos = toLogos();


class Case extends Component { 
    constructor(props){
        super(props);
        this.state={
            active:0
        }
    }

    
    dotClick=(active)=>{
        clearInterval(this.timeOut)
        this.setState({
            active
        })
        let length = Object.keys(logos).length;
        this.timeOut=setInterval(()=>{
            if(active==length-1){
                active=0;
            }else{
                active++;
            }
            this.setState({
                active
            })
        },5000)
    }
    componentDidMount(){
        let length = Object.keys(logos).length;
        let active = this.state.active;
        this.timeOut=setInterval(()=>{
            if(active==length-1){
                active=0;
            }else{
                active++;
            }
            this.setState({
                active
            })
        },5000)
    }

    render() {
        const params = {
            pagination: {   //配置页码参数 其中 renderBullet 是自定义页码
              el: '.swiper-pagination',
              clickable: true,  //可点击页码切换swiper
               renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
              
            },
            navigation: {   //配置上一页下一页按钮
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            spaceBetween: 20  //配置两页之前切换距离
          }
        return (
            <div className="case">
                <div className="case-title">
                    <p>客户案例</p>
                </div>
                <div className="case-ctn">
                    {
                        Object.keys(logos).map((item,index)=>{
                            return (
                                <div className={classnames({"case-ctn-item":true,"active":this.state.active==index})} key={index}>
                                    <CaseItem items={logos[item]}/>
                                </div>
                            )
                        })
                    }

                    <div className="case-ctn-dots">
                        {
                            Object.keys(logos).map((item,index)=>{
                                return (
                                    <span className={classnames({"case-ctn-dot":true,"active":this.state.active==index})} onClick={()=>{this.dotClick(index)}} key={index+'dot'}>
                                        
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
               
            </div>
        )
    }
}
export default Case;