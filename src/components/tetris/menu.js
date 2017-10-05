import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as d3 from 'd3';

import { toggleGrid, registTetrimino, downTetrimino } from '../../actions';
import { startTetris } from '../../func/throw_tetrimino';


class Menu extends Component {
    handleGridOpt(){
        this.props.toggle_grid();
    }

    startNewGame(){
        d3.selectAll('rect').attr('fill', 'transparent');
        const tetrimino = startTetris();
        this.props.regist_tetrimino(tetrimino);
        window.game = setInterval(this.props.down, 500);
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
        regist_tetrimino: registTetrimino,
        down: downTetrimino
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
