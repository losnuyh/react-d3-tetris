import { combineReducers } from 'redux';

import styleReducer from './style_reducer';


const rootReducer = combineReducers({
    style: styleReducer
});

export default rootReducer;
