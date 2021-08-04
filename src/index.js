import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import 'antd/dist/antd.css';
import './index.css'
import './mock/mock'
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
