import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { fetchAllData } from '../actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchAllData());

export default store;