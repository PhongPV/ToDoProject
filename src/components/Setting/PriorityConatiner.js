import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { chooseColor } from '../../actions/settingActions';
class PriorityContainer extends React.Component {
	renderItem = ({ item, index }) => (
		<TouchableOpacity style={styles.radioStyle} onPress={() => this.props.chooseColor(index)}>
			{item.choose ? (
				<MaterialIcons name="radio-button-checked" size={20} color={item.key} />
			) : (
				<MaterialCommunityIcons name="circle" size={20} color={item.key} />
			)}
		</TouchableOpacity>
	);
	render() {
		console.log('dataPrio', this.props.data);
		return (
			<View style={styles.textStyle}>
				<Text style={styles.titleText}>Priority</Text>
				<View style={styles.contentText}>
					<FlatList data={this.props.data} extraData={this.props} horizontal renderItem={this.renderItem} />
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.setting.data,
	};
};

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
export default connect(mapStateToProps, { chooseColor })(PriorityContainer);
