import {
    TOGGLE_GRID
} from '../actions/types';

const INIT = {
    grid: false
};


export default function(state=INIT, action) {
    switch(action.type){
    case TOGGLE_GRID:
        return { grid: !state.grid };
    default:
        return state;
    }
}
