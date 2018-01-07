import React from 'react';
import { View, Text, Picker, TimePickerAndroid, TouchableOpacity } from 'react-native';
const TimeContainer = () => {
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
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minute = currentDate.getMinutes();
	var time = hour + ':' + minute;
	return (
		<View style={styles.textStyle}>
			<Text style={styles.titleText}>Time</Text>
			<TouchableOpacity style={styles.contentText}>
				<Text>{time}</Text>
			</TouchableOpacity>
		</View>
	);
};
export default TimeContainer;
