import { connect } from 'react-redux';
import AddView from '../components/TaskList/AddView';
import { finishItem, deleteTask } from '../actions/todoActions';
import _ from 'lodash';
var newData = {
	data: [
		{
			title: 'TO DO',
			data: [],
		},
		{
			title: 'DONE',
			data: [],
		},
	],
};
getDate = (state, props) => {
	newData.data[0].data = [];
	newData.data[1].data = [];
	for (var i = 0; i < state.addview.data[0].data.length; i++) {
		if (props.date === state.addview.data[0].data[i].date) {
			newData.data[0].data.push(state.addview.data[0].data[i]);
		}
	}
	for (var j = 0; j < state.addview.data[1].data.length; j++) {
		if (props.date === state.addview.data[1].data[j].date) {
			newData.data[1].data.push(state.addview.data[1].data[j]);
		}
	}
	return newData;
};
getDataValue = (data, props) => {
	props.getData(data);
};
const mapStateToProps = (state, props) => {
	var newState = _.cloneDeep(getDate(state, props));
	getDataValue(state.addview.data[0], props);
	// console.log('aaa', state.addview.data);
	return {
		data: newState.data,
	};
};
export default connect(mapStateToProps, { finishItem, deleteTask })(AddView);
