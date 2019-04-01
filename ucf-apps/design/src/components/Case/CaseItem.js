import React, { Component } from 'react';
import { Row,Col,Button,Tile,Carousel } from 'tinper-bee';
import './index.less';


class CaseItem extends Component { 
    constructor(props){
        super(props);
        this.state={
            
        }
    }

   

    render() {
        let items = this.props.items;
        return (
            <Row>
                {
                    items.map((item,index)=>{
                        return (
                            <Col  key={index} md={3} sm={12} xs={12}>
                                <Tile>
                                    <img src={item.url} title={item.title} alt={item.title}/>
                                    <span title={item.title}>{item.title}</span>
                                </Tile>
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
}
export default CaseItem;