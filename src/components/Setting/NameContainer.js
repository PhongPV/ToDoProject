import React from 'react';
import { View, Text, TextInput } from 'react-native';

class NameContainer extends React.Component {
	onChangeText = text => {
		this.props.onChange(text);
	};
	render() {
		return (
			<View style={styles.textStyle}>
				<Text style={styles.titleText}>Name</Text>
				<TextInput
					style={styles.textInputStyle}
					underlineColorAndroid="transparent"
					onChangeText={this.onChangeText}
					value={this.props.value}
				/>
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
	textInputStyle: {
		flex: 3,
		justifyContent: 'center',
		fontSize: 15,
	},
};
export default NameContainer;
