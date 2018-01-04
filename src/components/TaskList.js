import React from 'react';
import { View } from 'react-native';

import Header from './TaskList/Header';
import AddView from './TaskList/AddView';
import AddIcon from './TaskList/AddIcon';

import { Provider } from 'react-redux';

import TaskListContainer from '../containers/TaskListContainer';
import configureStore from '../store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AppLoading } from 'expo';

const { store, persistor } = configureStore();

class TaskList extends React.Component {
	render() {
		const navigation = this.props.navigation;
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={<AppLoading />}>
					<View style={styles.container}>
						<Header />
						<TaskListContainer />
						<AddIcon navigation={navigation} />
					</View>
				</PersistGate>
			</Provider>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};

export default TaskList;
