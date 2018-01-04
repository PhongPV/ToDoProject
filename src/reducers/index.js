import { combineReducers } from 'redux';
import appReducer from './todoReducer';

export default combineReducers({
	addview: appReducer,
});
