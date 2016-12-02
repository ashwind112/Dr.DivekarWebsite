import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Home from './Home'
import Treatment from './Treatment'
import './index.css';
import { Router, Route, hashHistory } from 'react-router'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/home" component={Home}/>
    <Route path="Treatment" component={Treatment}/>
  </Router>,
  document.getElementById('root')
);
