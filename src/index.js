import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import reducer from './reducers';

import * as d3 from 'd3'; 


window.d3 = d3;

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById('root'));
