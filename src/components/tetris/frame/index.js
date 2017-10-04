import React from 'react';

import * as d3 from 'd3';

import Row from './row';


const Frame = () => {
    const y_array = [
        0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300,
        330, 360, 390, 420, 450, 480, 510, 540, 570, 600
    ];

    return (
        <div
          className="container">
          <div
            className="frame">
            <svg
              width={330}
              height={660}
              >
              { y_array.map( (v, i) => {
                  return (
                      <Row
                        key={i}
                        y={ v + (i*3) }/>
                  );
              })}
            </svg>
          </div>
        </div>
    );
};

export default Frame;
