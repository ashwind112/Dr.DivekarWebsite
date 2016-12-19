import React, { Component } from 'react';
import {Tab,Nav,NavItem,Row,Col} from 'react-bootstrap'
class Type extends Component{
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
                                    Type
                                </NavItem>
                                <NavItem eventKey={2} >
                                    Durartion
                                </NavItem>
                                <NavItem eventKey={3} >
                                    Medicines We Used
                                </NavItem>
                                <NavItem eventKey={4} >
                                   Investigations
                                </NavItem>
                                <NavItem eventKey={5} >
                                   Diet And Exercise
                                </NavItem>
                            </Nav>
                            <Tab.Content animation>
                            
                                <Tab.Pane eventKey={1}>
                                <div>
                                <h3>Rehumatoid Arthritis</h3>
                                <br></br>
                                    <Row>
                                        <Col sm={2}>
                                            <h4>Oral</h4>
                                        </Col>
                                        <Col sm={10}>
                                            <p>
                                                This treatment is through direct consumption and includes tablets which can affect intenally thrrough blood stream.
                                                This treatment does not contain any non edible contents and has almost no side effects.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col sm={2}>
                                            <h4>Local</h4>
                                        </Col>
                                        <Col sm={10}>
                                            <p>
                                                This treatment is for direct application which affect directly to the spot.This includes ointments and oils they are not edible.
                                                These help faster effeect in case of high pain. 
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                <h3>Varicose Veins</h3>
                                <br></br>
                                    <Row>
                                        <Col sm={2}>
                                            <h4>Oral</h4>
                                        </Col>
                                        <Col sm={10}>
                                            <p>
                                                This treatment is through direct consumption and includes tablets which can affect intenally thrrough blood stream.
                                                This treatment does not contain any non edible contents and has almost no side effects.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col sm={2}>
                                            <h4>Local</h4>
                                        </Col>
                                        <Col sm={10}>
                                            <p>
                                                This treatment is for direct application which affect directly to the spot.This includes ointments and oils they are not edible.
                                                These help faster effeect in case of high pain. 
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
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
                                <Tab.Pane eventKey={4}>
                                    <p>Investigation part</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={5}>
                                    <p>Diet and Excersise part</p>
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

export default Type;