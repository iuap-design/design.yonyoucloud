import React, { Component } from 'react';
import { Button } from 'tinper-bee';
import richcase from 'images/richcase.png';
import richback from 'images/richback.png';
import {Row,Col} from 'tinper-bee';
import png1 from 'images/richback.png';
import './index.less';
console.log('pnhg1')
// const bground={
//     display:'inline-block',
//     backgroudImage:'url('+images/richback.png+')'h
// };

// const bgGround={
//     display:'inline-block',
//     background: `url(${require("images/richback.png")})`
// }
class RichCase extends Component {
    render() {
        return (
            <div>
                <Row className="richcontent" style={{backgroundImage:`url(${png1})`}}>
                {/* <Row className="richcontent" style={bgGround}> */}
                    <Col  className="img-div" md={7} >
                         <img className="pic" src={richcase}/>
                    </Col>
                    <Col className="richcase-text" md={5}>
                        <p className="richcase-title">丰富案例覆盖典型业务场景</p>
                        <Button className="richcase-btn"  onClick={()=>{window.location.href="https://design.yonyoucloud.com/case/preview"}}>查看案例</Button>
                    </Col>
                </Row>
                <div className="mob-richcontent">
                       <div className="img-div">
                           <img className="pic" src={richcase}/>
                       </div>
                       <div className="richcase-text">
                           <p className="richcase-title">丰富案例覆盖典型业务场景</p>
                           <Button className="richcase-btn"  onClick={()=>{window.location.href="https://design.yonyoucloud.com/case/preview"}}>查看案例</Button>
                       </div>
                </div>
            </div>
        );
    }
}


// class RichCase extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="richcase-content">
//                      <div className="para1"/>
//                       <div className="img-div" >
//                             <img className="pic" src={richcase}/>
//                        </div>
//                       <div className="richcase-text">
//                             <p className="richcase-title">丰富案例覆盖典型业务场景</p>
//                             <Button className="richcase-btn"  onClick={()=>{window.location.href="https://design.yonyoucloud.com/case/preview"}}>查看案例</Button>
//                        </div>
//                 </div>
//                 <div className="mob-richcase-content">
//                     <div className="pic">
//                         <img className="pic" src={richcase}/>
//                     </div>
//                     <div className="content">
//                         <p className="richcase-title">丰富案例覆盖典型业务场景</p>
//                         <Button className="richcase-btn"  onClick={()=>{window.location.href="https://design.yonyoucloud.com/case/preview"}}>查看案例</Button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }






export default RichCase;