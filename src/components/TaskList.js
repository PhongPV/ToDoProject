import React from 'react';
import { View } from 'react-native';

import Header from './TaskList/Header';
import AddView from './TaskList/AddView';
import AddIcon from './TaskList/AddIcon';
import TaskListContainer from '../containers/TaskListContainer';

class TaskList extends React.Component {
	render() {
		const navigation = this.props.navigation;
		return (
			<View style={styles.container}>
				<Header />
				<TaskListContainer />
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
