import React from 'react';
import { View } from 'react-native';

import Header from './TaskList/Header';
import AddView from './TaskList/AddView';
import AddIcon from './TaskList/AddIcon';
import TaskListContainer from '../containers/TaskListContainer';

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var date = day + '/' + month + '/' + year;
class TaskList extends React.Component {
	state = {
		date: date,
	};
	onDateValue(date) {
		this.setState({ date: date.data });
	}
	render() {
		const navigation = this.props.navigation;
		console.log('a', this.props);
		return (
			<View style={styles.container}>
				<Header onChange={this.onDateValue.bind(this)} />
				<TaskListContainer date={this.state.date} />
				<AddIcon navigation={navigation} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};

export default TaskList;
