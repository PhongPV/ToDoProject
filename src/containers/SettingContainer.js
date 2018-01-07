import React from 'react';
import { connect } from 'react-redux';
import AddView from '../components/TaskList/AddView';
import { addTask } from '../actions/todoActions';

const mapStateToProps = state => {
	return {
		data: state.addview.data,
	};
};
export default connect(null, { addTask })(AddView);
