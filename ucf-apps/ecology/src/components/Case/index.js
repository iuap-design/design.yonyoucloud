import React, { Component } from 'react';
import { Row,Col,Tile } from 'tinper-bee';
import './index.less';

const titles = [
    {title:'KendoReact Data Grid',desc:'企业级数据表格',link:'https://www.telerik.com/kendo-react-ui/components/grid/'},
    {title:'FixedDataTable',desc:'无性能消耗百万级 table',link:'https://schrodinger.github.io/fixed-data-table-2/example-object-data.html'},
    {title:'Handsontable',desc:'在线电子表格组件',link:'https://handsontable.com/examples?manual-resize&manual-move&conditional-formatting&context-menu&filters&dropdown-menu&headers'},
    {title:'Echarts',desc:'一个纯 Javascript 的图表库，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。',link:'https://echarts.baidu.com/'},
    {title:'draft-js',desc:'React 富文本编辑器',link:'https://draftjs.org/'},
    {title:'braft-editor',desc:'React 富文本编辑器',link:'https://braft.margox.cn/'},
    {title:'react-beautiful-dnd',desc:'拖拽组件',link:'https://github.com/atlassian/react-beautiful-dnd/'},
];

const CaseItem = ({title,desc,link}) => {
    return (
        <Col className="case-ctn-item" lg={3} md={3} sm={4} xs={6}>
            <a href={link} target="_blank">
                <Tile border={true} className='case-ctn-item-tile'>
                    <h6 className="product-title">{title}</h6>
                    <span className="product-desc">{desc}</span>
                </Tile>
            </a>
        </Col>
    );
}

class Case extends Component { 

    render() {
        return (
            <div className="case">
                <div className="case-title">
                    <p>社区精选组件</p>
                </div>
                <span className="case-desc">tinper-bee 是 iuap Design 设计规范的 React 实现，所以我们倾向于只提供符合该规范、且带有视觉展现的 UI 组件，也尽量不重复造轮子。我们推荐使用以下社区已有的优秀实现，与 tinper-bee 形成互补：</span>
                <div className="case-ctn">
                    <Row>
                        {
                            titles.map((item,index)=>{
                                return <CaseItem title={item.title} link={item.link} desc={item.desc} key={index}/>
                            })
                        }
                    </Row>
                </div>
            </div>
        )
    }
}
export default Case;