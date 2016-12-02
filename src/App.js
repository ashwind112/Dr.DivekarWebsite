import React, { Component } from 'react';
import Home from './Home';
import Treatment from './Treatment'
import { Tab, Nav,NavItem,Row,Col } from 'react-bootstrap'
class App extends Component {
  render() {
    return (
      <div>
        <Tab.Container defaultActiveKey={1} id="MainTab">
        <Row className="clearfix">
        <Col>
          <Nav bsStyle='pills'>
            <NavItem eventKey={1}>Home</NavItem>
            <NavItem eventKey={2}>How We Treat</NavItem>
          </Nav>
          <Tab.Content animation>
          <br></br>
            <Tab.Pane eventKey={1}>
              <div className="container-fluid padding panel panel-default">
                <Home />
              </div>
            </Tab.Pane>
             <Tab.Pane eventKey={2}>
              <div className="container-fluid padding panel panel-default">
                <Treatment />
              </div>
            </Tab.Pane>
          </Tab.Content>
          </Col>
          </Row>
        </Tab.Container>
      </div>
      );
  }
}

export default App;
