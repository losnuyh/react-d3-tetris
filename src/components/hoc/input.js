import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    downTetrimino,
    rightTetrimino,
    leftTetrimino,
    rotateTetrimino
} from '../../actions';


export default function(InnerComponent){
    class InputKeyComponent extends Component {
        handleKeyDown(e) {
            console.log('input key : ', e.keyCode);
            switch(e.keyCode){
            case 40:
                this.props.down();
                break;
            case 39:
                this.props.right();
                break;
            case 37:
                this.props.left();
                break;
            case 38:
                this.props.up();
                break;
            }
        }

        render() {
            return (
                <div
                  id="tetris"
                  tabIndex="1"
                  onKeyDown={ e => this.handleKeyDown(e)}
                  >
                  <InnerComponent
                    { ...this.props } />
                </div>
            );
        }
    }

    function mapDispatchToProps(dispatch){
        return bindActionCreators(
            {
                down: downTetrimino,
                left: leftTetrimino,
                right: rightTetrimino,
                up: rotateTetrimino
            }, dispatch);
    }

    return connect(null, mapDispatchToProps)(InputKeyComponent);
}
