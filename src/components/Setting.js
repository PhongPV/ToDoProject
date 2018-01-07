import React from 'react';
import { View, Text, TouchableOpacity, Picker, FlatList, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import NameContainer from './Setting/NameContainer';
import DateContainer from './Setting/DateContainer';
import TimeContainer from './Setting/TimeContainer';
import PriorityConatiner from './Setting/PriorityConatiner';
import CheckIcon from './Setting/CheckIcon';
import DashLine from './Setting/DashLine';

import { Provider } from 'react-redux';

import ChooseColorContainer from '../containers/ChooseColorContainer';
import configureStore from '../store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AppLoading } from 'expo';

const { store, persistor } = configureStore();

class Setting extends React.Component {
	static navigationOptions = {
		title: 'ADD NEW TASK',
		headerTitleStyle: {
			alignSelf: 'center',
		},
		headerStyle: {
			backgroundColor: 'purple',
		},
		headerRight: (
			<TouchableOpacity style={{ paddingRight: 10 }}>
				<MaterialIcons name="more-horiz" color="#ffff" size={32} />
			</TouchableOpacity>
		),
		headerTintColor: '#ffff',
	};
	constructor(props) {
		super(props);
		this.state = {
			color: 'purple',
		};
	}
	render() {
		const navigation = this.props.navigation;
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={<AppLoading />}>
					<View style={styles.container}>
						<NameContainer />
						<DashLine />
						<DateContainer />
						<DashLine />
						<TimeContainer />
						<DashLine />
						<ChooseColorContainer />
						<CheckIcon navigation={navigation} />
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

export default Setting;
