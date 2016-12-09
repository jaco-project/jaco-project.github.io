import { combineReducers, createStore } from 'redux';
import * as Reducer from './Reducer';

export default createStore(combineReducers<Reducer.IRecuderState>({
	action: Reducer.reduceAction,
}));
