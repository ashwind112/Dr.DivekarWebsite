import React, { Component } from 'react';
import {Tab, Row,Col,Nav,NavItem} from 'react-bootstrap';


class VaricoseVeins extends Component{
    render(){
        return(
            <div>
                <div className="page-header">
                    <h2>Varicose Veins <small>Also Known as Varicoses or Vericosities</small></h2>

                    <Tab.Container id="vv-tab" defaultActiveKey={1}>
                        <Row>
                            <Col sm={7}>
                                <Nav bsStyle="pills">
                                    <NavItem eventKey={1}>
                                        About
                                    </NavItem>
                                    <NavItem eventKey={2}>
                                        Causes
                                    </NavItem>
                                </Nav>
                                <Tab.Content animation>
                                <br></br>
                                    <Tab.Pane eventKey={1}>
                                        <p>
                                            Varicose veins usually announce themselves as bulging, bluish cords running just beneath the surface of your skin. They almost always affect legs and feet. Visible swollen and twisted veins sometimes surrounded by patches of flooded capillaries known as spider veins are considered superficial varicose veins. Although they can be painful and disfiguring, they are usually harmless. When inflamed, they become tender to the touch and can hinder circulation to the point of causing swollen ankles, itchy skin, and aching in the affected limb.
                                        </p>
                                        <p>
                                             Besides a surface network of veins, your legs have an interior, or deep, venous network. On rare occasions, an interior leg vein becomes varicose. Such deep varicose veins are usually not visible, but they can cause swelling or aching throughout the leg and may be sites where blood clots can form.
                                        </p>
                                        <p>
                                            To help circulate oxygen-rich blood from the lungs to all parts of the body, your arteries have thick layers of muscle or elastic tissue. To push blood back to your heart, your veins rely mainly on surrounding muscles and a network of one-way valves. As blood flows through a vein, the cup-like valves alternately open to allow blood through, then close to prevent backflow.
                                        </p>
                                        <p>
                                            In varicose veins, the valves do not work properly -- allowing blood to pool in the vein and making it difficult for the muscles to push the blood "uphill." Instead of flowing from one valve to the next, the blood continues to pool in the vein, increasing venous pressure and the likelihood of congestion while causing the vein to bulge and twist. Because superficial veins have less muscle support than deep veins, they are more likely to become varicose.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={2}>
                                        <p className="lead">A number of factors contribute to the development of varicose veins. These include:</p>
                                            <ul>
                                                <li><h5>A genetic predisposition to develop varicose veins</h5></li>
                                                <li><h5>Hormonal factors</h5></li>
                                                <li><h5>Excess weigh</h5></li>
                                                <li><h5>Pregnancy</h5></li>
                                                <li><h5>Circulatory problems, such as blood clots (thrombosis)</h5></li>
                                                <li><h5>Injury or inflammation of the veins</h5></li>
                                                <li><h5>Chronic constipation may contribute to the development of rectal varicose veins (haemorrhoids)</h5></li>
                                            </ul>
                                        
                                    </Tab.Pane>                                
                                </Tab.Content>
                            </Col>
                        </Row>
                    
                    </Tab.Container>
                </div>
            </div>
        )
    }
}

export default VaricoseVeins;