import { combineReducers } from 'redux';
import data from './reducersType';

const rootReducer = combineReducers({
    data: data
})
  
export default rootReducer;
