import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { downTetrimino } from '../../actions';


export default function(InnerComponent){
    class InputKeyComponent extends Component {
        
        handleKeyDown(e) {
            console.log(e.keyCode);
            switch(e.keyCode){
            case 40:
                this.props.down();
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
        return bindActionCreators({down: downTetrimino}, dispatch);
    }

    return connect(null, mapDispatchToProps)(InputKeyComponent);
}

