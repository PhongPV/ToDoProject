import React from 'react';
import { View, Text, Picker } from 'react-native';

const DateContainer = () => {
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
	var currentDate = new Date().toDateString();

	return (
		<View style={styles.textStyle}>
			<Text style={styles.titleText}>Date</Text>
			<Picker style={styles.contentText}>
				<Picker.Item label={currentDate} value="java" />
				<Picker.Item label="JavaScript" value="js" />
			</Picker>
		</View>
	);
};
export default DateContainer;
