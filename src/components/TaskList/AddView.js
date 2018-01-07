import React from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { finishItem, deleteTask } from '../../actions/todoActions';
class AddView extends React.Component {
	renderItem = ({ item, index }) => {
		return (
			<View style={styles.item}>
				<View style={[styles.itemHeaderView, { backgroundColor: item.color }]} />
				<View style={styles.itemTextContainer}>
					<Text>{item.time}</Text>
					<Text style={styles.itemText}>{item.content}</Text>
				</View>
				<TouchableOpacity
					style={styles.itemCheckContainer}
					onPress={() => this.props.finishItem(item.color, item.time, item.content, item.check, index)}
				>
					{item.check ? (
						<MaterialIcons name="check-circle" color="green" size={25} />
					) : (
						<MaterialIcons size={25} name="radio-button-unchecked" />
					)}
				</TouchableOpacity>
			</View>
		);
	};
	render() {
		console.log('data---', this.props.data);
		return (
			<SectionList
				sections={this.props.data}
				renderItem={this.renderItem}
				extraData={this.props.data}
				renderSectionHeader={({ section }) => (
					<Text style={styles.sectionHeader}>
						{section.title} ({section.data.length})
					</Text>
				)}
				keyExtractor={(item, index) => index}
			/>
		);
	}
}

export default AddView;

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
