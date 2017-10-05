import * as d3 from 'd3';

import {
    TOGGLE_GRID,
    REGIST_TETRIMINO,
    DOWN_TETRIMINO
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
                .attr('stroke', '#EEE');
        }

        for(let i=1; i < 21; i++){
            svg.append('line')
                .attr('x1',1)
                .attr('y1',33*i)
                .attr('x2',660)
                .attr('y2',33*i)
                .attr('stroke-width', 1)
                .attr('stroke', '#EEE');
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
