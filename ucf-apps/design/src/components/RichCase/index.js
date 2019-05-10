import React, { Component } from 'react';
import { Button } from 'tinper-bee';
import Carousel from "tinper-bee/lib/Carousel";
import './index.less';
class RichCase extends Component {
    render() {
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
            loop:true
          };
        return (
            <div className="richcase">
                <div className="content">
                    <div className="title">丰富案例覆盖典型业务场景</div>
                    <Button className="btn" >
                        <a href="https://design.yonyoucloud.com/case/preview" target="_blank">查看案例</a>
                    </Button>
                </div>
                <div className="img">
                    <img className="bgimg" src="//design.yonyoucloud.com/static/tinper-bee/logo/bg.png" />
                    <div className="slidepic">
                    <Carousel {...params} autoplay={{disableOnInteraction: false,delay:1500}}>
                        <div className="swiper-pic">
                            <span>单表筛选</span>
                            <div className="swipic">
                                <img  src="//design.yonyoucloud.com/static/tinper-bee/logo/pic1.png"/>
                            </div>  
                        </div>
                        <div className="swiper-pic">
                            <span>卡表</span>
                            <div  className="swipic">
                                <img src="//design.yonyoucloud.com/static/tinper-bee/logo/pic2.png"/>
                            </div>
                        </div> 
                        <div className="swiper-pic">
                            <span>树表</span>
                            <div className="swipic">
                                <img  src="//design.yonyoucloud.com/static/tinper-bee/logo/pic3.png"/>
                            </div>
                        </div>
                        <div className="swiper-pic">
                            <span>一主多子</span>
                            <div className="swipic">
                                <img  src="//design.yonyoucloud.com/static/tinper-bee/logo/pic4.png"/>
                            </div>
                        </div>
                        <div className="swiper-pic">
                            <span>主子表</span>
                            <div className="swipic">
                                <img  src="//design.yonyoucloud.com/static/tinper-bee/logo/pic5.png"/>
                            </div>
                        </div>
                    </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}
export default RichCase;