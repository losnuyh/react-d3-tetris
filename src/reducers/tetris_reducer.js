import {
    REGIST_TETRIMINO,
    DOWN_TETRIMINO
} from '../actions/types';


const INIT = {
    tetrimino: []
};


export default function(state=INIT, action){
    switch(action.type){
    case REGIST_TETRIMINO:
        return {...state, tetrimino: action.payload};
    case DOWN_TETRIMINO:
        for(var t of state.tetrimino){
            console.log(t.attr('fill'));
            console.log(t.attr('id'));
//            t.attr('fill', 'transparent');
        }
        return state;
    default:
        return state;
    }
}
