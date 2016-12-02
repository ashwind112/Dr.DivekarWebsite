import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import './index.css';
import { Router, Route, hashHistory } from 'react-router'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/home" component={Home}/>
  </Router>,
  document.getElementById('root')
);

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);