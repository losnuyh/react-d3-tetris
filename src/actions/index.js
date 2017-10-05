import * as d3 from 'd3';

import {
    TOGGLE_GRID,
    REGIST_TETRIMINO,
    DOWN_TETRIMINO,
    LEFT_TETRIMINO,
    RIGHT_TETRIMINO,
    ROTATE_TETRIMINO
} from './types';


export function toggleGrid() {
    var svg = d3.select('svg');
    let key = JSON.parse(JSON.stringify(svg.select('line')._groups[0]))[0];
    if (!key&& typeof key === "object") {
        for(let i=1; i < 11; i++){
            svg.append('line')
                .attr('x1', 33*i )
                .attr('y1', 6)
                .attr('x2', 33*i )
                .attr('y2', 676)
                .attr('stroke-width', 1)
                .attr('stroke', '#999');
        }

        for(let i=1; i < 20; i++){
            svg.append('line')
                .attr('x1',1)
                .attr('y1',33*i)
                .attr('x2',660)
                .attr('y2',33*i)
                .attr('stroke-width', 1)
                .attr('stroke', '#999');
        }

    } else {
        svg.selectAll('line').remove();
    }
    

    return {
        type: TOGGLE_GRID
    };
}


export function registTetrimino(tetrimino) {
    return {
        type: REGIST_TETRIMINO,
        payload: tetrimino
    };
}


export function downTetrimino(){
    return {
        type: DOWN_TETRIMINO
    };
}


export function rightTetrimino(){
    return {
        type: RIGHT_TETRIMINO
    };
}


export function leftTetrimino(){
    return {
        type: LEFT_TETRIMINO
    };
}

export function rotateTetrimino(){
    return {
        type: ROTATE_TETRIMINO
    };
}
