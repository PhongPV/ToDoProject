import React from 'react';
import { connect } from 'react-redux';
import PriorityContainer from '../components/Setting/PriorityConatiner';
import Setting from '../components/Setting';
import { chooseColor } from '../actions/settingActions';

const mapStateToProps = state => {
	return {
		data: state.setting.data,
	};
};
export default connect(mapStateToProps, { chooseColor })(PriorityContainer);
