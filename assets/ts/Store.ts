import { combineReducers, createStore } from 'redux';
import * as Reducer from './Reducer';

export default createStore(combineReducers({
	action: Reducer.action,
}));
