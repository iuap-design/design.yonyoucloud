import React, { Component } from 'react';
import { Button } from 'tinper-bee';
import {Row,Col} from 'tinper-bee';
import bg from 'images/bg.png';
import pic1 from 'images/pic1.png';
import pic2 from 'images/pic2.png';
import pic3 from 'images/pic3.png';
import pic4 from 'images/pic4.png';
import pic5 from 'images/pic5.png';
import Carousel from "tinper-bee/lib/Carousel";
import './index.less';
class RichCase extends Component {
    render() {
        var imgStyle = {
            display:"inline-block",
            width: "937px",
            height: "552px",
            background: `url("${bg}") center center / cover no-repeat`
        };
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
            spaceBetween: 30
            // effect: 'flip' //设置3d翻转
          }
        return (
            <div className="richcase">
                <div className="content">
                    <div className="title">丰富案例覆盖典型业务场景</div>
                    <Button className="btn" >
                        <a href="https://design.yonyoucloud.com/case/preview" target="_blank">查看案例</a>
                    </Button>
                </div>
                <div className="img" style={imgStyle}>
                    <Carousel {...params}>
                    {/* 封装成组件 */}
                        <div className="swiper-pic">
                            <span>单表筛选</span>
                            <img src={pic1}/>
                        </div>
                        <div className="swiper-pic">
                            <span>卡表</span>
                            <img src={pic2}/>
                        </div>
                        <div className="swiper-pic">
                            <span>树表</span>
                            <img src={pic3}/>
                        </div>
                        <div className="swiper-pic">
                            <span>一主多子</span>
                            <img src={pic4}/>
                        </div>
                        <div className="swiper-pic">
                            <span>主子表</span>
                            <img src={pic5}/>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}
export default RichCase;