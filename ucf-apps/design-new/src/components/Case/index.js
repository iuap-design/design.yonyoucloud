import React, { Component } from 'react';
import { Row,Col,Tile } from 'tinper-bee';
import Title from '../Title';
import './index.less';


class Case extends Component { 

    render() {
        const { imgs , title} = this.props;
        return (
            <div className="case">
                <Title title={title}/>
                <div className="case-ctn">
                <Row>
                    {
                        Object.keys(imgs).map((title,index)=>{
                            let newUrl = imgs[title] + "";
                            return (
                                <Col className="case-ctn-item"  key={index} lg={2} md={3} sm={4} xs={4}>
                                    <Tile border={false}>
                                        <img src={newUrl} title={title} alt={title}/>
                                    </Tile>
                                </Col>
                            )
                        })
                    }
                </Row>
                </div>
            </div>
        )
    }
}
export default Case;