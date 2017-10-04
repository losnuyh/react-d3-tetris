import React, { Component } from 'react';

import './style.css';
import Title from './title';
import Frame from './frame';
import Menu from './menu';


class Tetris extends Component {
    render() {
        return (
            <div>
              <Title />
              <Frame />
              <Menu />
            </div>
        );
    }
}


export default Tetris;
