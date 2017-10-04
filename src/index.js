import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import * as d3 from 'd3'; 


window.d3 = d3;

ReactDOM.render(<App />, document.getElementById('root'));
