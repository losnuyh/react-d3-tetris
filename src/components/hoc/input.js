import React, { Component } from 'react';


export default function(InnerComponent){
    class InputKeyComponent extends Component {
        
        handleKeyDown(e) {
            console.log(e.keyCode);
        }

        render() {
            return (
                <div
                  tabIndex="1"
                  onKeyDown={ e => this.handleKeyDown(e)}
                  >
                  <InnerComponent
                    { ...this.props } />
                </div>
            );
        }
    }

    return InputKeyComponent;
}

