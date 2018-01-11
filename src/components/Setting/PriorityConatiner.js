import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
const data = [
	{ key: 'red', choose: false },
	{ key: 'yellow', choose: false },
	{ key: 'green', choose: false },
	{ key: 'purple', choose: true },
	{ key: 'grey', choose: false },
];

class PriorityContainer extends React.Component {
	state = {
		dataX: data,
	};
	chooseColor = (item, index) => {
		for (var i = 0; i < data.length; i++) {
			data[i].choose = false;
		}
		data[index].choose = true;
		this.setState({ dataX: data });
		this.props.onColor(data[index].key);
	};
	renderItem = ({ item, index }) => (
		<TouchableOpacity style={styles.radioStyle} onPress={() => this.chooseColor(item, index)}>
			{item.choose ? (
				<MaterialIcons name="radio-button-checked" size={20} color={item.key} />
			) : (
				<MaterialCommunityIcons name="circle" size={20} color={item.key} />
			)}
		</TouchableOpacity>
	);
	render() {
		return (
			<View style={styles.textStyle}>
				<Text style={styles.titleText}>Priority</Text>
				<View style={styles.contentText}>
					<FlatList data={this.state.dataX} extraData={this.state} horizontal renderItem={this.renderItem} />
				</View>
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
	radioStyle: {
		paddingLeft: 10,
	},
};
export default PriorityContainer;
