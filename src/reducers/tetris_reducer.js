import * as d3 from 'd3';

import {
    REGIST_TETRIMINO,
    DOWN_TETRIMINO,
    LEFT_TETRIMINO,
    RIGHT_TETRIMINO,
    ROTATE_TETRIMINO
} from '../actions/types';

import changePosition from '../func/change_position';


const INIT = {
    tetrimino: []
};


export default function(state=INIT, action){
    switch(action.type){
    case REGIST_TETRIMINO:
        return {...state, tetrimino: action.payload};
    case DOWN_TETRIMINO:
        if(!_checkBottom(state.tetrimino)){
            return state;
        }
        var new_tetrimino = reRender(state.tetrimino, 'DOWN');
        return { ...state, tetrimino:new_tetrimino};
    case LEFT_TETRIMINO:
        console.log(2);
        var new_tetrimino = reRender(state.tetrimino, 'LEFT');
        return { ...state, tetrimino:new_tetrimino};
    case RIGHT_TETRIMINO:
        console.log(3);
        var new_tetrimino = reRender(state.tetrimino, 'RIGHT');
        return { ...state, tetrimino:new_tetrimino};
    case ROTATE_TETRIMINO:
        var new_tetrimino = rotate(state.tetrimino);
        return { ...state, tetrimino:new_tetrimino };
    default:
        return state;
    }
}


function reRender(tetrimino, to){
    let color;
    let new_tetrimino = [];
    let new_tetrimino_state = [];
    for(var old_t of tetrimino){
        color = old_t.attr('fill');
        new_tetrimino.push(changePosition(old_t.attr('id'), to));
        old_t.attr('fill', 'transparent');
    }
    for(var new_t of new_tetrimino){
        let new_state = d3.select('#'+new_t);
        new_tetrimino_state.push(new_state);
        new_state.attr('fill', color);
    }
    return new_tetrimino_state;
}

function rotate(tetrimino){
    let color;
    if (tetrimino[0].attr('fill') === 'yellow'){
        console.log("quit");
        return tetrimino;
    }
    if (tetrimino[0].attr('fill') === "cyan"){
        console.log("bar");
        var target = [];
        for (var old_t of tetrimino){
            target.push(old_t.attr('id').replace('px','').split('-').map(v=>Number(v)));
        }
        console.log('before', target);
        target = target.slice(0, target.length-1);
        console.log('after', target);
        console.log(target[1]);
        if (target[1][0] === target[0][0])
        return tetrimino;
    }
    for (var old_t of tetrimino){
        console.log(old_t.attr('id'));
    }
    return tetrimino;
}


function _checkBottom(tetrimino){

    var temp = {};
    for(let t of tetrimino){
        var value = t.attr('id').replace('px', '').split('-').map(v=>Number(v));
        if(!temp[value[0]]){
            temp[value[0]] = [value[1], t];
        } else {
            if(value[1] > temp[value[0]][0]) {
                temp[value[0]] = [value[1], t];
            }
        }
    }

    var target = [];
    for(var t in temp){
        target.push(temp[t][1]);
    }
    console.log(temp);
    console.log(target);
    for(let t of target){
        var pixel = t.attr('id').replace('px', '').split('-').map(v=>Number(v));
        if(pixel[1] == 20){
            return false;
        }
        var bottom = d3.select(`#px${pixel[0]}-${pixel[1]+1}`);
        
        if(bottom.attr('fill') !=='transparent'){
            console.log(bottom.attr('fill'));
            return false;
        }
    }
    return true;
}
