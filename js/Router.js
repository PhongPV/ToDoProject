import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Setting from './Setting';

const Router = StackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header: null,
		},
	},
	Setting: {
		screen: Setting,
	},
});

export default Router;
