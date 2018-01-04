import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const AddIcon = props => {
	const navigation = props.navigation;
	const styles = {
		container: {
			position: 'absolute',
			bottom: 10,
			right: 10,
			alignSelf: 'flex-end',
			zIndex: 9999,
		},
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate('Setting')}>
				<MaterialIcons color="red" size={64} name="add-circle" />
			</TouchableOpacity>
		</View>
	);
};
export default AddIcon;
