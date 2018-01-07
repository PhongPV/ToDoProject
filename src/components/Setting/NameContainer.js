import React from 'react';
import { View, Text, TextInput } from 'react-native';

const NameContainer = () => {
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
		textInputStyle: {
			flex: 3,
			justifyContent: 'center',
			fontSize: 15,
		},
	};
	return (
		<View style={styles.textStyle}>
			<Text style={styles.titleText}>Name</Text>
			<TextInput style={styles.textInputStyle} underlineColorAndroid="transparent">
				Thanks For Watching
			</TextInput>
		</View>
	);
};

export default NameContainer;
