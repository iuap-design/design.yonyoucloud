import React, { Component } from 'react';
import {Row,Col,Tile} from 'tinper-bee';
import gridDemo from 'static/images/grid-demo-system.png';
import './index.less';

class GridDemoSystem extends Component {
    render() {
        return (
            <div className="grid-demo-system">
                <Row >
                    <Col className="grid-demo-system-title" md={12}>Grid 开发者功能演示系统</Col>
                </Row>
                <Row>
                    <Col className="grid-demo-system-aspect  firm" md={12} sm={12} xs={12}>
                        <Tile  border={true} className='grid-demo-system-aspect-tile' style={{border:false}}>
                            <div className="cont"> 
                                <a target="_blank" href="http://grid.yanshi.app.yyuap.com/" title="Grid 开发者功能演示系统"><img src={gridDemo}/></a>
                            </div>
                        </Tile>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GridDemoSystem;