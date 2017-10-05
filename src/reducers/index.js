import { combineReducers } from 'redux';

import styleReducer from './style_reducer';
import tetrisReducer from './tetris_reducer';


const rootReducer = combineReducers({
    style: styleReducer,
    tetris: tetrisReducer
});

export default rootReducer;
