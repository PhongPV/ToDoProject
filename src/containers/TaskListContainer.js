import { connect } from 'react-redux';
import AddView from '../components/TaskList/AddView';
import { finishItem, deleteTask } from '../actions/todoActions';

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var date = day + '/' + month + '/' + year;
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
const mapStateToProps = (state, props) => {
	var newState = getDate(state, props);
	console.log('sss', newState);
	console.log('aaa', state.addview.data);
	return {
		data: newState.data,
	};
};
export default connect(mapStateToProps, { finishItem, deleteTask })(AddView);
