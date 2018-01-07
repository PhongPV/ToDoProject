import { combineReducers } from 'redux';
import appReducer from './todoReducer';
import settingReducer from './settingReducer';

export default combineReducers({
	addview: appReducer,
	setting: settingReducer,
});
