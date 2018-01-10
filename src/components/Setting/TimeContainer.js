import React from 'react';
import { View, Text, Picker, TimePickerAndroid, TouchableOpacity, TextInput } from 'react-native';
class TimeContainer extends React.Component {
	state = {
		time: '10:00',
	};
	onChangeValue = text => {
		this.props.onTime(text);
	};
	render() {
		return (
			<View style={styles.textStyle}>
				<Text style={styles.titleText}>Time</Text>
				<TouchableOpacity style={styles.contentText}>
					<TextInput
						onChangeText={this.onChangeValue}
						underlineColorAndroid="transparent"
						value={this.props.time}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = {
	textStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	titleText: {
		flex: 1,
		fontSize: 17,
		fontWeight: 'bold',
	},
	contentText: {
		flex: 3,
	},
};
export default TimeContainer;
