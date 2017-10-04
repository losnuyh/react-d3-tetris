import React, { Component } from 'react';

import './style.css';
import Title from './title';
import Frame from './frame';


class Tetris extends Component {
    render() {
        return (
            <div>
              <Title />
              <Frame />
            </div>
        );
    }
}


export default Tetris;
