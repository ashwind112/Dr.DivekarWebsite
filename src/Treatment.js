import React, { Component } from 'react';
import {Tab,Nav,NavItem,Row,Col} from 'react-bootstrap'
class Treatment extends Component{
    render(){
        return(
            <div>
                <div className="page-header">
                    <h2>Only Ayurvedic Tratment <small>Go green Go Herbal</small></h2>
                
                <Tab.Container id="treatment-tab" defaultActiveKey={1} >
                    <Row>
                        <Col sm={7} >
                            <Nav bsStyle="pills">
                                <NavItem eventKey={1} >
                                    Treatment
                                </NavItem>
                                <NavItem eventKey={2} >
                                    Durartion
                                </NavItem>
                                <NavItem eventKey={3} >
                                    Medicines We Used
                                </NavItem>
                            </Nav>
                            <Tab.Content animation>
                            <br></br>
                                <Tab.Pane eventKey={1}>
                                    <p>
                                        This is where treatment info will go
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={2}>
                                    <p>
                                        This is where duration info will go
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={3}>
                                    <p>
                                        This is where Medicine info will go
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                </div>
            </div>
            
        );
    }
}

export default Treatment;