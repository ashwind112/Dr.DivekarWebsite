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
                                    <NavItem eventKey={3}>
                                        Symtomps
                                    </NavItem>
                                    <NavItem eventKey={4}>
                                        Pathology
                                    </NavItem>
                                    <NavItem eventKey={5}>
                                        Who is affected
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
                                    <Tab.Pane eventKey={3}>
                                        <p className="lead">
                                            Varicose veins may not cause any pain. Signs you may have with varicose veins include
                                        </p>
                                        <ul>
                                            <li>Veins that are dark purple or blue in color</li>
                                            <li>Veins that appear twisted and bulging; often like cords on your legs</li>
                                        </ul>
                                        <p className="lead">
                                            When painful signs and symptoms occur, they may include:
                                        </p>
                                        <ul>
                                            <li><h5>An achy or heavy feeling in your legs</h5></li>
                                            <li><h5>Burning, throbbing, muscle cramping and swelling in your lower legs</h5></li>
                                            <li><h5>Worsened pain after sitting or standing for a long time</h5></li>
                                            <li><h5>Itching around one or more of your veins</h5></li>
                                            <li><h5>Bleeding from varicose veins</h5></li>
                                            <li><h5>A painful cord in the vein with red discoloration of the skin</h5></li>
                                            <li><h5><p>Color changes, hardening of the vein, inflammation of the skin or skin ulcers near your ankle, which can mean you have a serious form of vascular disease that requires medical attention</p></h5></li>                                            
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={4}>
                                        <p>
                                            The venous anatomy of the leg is described with special reference to the superficial venous system. The histologic and histochemical differences between varicose and normal veins are presented. The pathophysiology of varicose veins is related to congential or acquired abnormalities of the deep venous system, venous valves, and/or fascial or vein wall weakness. Increased deep venous pressure may be both proximal and distal in etiology, arising from arteriovenous anastomoses, incompetent communicating veins, or venous obstruction. Primary valvular incompetence arises from venous obstruction (thrombosis), thrombophlebitis, or valvular agenesis. Secondary valvular incompetence occurs from deep venous obstruction or increased venous distensibility (usually secondary to circulating estrogens). Finally, fascial weakness of the vein wall or supporting fascia provided a genetic basis for the pathophysiology of varicose veins. Understanding the anatomy and pathophysiology of varicose veins should lead to a more rational and efficacious treatment.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={5}>
                                        <p>
                                            There are no accurate figures for the number of people with <strong>varicose veins</strong>. Some studies suggest that 3 in 100 people have them at some time in their lives. Most people with varicose veins do not have an underlying disease and they usually occur for no apparent reason.
                                        </p>
                                        <p>
                                            About 3 in 100 adults develop varicose veins at some time in their lives. More women than men develop varicose veins. Most people with varicose veins do not have an underlying disease and they occur for no apparent reason
                                        </p>
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