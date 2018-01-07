import React from 'react';
import { View, Text, TouchableOpacity, Picker, FlatList, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import NameContainer from './Setting/NameContainer';
import DateContainer from './Setting/DateContainer';
import TimeContainer from './Setting/TimeContainer';
import PriorityConatiner from './Setting/PriorityConatiner';
import CheckIcon from './Setting/CheckIcon';
import DashLine from './Setting/DashLine';

import ChooseColorContainer from '../containers/ChooseColorContainer';

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
			content: '',
		};
	}
	onChangeText(text) {
		this.setState(() => {
			return {
				content: text,
			};
		});
	}
	onChangeColor(color) {
		this.setState(() => {
			return {
				color: color,
			};
		});
	}
	render() {
		var currentDate = new Date();
		var hour = currentDate.getHours();
		var minute = currentDate.getMinutes();
		var time = hour + ':' + minute;
		const navigation = this.props.navigation;
		return (
			<View style={styles.container}>
				<NameContainer onChange={this.onChangeText.bind(this)} />
				<DashLine />
				<DateContainer />
				<DashLine />
				<TimeContainer time={time} />
				<DashLine />
				<ChooseColorContainer onChange={this.onChangeColor.bind(this)} />
				<CheckIcon navigation={navigation} color={this.state.color} time={time} content={this.state.content} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};

export default Setting;
