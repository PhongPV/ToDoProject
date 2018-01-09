import React from 'react';
import { View, Text, Picker, TextInput } from 'react-native';

const DateContainer = props => {
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
	onChangeDate = date => {
		props.onDate(date);
	};
	return (
		<View style={styles.textStyle}>
			<Text style={styles.titleText}>Date</Text>
			<TextInput
				style={styles.contentText}
				onChangeText={this.onChangeDate}
				value={props.date}
				underlineColorAndroid="transparent"
			/>
		</View>
	);
};
export default DateContainer;
