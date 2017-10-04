import React from 'react';

import { Rect } from 'd3';


const Pixel = ({x, y}) => {
    let x_id = Math.floor(x/30);
    let y_id;


    if((y/30)>21) {
        y_id = Math.floor(y/30) - 2;
    } else if ((y/30)>10) {
        y_id = Math.floor(y/30) - 1 ;
    } else {
        y_id = Math.floor(y/30);
    }

    x_id++, y_id++;

    return (
        <rect
          id={`px${x_id}-${y_id}`}
          x={x} y={y}
          width={30} height={30} fill={'transparent'} />
    );
};


export default Pixel;
