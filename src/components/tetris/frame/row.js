import React from 'react';

import Pixel from './pixel';


const Row = ({y}) => {
    const x_array = [
        0, 30, 60, 90, 120, 150, 180, 210, 240, 270
    ];

    return (
        <g >
          { x_array.map((v, i) => {
              return(
                  <Pixel x={ v + (i*3) } y={y} key={i} />
              );
          }) }

        </g>
    );
};


export default Row;
