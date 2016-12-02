import React, { Component } from 'react';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import Treatment from './Treatment'
import { Tab, Nav,NavItem,Row,Col } from 'react-bootstrap'
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
      <div className="container-fluid">
      <header>
        <div className="jumbotron">
          <Header />
        </div>
      </header>
        <Tab.Container defaultActiveKey={this.state.currentKey} id="MainTab">
        <Row className="clearfix">

        <Col lg={2}>
          <Nav bsStyle='pills' stacked>
            <NavItem eventKey={1}>Home</NavItem>
            <NavItem eventKey={2}>How We Treat</NavItem>
          </Nav>
        </Col>
          <Col lg={10}> 
            <Tab.Content animation>
  
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
        <footer className="container-fluid padding">
          <Footer changeTab={this.changeTab}/>
        </footer>
      </div>
      );
  }
}

export default App;
