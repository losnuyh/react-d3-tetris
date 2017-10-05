import {
    REGIST_TETRIMINO
} from '../actions/types';


const INIT = {
    tetrimino: []
};


export default function(state=INIT, action){
    switch(action.type){
    case REGIST_TETRIMINO:
        return {...state, tetrimino: action.payload};
    default:
        return state;
    }
}
