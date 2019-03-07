import React, { Component } from 'react';
import {Row,Col,Button,Tile,Tabs} from 'tinper-bee';
import classnames from 'classnames';
import './index.less';

// const acs = [
//     {
//         name:'BPM流程组件',
//         href:'#'
//     },
//     {
//         name:'附件管理组件',
//         href:'#'
//     },
//     {
//         name:'温度计组件',
//         href:'#'
//     },
//     {
//         name:'抽屉组件',
//         href:'#'
//     },
//     {
//         name:'二维码组件',
//         href:'#'
//     },
//     {
//         name:'条件搜索组件',
//         href:'#'
//     },
//     {
//         name:'富文本组件',
//         href:'#'
//     },
//     {
//         name:'国际化组件',
//         href:'#'
//     },
//     {
//         name:'条形码组件',
//         href:'#'
//     },
// ]

// const refs = [
//     {
//         name:'树形参照',
//         href:''
//     },
//     {
//         name:'多选参照',
//         href:''
//     },
//     {
//         name:'表格参照',
//         href:''
//     },
//     {
//         name:'树表参照',
//         href:''
//     },
//     {
//         name:'树穿梭参照',
//         href:''
//     },
//     {
//         name:'查询表格参照',
//         href:''
//     }
// ]

// class DevelopTools extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             active:'acs'
//         }
//     }
//     tabChange=(active)=>{
//         this.setState({
//             active
//         })
//     }
//     render() { //包含事件按钮
//         let active = this.state.active;
//         let components = active=='acs'?acs:refs;
//         return (
//             <Row className="delop-tool">
//                 <Col md={12}> 
//                     <p  className="tool-title" >标准化业务组件</p>
//                 </Col>
//                 <Col md={12}>
//                 <Button onClick={()=>{this.tabChange('acs')}} className={classnames({"comp-btn comp-btn-left":true,'active':active=='acs'})}>业务组件</Button>
//                 <Button onClick={()=>{this.tabChange('ref')}} className={classnames({"comp-btn comp-btn-right":true,'active':active=='ref'})}>参照组件</Button>
//                 </Col>
//                 {
//                     components.map((item,index)=>{
//                         return (
//                             <Col md={4} ms={6} xs={12} sm={6} xs={12} key={index}>  
//                                 <Tile className="compts" border={false} Component="a" href={item.href}>{item.name}</Tile>
//                             </Col>
//                         )
//                     })
//                 }
//                 <Col md={12}>
//                     <Button  className="tool-more-btn" >查看更多</Button>
//                 </Col>    
//             </Row>
//         );
//     }
// }

const {TabPane} = Tabs;

function callback() {

}

class DevelopTools extends Component { 
    render() {
        return (
            <div className="delop-tool">
                <div className="tool-title">
                    <p>标准化业务组件</p>
                </div>
                <div className="tool-content">
                    <Tabs defaultActivesKey="1" onChange={callback} tabBarStyle="simple" className="demo1-tabs" style={{width:'1000px'}}>
                        <TabPane  className="item" tab='常用' key="1">
                            <Row>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>按钮 AcButton</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>通知 AcNotification</Tile>
                                </Col>
                                <Col md={4}  ms={6} xs={12}>
                                    <Tile>内部转移应用 AcOrgcenter</Tile>
                                </Col>
                                <Col md={4}  ms={6} xs={12}>
                                    <Tile>消息框组件 AcToast</Tile>
                                </Col>
                                <Col md={4}  ms={6} xs={12}>
                                    <Tile>二维码 AcBarcode</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>条形码 Ac-barcode</Tile>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane className="item" tab='参照' key="2">
                            <Row>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>树形参照RefTree</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>多选参照RefMultipleSelection</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>树表参照 RefTreeTable</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>树穿梭参照RefTreeTransfer</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>复杂查询表格参照RefMultipleTable</Tile>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane className="item" tab='国际化' key="3">
                            <Row>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>多语言输入 AcInputLocale</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>手机号国际化 AcMobileLocale</Tile>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane className="item" tab='长流程' key="4">
                            <Row>
                                <Col md={4} ms={6} xs={12}>  
                                    <Tile>查询组件 SeachPanel</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>条件搜索组件 AcComplexSearchPanel</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>Bpm流程组件 yyuap-bpm</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>附件管理 AcUpload</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>上传列表 AcAttachment </Tile>
                                </Col>
                            </Row>
                       </TabPane>
                        <TabPane className="item" tab='表格' key="5">
                            <Row>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>ComplexGrid</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>电子表格 SpreadSheet</Tile>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane className="item" tab='编辑器' key="6">
                            <Row>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>富文本编辑 AcEditor</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>md编辑器</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>合同编辑器</Tile>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane className="item" tab='图形化' key="7">
                            <Row>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>温度计/液位计 AcThermometer</Tile>
                                </Col>
                                <Col md={4} ms={6} xs={12}>
                                    <Tile>液位计</Tile>
                                </Col>
                            </Row>
                        </TabPane>
                    </Tabs>
                </div>
                <div className="tool-more-container">
                    <Button  className="tool-more-btn" onClick={()=>{window.location.href="https://design.yonyoucloud.com/tinper-acs/"}} >查看更多</Button>
                </div>   
            </div>

            
        )
    }
}
export default DevelopTools;