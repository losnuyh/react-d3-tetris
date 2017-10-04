import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleGrid } from '../../actions';


class Menu extends Component {
    handleGridOpt(){
        this.props.toggle_grid();
        console.log("after : ", this.props.grid);
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

            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        grid: state.style.grid
    };
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        toggle_grid: toggleGrid
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
