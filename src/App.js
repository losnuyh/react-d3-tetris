import React, { Component } from 'react';

import InputKeyComponent from './components/hoc/input';

import Tetris from './components/tetris';


class App extends Component {
  render() {
    return (
        <div>
          <Tetris />
        </div>
    );
  }
}

export default InputKeyComponent(App);
