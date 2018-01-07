import React from 'react';
import { connect } from 'react-redux';
import AddView from '../components/TaskList/AddView';
import { finishItem, deleteTask } from '../actions/todoActions';

const mapStateToProps = state => {
	return {
		data: state.addview.data,
	};
};
export default connect(mapStateToProps, { finishItem, deleteTask })(AddView);