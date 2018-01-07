import React from 'react';
import { View } from 'react-native';

const DashLine = () => {
	const styles = {
		dashedLine: {
			borderStyle: 'dashed',
			borderBottomWidth: 1,
			marginTop: 10,
		},
	};
	return <View style={styles.dashedLine} />;
};
export default DashLine;
