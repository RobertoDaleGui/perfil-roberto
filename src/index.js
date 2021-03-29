import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/style.css';

import Menu from './containers/Menu';
import Background from './containers/Background';
import Box from './component/Box';
import Profile from './containers/Profile';
import Profile2 from './containers/Profile2';
import NotFound from './containers/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Background>
      <Menu />
      <Router>
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/profile2" component={Profile2}/>          
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </Router>
    </Background>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
