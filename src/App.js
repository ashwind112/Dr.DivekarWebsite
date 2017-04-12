import React, { Component } from 'react';
import Diseases from './Diseases';
import Header from './Header'
import Footer from './Footer'
import Type from './Type'
import GetTreated from './GetTreated'
import './App.css'
import { Tab, Nav,NavItem,Row,Col,Navbar } from 'react-bootstrap'
import {Link} from 'react-router'
class App extends Component {
  constructor(props){
    super(props);
    this.state={currentKey : 1}
    this.changeTab=this.changeTab.bind(this)
  }
  
  changeTab(selectedKey){
    this.setState({currentKey : selectedKey})
  }
  render() {
    return (
      <div>
      <header>
        <div className="jumbotron">
          <Header />
        </div>
      </header>
      <Navbar className="navbar-back">
      <Navbar.Header >
        <Navbar.Brand className="navitem-color">
          <Link to="/">Dr. Divekar's Treatment Center</Link>
        </Navbar.Brand>
      </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} >About Us</NavItem>
            <NavItem eventKey={2} >Contact Us</NavItem>
          </Nav>
        </Navbar>
        <Tab.Container defaultActiveKey={1} id="MainTab">
        <Row className="clearfix">

        <Col lg={2}>
          <Nav bsStyle='pills' stacked>
            <NavItem eventKey={1}>Diseases</NavItem>
            <NavItem eventKey={2}>Treatement</NavItem>
            <NavItem eventKey={3}>How To get treatment</NavItem>
          </Nav>
        </Col>
          <Col lg={10}> 
            <Tab.Content animation>
  
              <Tab.Pane eventKey={1}>
                <div className="container-fluid padding panel panel-default">
                  <Diseases />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <div className="container-fluid padding panel panel-default">
                  <Type />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={3}>
              <div className="container-fuild padding panel panel-default">
                  <GetTreated />
              </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          </Row>
        </Tab.Container>
        <footer className="container-fluid padding">
          <Footer changeTab={this.changeTab}/>
        </footer>
      </div>
      );
  }
}

export default App;
