import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CheckIcon = props => {
	const styles = {
		iconStyle: {
			position: 'absolute',
			bottom: 10,
			right: 10,
			alignSelf: 'flex-end',
		},
	};
	const navigation = props.navigation;
	return (
		<View style={styles.iconStyle}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<MaterialIcons color="green" size={64} name="check-circle" />
			</TouchableOpacity>
		</View>
	);
};
export default CheckIcon;
