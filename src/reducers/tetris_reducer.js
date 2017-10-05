import * as d3 from 'd3';

import {
    REGIST_TETRIMINO,
    DOWN_TETRIMINO,
    LEFT_TETRIMINO,
    RIGHT_TETRIMINO,
    ROTATE_TETRIMINO
} from '../actions/types';

import changePosition from '../func/change_position';
import { throw_tetrimino } from '../func/throw_tetrimino';


const INIT = {
    tetrimino: []
};


export default function(state=INIT, action){
    switch(action.type){
    case REGIST_TETRIMINO:
        return {...state, tetrimino: action.payload};
    case DOWN_TETRIMINO:
        if(!_checkBottom(state.tetrimino)){
            console.log("stack");
            let new_tetrimino = stack(state.tetrimino);
            if (!new_tetrimino){
                return INIT;
            }
            return { ...state, tetrimino: new_tetrimino };
        }
        var new_tetrimino = reRender(state.tetrimino, 'DOWN');
        return { ...state, tetrimino:new_tetrimino};
    case LEFT_TETRIMINO:
        if(!_checkLeft(state.tetrimino)){
            return state;
        }        
        var new_tetrimino = reRender(state.tetrimino, 'LEFT');
        return { ...state, tetrimino:new_tetrimino};
    case RIGHT_TETRIMINO:
        if(!_checkRight(state.tetrimino)){
            return state;
        }        
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
        target = target.slice(0, target.length-1);
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

    for(let t of target){
        var pixel = t.attr('id').replace('px', '').split('-').map(v=>Number(v));
        if(pixel[1] == 20){
            return false;
        }
        var bottom = d3.select(`#px${pixel[0]}-${pixel[1]+1}`);
        
        if(bottom.attr('fill') !=='transparent'){
            return false;
        }
    }
    return true;
}


function _checkLeft(tetrimino){
    var temp = {};
    for(let t of tetrimino){
        var value = t.attr('id').replace('px', '').split('-').map(v=>Number(v));
        if(!temp[value[1]]){
            temp[value[1]] = [value[0], t];
        }
    }

    var target = [];
    for(var t in temp){
        target.push(temp[t][1]);
    }

    for(let t of target){
        var pixel = t.attr('id').replace('px', '').split('-').map(v=>Number(v));
        if(pixel[0] == 1){
            return false;
        }
        var left = d3.select(`#px${pixel[0]-1}-${pixel[1]}`);
        
        if(left.attr('fill') !=='transparent'){
            return false;
        }
    }
    return true;
}


function _checkRight(tetrimino){
    var temp = {};
    for(let t of tetrimino){
        var value = t.attr('id').replace('px', '').split('-').map(v=>Number(v));
        temp[value[1]] = [value[0], t];
    }

    var target = [];
    for(var t in temp){
        target.push(temp[t][1]);
    }

    for(let t of target){
        var pixel = t.attr('id').replace('px', '').split('-').map(v=>Number(v));
        if(pixel[0] == 10){
            return false;
        }
        var left = d3.select(`#px${pixel[0]+1}-${pixel[1]}`);
        
        if(left.attr('fill') !=='transparent'){
            return false;
        }
    }
    return true;
}


function stack(tetrimino){
    for(let i=1; i<21 ; i++){
        let fill_row = _lineCheck(i);
        console.log('fill_row', fill_row);
        if(fill_row){
            // remove line
            _removeLine(i);


            // make down upper rows
            _makeDownRows(i);
        }
    }

    return throw_tetrimino();
}


function _lineCheck(row){
    for (let j=1; j<11; j++){
        let fill = d3.select(`#px${j}-${row}`).attr('fill');
        if(fill === 'transparent'){
            return false;
        }
    }
    return true;
}


function _removeLine(row){
    for (let j=1; j<11; j++){
        d3.select(`#px${j}-${row}`).attr('fill', 'transparent');
    }
}


function _makeDownRows(row){
    if (row===1){
        return;
    }
    for (let i=(row-1); i>1; i--){
        // 맨윗줄은 투명으로
        for (let j=1; j<11; j++){
            let pixel = d3.select(`#px${j}-${i}`);
            let color = pixel.attr('fill');
            pixel.attr('fill', 'transparent');
            d3.select(`#px${j}-${i+1}`).attr('fill', color);
        }
    }
}
