import React from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { finishItem, deleteTask } from '../../actions/todoActions';
class AddView extends React.Component {
	renderItem = ({ item, index }) => {
		return (
			<View style={styles.item}>
				<View style={styles.itemHeaderView} />
				<View style={styles.itemTextContainer}>
					<Text>19:00</Text>
					<Text style={styles.itemText}>{item.content}</Text>
				</View>
				<TouchableOpacity style={styles.itemCheckContainer} onPress={() => this.props.finishItem(item.content)}>
					{item.check ? (
						<MaterialIcons name="check-circle" color="green" size={25} />
					) : (
						<MaterialIcons size={25} name="radio-button-unchecked" />
					)}
				</TouchableOpacity>
			</View>
		);
	};
	shouldComponentUpdate() {
		return true;
	}
	render() {
		console.log('data---', this.props.data);
		return (
			<SectionList
				sections={this.props.data}
				renderItem={this.renderItem}
				extraData={this.props}
				renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
				keyExtractor={(item, index) => index}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.addview.data,
	};
};

export default connect(mapStateToProps, { finishItem, deleteTask })(AddView);

const styles = {
	item: {
		marginHorizontal: 10,
		marginVertical: 5,
		alignItems: 'center',
		borderRadius: 7,
		elevation: 3,
		height: 65,
		flexDirection: 'row',
	},
	sectionHeader: {
		fontSize: 15,
		marginTop: 25,
		marginLeft: 15,
		fontWeight: 'bold',
	},
	itemHeaderView: {
		width: 7,
		height: 65,
		backgroundColor: 'green',
		borderBottomLeftRadius: 7,
		borderTopLeftRadius: 7,
	},
	itemTextContainer: {
		flex: 3,
		paddingLeft: 10,
	},
	itemText: {
		fontWeight: 'bold',
	},
	itemCheckContainer: {
		paddingRight: 10,
	},
};
