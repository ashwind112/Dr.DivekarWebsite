import React, { Component } from 'react';
import {Tab, Tabs, Row,Col,Panel,Nav,NavItem} from 'react-bootstrap';
class Home extends Component{
    render(){
        return(
            <div className="container-fluid padding">
                <div className="page-header">
                    <h2>Rheumatoid Arthritis <small>Also known as RA</small></h2>
                
                <Tab.Container id="About-tab" defaultActiveKey={1}>
                    <Row>
                        <Col sm={7}>
                            <Nav bsStyle="pills">
                                <NavItem eventKey={1}>
                                    About
                                </NavItem>
                                <NavItem eventKey={2}>
                                    What Is Affected
                                </NavItem>
                                <NavItem eventKey={3}> 
                                    Symtomps
                                </NavItem>
                                <NavItem eventKey={4} >
                                    Who is affected
                                </NavItem>
                            </Nav>
                            <Tab.Content animation>
                            <br></br>
                                <Tab.Pane eventKey={1}>
                                    <p>Rheumatoid arthritis (RA) is an autoimmune disease in which the body’s immune system – which normally protects its health by attacking foreign substances like bacteria and viruses – mistakenly attacks the joints. This creates inflammation that causes the tissue that lines the inside of joints (the synovium) to thicken, resulting in swelling and pain in and around the joints. The synovium makes a fluid that lubricates joints and helps them move smoothly.</p>
                                    <p>If inflammation goes unchecked, it can damage cartilage, the elastic tissue that covers the ends of bones in a joint, as well as the bones themselves. Over time, there is loss of cartilage, and the joint spacing between bones can become smaller. Joints can become loose, unstable, painful and lose their mobility. Joint deformity also can occur. Joint damage cannot be reversed, and because it can occur early, doctors recommend early diagnosis and aggressive treatment to control RA.</p>
                                    <p>Rheumatoid arthritis most commonly affects the joints of the hands, feet, wrists, elbows, knees and ankles. The joint effect is usually symmetrical. That means if one knee or hand if affected, usually the other one is, too. Because RA also can affect body systems, such as the cardiovascular or respiratory systems, it is called a systemic disease. Systemic means “entire body.” </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={2}>
                                    <p>You know that arthritis affects your joints. Painful, swollen knees or fingers are impossible to ignore. But did you know that other parts of your body – your skin, eyes and lungs, to name a few – may also be affected?</p>
                                    <p>Rheumatoid arthritis is a systemic disease, meaning it can affect many parts of the body. For that matter, so can some of the drugs used to treat RA. Following is a listing by body part of the ways RA (and sometimes the drugs used to treat it) can affect you.</p>
                                    <p>Many of these problems – such as bone thinning or changes in kidney function – cause no immediate symptoms so your doctor may monitor you through lab tests or checkups. For other problems – such as skin rashes or dry mouth – it’s important to report any symptoms to your doctor, who can determine the cause or causes, and adjust your treatment plan accordingly.</p>
                                    <h4><strong>Skin</strong></h4><strong>Nodules</strong><p>About half of people with RA develop rheumatoid nodules – lumps of tissue that form under the skin, often over bony areas exposed to pressure, such as fingers or elbows. Unless the nodule is located in a sensitive spot, such as where you hold a pen, treatment may not be necessary. Nodules sometimes disappear on their own or with treatment with disease-modifying antirheumatic drugs (DMARDs).</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={3}>
                                    <p className="lead">Signs and symptoms of rheumatoid arthritis may include:</p>
                                    <ul>
                                        <li><h4>Tender, warm, swollen joints</h4></li>
                                        <li><h4>Joint stiffness that is usually worse in the mornings and after inactivity</h4></li>
                                        <li><h4>Fatigue, fever and weight loss</h4></li>
                                    </ul>
                                    <p>Early rheumatoid arthritis tends to affect your smaller joints first — particularly the joints that attach your fingers to your hands and your toes to your feet.</p>
                                    <p>
                                    As the disease progresses, symptoms often spread to the wrists, knees, ankles, elbows, hips and shoulders. In most cases, symptoms occur in the same joints on both sides of your body.
                                    </p>
                                    <p>About 40 percent of the people who have rheumatoid arthritis also experience signs and symptoms that don't involve the joints. Rheumatoid arthritis can affect many nonjoint structures, including:
                                    </p>
                                    <ul>
                                        <li><h5>Skin</h5></li>
                                        <li><h5>Eyes</h5></li>
                                        <li><h5>Lungs</h5></li>
                                        <li><h5>Heart</h5></li>
                                        <li><h5>Salivary gland</h5></li>
                                        <li><h5>Nerve tisue</h5></li>
                                        <li><h5>Bone marrow</h5></li>
                                    </ul>

                                </Tab.Pane>
                                <Tab.Pane eventKey={4}>
                                    <p><strong>About 1.5 million people</strong> in the United States have rheumatoid arthritis (RA). Nearly three times as many women have the disease as men. In women, RA most commonly begins between ages 30 and 60. In men, it often occurs later in life. Having a family member with RA increases the odds of having RA; however, the majority of people with RA have no family history of the disease.
                                    </p>
                                    <p><strong>Arthritis affects 15% people i.e. over 180 million people in India.</strong> This prevalence is higher than many well known diseases such as diabetes, AIDS and cancer. Rheumatology is a holistic super specialty of Internal Medicine that deals with arthritis and rheumatism. Rheumatism indicates pain arising from joints or other elements of musculoskeletal system. There are over 100 rheumatological disorders classified by World Health Organization. Shortage of trained rheumatologists in India has led to management of these diseases by untrained doctors, practitioners of alternative medicine and quacks. Insufficient appreciation of rheumatological problems appears to be due to lack of knowledge about these conditions. arthritis-india aims at providing scientific information on arthritis and allied conditions and help patients overcome their problems. 
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

export default Home;