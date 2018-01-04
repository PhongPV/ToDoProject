import { StackNavigator } from 'react-navigation';
import TaskList from './TaskList';
import Setting from './Setting/Setting';

const Router = StackNavigator({
	TaskList: {
		screen: TaskList,
		navigationOptions: {
			header: null,
		},
	},
	Setting: {
		screen: Setting,
	},
});

export default Router;
