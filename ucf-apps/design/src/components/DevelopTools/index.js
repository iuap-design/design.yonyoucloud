import React, { Component } from 'react';
import { Row,Col,Button,Tile } from 'tinper-bee';
import classnames from 'classnames';
import './index.less';

const btns = {
    cy:{
        name:'常用',
        key:'cy',
        acs:['按钮 AcButton','通知 AcNotification','内部转移应用 AcOrgcenter','消息框组件 AcToast']
    },
    cz:{
        name:'参照',
        key:'cz',
        acs:['树形参照RefTree','多选参照RefMultipleSelection','树表参照 RefTreeTable','树穿梭参照RefTreeTransfer','复杂查询表格参照RefMultipleTable']
    },
    gjh:{
        name:'国际化',
        key:'gjh',
        acs:['多语言输入 AcInputLocale','手机号国际化 AcMobileLocale']
    },
    txh:{
        name:'图形化',
        key:'txh',
        acs:['温度计Thermometer','液位计ContentGage','二维码 AcBarcode','条形码 Ac-barcode']
    },
    bg:{
        name:'表格',
        key:'bg',
        acs:['复杂表格 ComplexGrid','电子表格 SpreadSheet']
    },
    clc:{
        name:'单据',
        key:'clc',
        acs:['查询组件 SeachPanel','条件搜索组件 AcComplexSearchPanel','附件管理 AcUpload','上传列表 AcAttachment']
    },
    bjq:{
        name:'编辑器',
        key:'bjq',
        acs:['富文本编辑 AcEditor','md编辑器','合同编辑器']
    },
    bpm:{
        name:'流程审批',
        key:'bpm',
        acs:['Bpm流程组件 yyuap-bpm']
    }
}


class DevelopTools extends Component { 
    constructor(props){
        super(props);
        this.state={
            active:'cy'
        }
    }
    click=(active)=>{
        this.setState({
            active
        })
    }
    render() {
        let components = btns[this.state.active].acs;
        return (
            <div className="delop-tool">
                <div className="tool-title">
                    <p>标准化业务组件</p>
                </div>
                <div className="tool-content">
                    <div className="tool-btns">
                    {
                        Object.keys(btns).map((it,index)=>{
                            let item = btns[it];
                            return (
                                <Button key={item.key} className={classnames({'active':this.state.active==item.key,'component':true})} onClick={()=>{this.click(item.key)}}>{item.name}</Button>
                            )
                        })
                    }
                    </div>
                    <div className="tool-components" >
                        <Row>
                            {
                                components.map((item,index)=>{
                                    return (
                                        <Col key={index} md={4} className="item-box" sm={6} xs={12}>
                                            <Tile>{item}</Tile>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        
                    </div>
                </div>
                <div className="tool-more-container">
                    <Button  className="tool-more-btn" onClick={()=>{window.open('//'+window.location.host+'/tinper-acs')}} >查看更多</Button> 
                </div>   
            </div>
        )
    }
}
export default DevelopTools;