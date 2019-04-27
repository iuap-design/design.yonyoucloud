import React, { Component } from 'react';
import { Button } from 'tinper-bee';
import Carousel from "tinper-bee/lib/Carousel";
import './index.less';
class RichCase extends Component {
    render() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: {
              delay: 1500,
            },
        });
        const params = {
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30,
            autoplay:true
          }
        return (
            <div className="richcase">
                <div className="content">
                    <div className="title">丰富案例覆盖典型业务场景</div>
                    <Button className="btn" >
                        <a href="https://design.yonyoucloud.com/case/preview" target="_blank">查看案例</a>
                    </Button>
                </div>
                <div className="img" style={{backgroundImage:`url(//design.yonyoucloud.com/static/tinper-bee/logo/bg.png)`}}>
                    <Carousel {...params}>
                    {/* 封装成组件 */}
                        <div className="swiper-pic">
                            <span>单表筛选</span>
                            <div className="swipic" style={{backgroundImage:`url(//design.yonyoucloud.com/static/tinper-bee/logo/pic1.png)`}}></div>
                        </div>
                        <div className="swiper-pic">
                            <span>卡表</span>
                            <div className="swipic" style={{backgroundImage:`url(//design.yonyoucloud.com/static/tinper-bee/logo/pic2.png)`}}></div>
                        </div>
                        <div className="swiper-pic">
                            <span>树表</span>
                            <div className="swipic" style={{backgroundImage:`url(//design.yonyoucloud.com/static/tinper-bee/logo/pic3.png)`}}></div>
                        </div>
                        <div className="swiper-pic">
                            <span>一主多子</span>
                            <div className="swipic" style={{backgroundImage:`url(//design.yonyoucloud.com/static/tinper-bee/logo/pic4.png)`}}></div>
                        </div>
                        <div className="swiper-pic">
                            <span>主子表</span>
                            <div className="swipic" style={{backgroundImage:`url(//design.yonyoucloud.com/static/tinper-bee/logo/pic5.png)`}}></div>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}
export default RichCase;