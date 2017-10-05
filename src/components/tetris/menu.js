import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleGrid, registTetrimino } from '../../actions';
import { startTetris } from '../../func/throw_tetrimino';


class Menu extends Component {
    handleGridOpt(){
        this.props.toggle_grid();
    }

    startNewGame(){
        const tetrimino = startTetris();
        this.props.regist_tetrimino(tetrimino);
    }

    render() {
        return (
            <div
              className="menu">
              <label>
                Grid : 
                <input
                  type="checkbox"
                  checked={this.props.grid ? true : false}
                  onClick={this.handleGridOpt.bind(this)}
                  />
              </label>

              <br/>

              <button
                onClick={()=>{
                    this.startNewGame();
                }}>
                NEW GAME
              </button>

            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        grid: state.style.grid,
        tetrimino: state.tetris.tetrimino
    };
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        toggle_grid: toggleGrid,
        regist_tetrimino: registTetrimino
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
