import React from 'react';

import { Rect } from 'd3';


const Pixel = ({x, y}) => {
    return (
        <rect
          x={x} y={y}
          width={30} height={30} fill={'transparent'} />
    );
};


export default Pixel;
