import React, { Component } from 'react';
import {Row,Col,Button,Tile} from 'tinper-bee';
import classnames from 'classnames';
import './index.less';

const acs = [
    {
        name:'BPM流程组件',
        href:'#'
    },
    {
        name:'附件管理组件',
        href:'#'
    },
    {
        name:'温度计组件',
        href:'#'
    },
    {
        name:'抽屉组件',
        href:'#'
    },
    {
        name:'上传列表组件',
        href:'#'
    },
    {
        name:'条件搜索组件',
        href:'#'
    },
    {
        name:'富文本组件',
        href:'#'
    },
    {
        name:'国际化组件',
        href:'#'
    },
]

const refs = [
    {
        name:'树形参照',
        href:''
    },
    {
        name:'多选参照',
        href:''
    },
    {
        name:'表格参照',
        href:''
    },
    {
        name:'树表参照',
        href:''
    },
    {
        name:'树穿梭参照',
        href:''
    },
    {
        name:'查询表格参照',
        href:''
    }
]

class DevelopTools extends Component {
    constructor(props){
        super(props);
        this.state={
            active:'acs'
        }
    }
    tabChange=(active)=>{
        this.setState({
            active
        })
    }
    render() { //包含事件按钮
        let active = this.state.active;
        let components = active=='acs'?acs:refs;
        return (
            <Row className="delop-tool">
                <Col md={12}> 
                    <p  className="tool-title" >标准化业务组件开发工具</p>
                </Col>
                <Col md={12}>
                <Button onClick={()=>{this.tabChange('acs')}} className={classnames({"comp-btn comp-btn-left":true,'active':active=='acs'})}>业务组件</Button>
                <Button onClick={()=>{this.tabChange('ref')}} className={classnames({"comp-btn comp-btn-right":true,'active':active=='ref'})}>参照组件</Button>
                </Col>
                {
                    components.map((item,index)=>{
                        return (
                            <Col md={4} key={index}>  
                                <Tile Component="a" href={item.href}>{item.name}</Tile>
                            </Col>
                        )
                    })
                }
                <Col md={12}>
                    <Button  className="tool-more-btn" >查看更多</Button>
                </Col>    
            </Row>
        );
    }
}
export default DevelopTools;