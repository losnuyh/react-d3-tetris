import * as d3 from 'd3';


export default function rotate(tetrimino){
    console.log("TETRIMINO", tetrimino);
    switch(tetrimino[0].attr('fill')){
    case 'yellow': // O
        console.log("YELLOW");
        return tetrimino;
    case 'cyan': // I
        return tetrimino;
    default:
        return M3x3(tetrimino, tetrimino[0].attr('fill'));
    }
};


function M3x3(tetrimino, color){
    clearInterval(window.game);
    let metrix = [];
    let row = [];
    let col = [];
    for (let p of tetrimino){
        p.attr('fill', 'transparent');
        let temp = p.attr('id').replace('px', '').split('-').map(v=>Number(v));
        metrix.push(temp);
        if(row.indexOf(temp[1]) === -1){
            row.push(temp[1]);
        }
        if(col.indexOf(temp[0]) === -1){        
            col.push(temp[0]);
        }
    }
    let row_base = Math.min(...row) - 1 ;
    row.length === 2 ? row_base : '';
    let col_base = Math.min(...col) - 1 ;
    col.length === 2 ? col_base-- : '';
    let r_val = [];
    for (let p of metrix){
        
        var col_v = p[0] - col_base;
        var row_v = p[1] - row_base;

        if( col_v === 1) {
            col_v = row_v,
            row_v = 3
        } else if ( col_v === 2 ) {
            col_v = row_v,
            row_v = 2
        } else {
            col_v= row_v,
            row_v = 1
        };
        let r_row_v = row_v + row_base;
        let r_col_v = col_v + col_base;
        let rv = d3.select(`#px${r_col_v}-${r_row_v}`);
        console.log('r_row_v', r_row_v);
        console.log('r_col_v', r_col_v);
        if ( r_row_v < 1 || r_row_v > 20 || r_col_v < 1 || r_col_v > 10) {
            for(let p of tetrimino) {
                p.attr('fill', color);
            }
            console.log(1111);
            console.log('return : ', tetrimino);
            return tetrimino;
        } else if( rv.attr('fill') !== 'transparent'){
            for(let p of tetrimino) {
                p.attr('fill', color);
            }
            console.log(2222)
            return tetrimino;
        }

        rv.attr('fill', color);
        r_val.push(rv);
    }
    r_val.sort(sortSelection);
    return r_val;
}


function sortSelection(a, b){
    let a_position = a.attr('id').replace('px', '').split('-').map(v=>Number(v));
    let b_position = b.attr('id').replace('px', '').split('-').map(v=>Number(v));
    if (a_position[1] < b_position[1]) {
        return -1;
    } else if (a_position[0] < b_position[0]){
        return -1;
    }
    return 1;
}
