import React, { Component } from 'react';
import { Row,Col,Tile } from 'tinper-bee';
import kendoGrid from 'static/images/kendoGrid.png';
import FixedDataTable from 'static/images/FixedDataTable.png';
import Handsontable from 'static/images/Handsontable.png';
import Echarts from 'static/images/Echarts.svg';
import draftjs from 'static/images/draftjs.png';
import BraftEditor from 'static/images/BraftEditor.png';
import reactBeautifulDnd from 'static/images/reactBeautifulDnd.png';
import reactIntl from 'static/images/reactIntl.png';
import './index.less';

const titles = [
    {title:'KendoReact Grid',desc:'企业级数据表格',img:kendoGrid,link:'https://www.telerik.com/kendo-react-ui/components/grid/'},
    {title:'FixedDataTable',desc:'无性能消耗百万级 table',img:FixedDataTable,link:'https://schrodinger.github.io/fixed-data-table-2/example-object-data.html'},
    {title:'Handsontable',desc:'在线电子表格组件',img:Handsontable,link:'https://handsontable.com/examples?manual-resize&manual-move&conditional-formatting&context-menu&filters&dropdown-menu&headers'},
    {title:'echarts-for-react',desc:'数据可视化图表',img:Echarts,link:'https://github.com/hustcc/echarts-for-react'},
    {title:'draft-js',desc:'React 富文本编辑器',img:draftjs,link:'https://draftjs.org/'},
    {title:'braft-editor',desc:'React 富文本编辑器',img:BraftEditor,link:'https://braft.margox.cn/'},
    {title:'react-beautiful-dnd',desc:'拖拽组件',img:reactBeautifulDnd,link:'https://github.com/atlassian/react-beautiful-dnd/'},
    {title:'react-intl',desc:'应用国际化',img:reactIntl,link:'https://github.com/formatjs/react-intl'},
];

const CaseItem = ({title,desc,link,img}) => {
    return (
        <Col className="case-ctn-item" lg={3} md={4} sm={6} xs={12}>
            <a href={link} target="_blank">
                <Tile border={true} className='case-ctn-item-tile'>
                    <Row>
                        <Col lg={2} md={3} sm={2} xs={3} className="logo-container">
                            <img src={img} alt={title} title={title}/>
                        </Col>
                        <Col lg={8} md={9} sm={8} xs={9}>
                            <h6 className="product-title">{title}</h6>
                            <span className="product-desc">{desc}</span>
                        </Col>
                    </Row>
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
                <p className="case-desc">tinper-bee 是 iuap Design 设计规范的 React 实现，所以我们倾向于只提供符合该规范、且带有视觉展现的 UI 组件，也尽量不重复造轮子。我们推荐使用以下社区已有的优秀实现，与 tinper-bee 形成互补：</p>
                <div className="case-ctn">
                    <Row>
                        {
                            titles.map((item,index)=>{
                                return <CaseItem title={item.title} link={item.link} desc={item.desc} img={item.img} key={index}/>
                            })
                        }
                    </Row>
                </div>
            </div>
        )
    }
}
export default Case;