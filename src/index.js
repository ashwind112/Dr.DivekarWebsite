import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Diseases from './Diseases'
import Type from './Type'
import './index.css';
import { Router, Route, hashHistory } from 'react-router'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/diseases" component={Diseases}/>
    <Route path="/type" component={Type}/>
  </Router>,
  document.getElementById('root')
);
