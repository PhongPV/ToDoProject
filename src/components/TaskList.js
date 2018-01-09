import React from 'react';
import { View } from 'react-native';

import Header from './TaskList/Header';
import AddView from './TaskList/AddView';
import AddIcon from './TaskList/AddIcon';
import TaskListContainer from '../containers/TaskListContainer';

class TaskList extends React.Component {
	state = {
		date: '1/9/2018',
	};
	onDateValue(date) {
		this.setState({ date: date.data });
	}
	render() {
		const navigation = this.props.navigation;
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
