import * as d3 from 'd3';

import { TETRIMINO } from './config';


export function startTetris() {
    return throw_tetrimino();
}


export function throw_tetrimino(){
    const t_info = pick_tetrimino();
//    switch(t_info.shape){
    switch('O'){
    case 'I':
        var p1 = d3.select('#px4-1');
        var p2 = d3.select('#px5-1');
        var p3 = d3.select('#px6-1');
        var p4 = d3.select('#px7-1');
        if(!end(p1, p2, p3, p4)){
            return ;
        }
        p1.attr('fill', t_info.color);
        p2.attr('fill', t_info.color);
        p3.attr('fill', t_info.color);
        p4.attr('fill', t_info.color);
        return [p1, p2, p3, p4];
    case 'O':
        var p1 = d3.select('#px5-1');
        var p2 = d3.select('#px6-1');
        var p3 = d3.select('#px5-2');
        var p4 = d3.select('#px6-2');
        if(!end(p1, p2, p3, p4)){
            return;
        }
        p1.attr('fill', t_info.color);
        p2.attr('fill', t_info.color);
        p3.attr('fill', t_info.color);
        p4.attr('fill', t_info.color);
        return [p1, p2, p3, p4];
    case 'T':
        var p1 = d3.select('#px4-1');
        var p2 = d3.select('#px5-1');
        var p3 = d3.select('#px6-1');
        var p4 = d3.select('#px5-2');
        if(!end(p1, p2, p3, p4)){
            return;
        }
        p1.attr('fill', t_info.color);
        p2.attr('fill', t_info.color);
        p3.attr('fill', t_info.color);
        p4.attr('fill', t_info.color);
        return [p1, p2, p3, p4];
    case 'S':
        var p1 = d3.select('#px5-1');
        var p2 = d3.select('#px6-1');
        var p3 = d3.select('#px4-2');
        var p4 = d3.select('#px5-2');
        if(!end(p1, p2, p3, p4)){
            return;
        }
        p1.attr('fill', t_info.color);
        p2.attr('fill', t_info.color);
        p3.attr('fill', t_info.color);
        p4.attr('fill', t_info.color);
        return [p1, p2, p3, p4];
    case 'Z':
        var p1 = d3.select('#px4-1');
        var p2 = d3.select('#px5-1');
        var p3 = d3.select('#px5-2');
        var p4 = d3.select('#px6-2');
        if(!end(p1, p2, p3, p4)){
            return;
        }
        p1.attr('fill', t_info.color);
        p2.attr('fill', t_info.color);
        p3.attr('fill', t_info.color);
        p4.attr('fill', t_info.color);
        return [p1, p2, p3, p4];
    case 'J':
        var p1 = d3.select('#px4-1');
        var p2 = d3.select('#px4-2');
        var p3 = d3.select('#px5-2');
        var p4 = d3.select('#px6-2');
        if(!end(p1, p2, p3, p4)){
            return;
        }
        p1.attr('fill', t_info.color);
        p2.attr('fill', t_info.color);
        p3.attr('fill', t_info.color);
        p4.attr('fill', t_info.color);
        return [p1, p2, p3, p4];
    case 'L':
        var p1 = d3.select('#px6-1');
        var p2 = d3.select('#px4-2');
        var p3 = d3.select('#px5-2');
        var p4 = d3.select('#px6-2');
        if(!end(p1, p2, p3, p4)){
            return;
        }
        p1.attr('fill', t_info.color);
        p2.attr('fill', t_info.color);
        p3.attr('fill', t_info.color);
        p4.attr('fill', t_info.color);
        return [p1, p2, p3, p4];
    }
}

function pick_tetrimino(){
    return TETRIMINO[Math.floor(Math.random() * TETRIMINO.length)];
}




function end(p1, p2, p3, p4){
    for (let p of [p1, p2, p3, p4]){
        if(!_end(p)){
            return false;
        }
    }
    return true;

}

function _end(p){
    if(p.attr('fill') !== 'transparent'){
        return false;
    }
    return true;
}
