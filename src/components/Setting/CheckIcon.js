import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { addTask } from '../../actions/todoActions';

const CheckIcon = props => {
	const styles = {
		iconStyle: {
			position: 'absolute',
			bottom: 10,
			right: 10,
			alignSelf: 'flex-end',
		},
	};
	const checkIcon = () => {
		props.addTask(props.color, props.time, props.content, props.date);
		props.navigation.goBack();
	};
	return (
		<View style={styles.iconStyle}>
			<TouchableOpacity onPress={() => checkIcon()}>
				<MaterialIcons color="green" size={64} name="check-circle" />
			</TouchableOpacity>
		</View>
	);
};

export default connect(null, { addTask })(CheckIcon);
