import React, { Component } from 'react';
import { Tab, Nav,NavItem,Row,Col } from 'react-bootstrap'


export default class GetTreated extends Component{
    render(){
        return(
            <div className="container-fluid padding">
            <div className="page-header"><h3>Rehumatoid Arthritis</h3></div>
                <Tab.Container id="get-treated-tab" defaultActiveKey={1}>
                    <Row>
                        <Col sm={7}>
                            <Nav bsStyle="pills">
                                <NavItem eventKey={1}>
                                    Pre-requirements
                                </NavItem>
                            </Nav>
                            <Tab.Content animation>
                            <br></br>
                                <Tab.Pane eventKey={1}>
                                    <p>
                                        This is what you need to do and provide us when asked so that we can help you as best as we can.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}