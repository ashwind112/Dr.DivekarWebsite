import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router'
class Footer extends Component{
    selectedKey
    goToTab(selectedKey){
        alert(selectedKey)
        this.props.changeTab(selectedKey);
    }
    render(){
        return(
            <div className="container-fluid padding">
            <Row>
                <Col sm={6}>
                    <h2>Dont Forget to Like us</h2>
                    <p><a href="">Facebook</a></p>
                    <p><a href="">Twitter</a></p>
                    <p><a href="">Linked In</a></p>
                </Col>
                <Col sm={6}>
                    <h2>Site Map</h2>
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="/treatment">Treatment</Link></li>
                        <li><Link to="/">Back To App</Link></li>
                    </ul>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Footer;