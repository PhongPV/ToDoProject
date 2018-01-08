import React from 'react';
import { View, Text, SectionList, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { finishItem, deleteTask } from '../../actions/todoActions';
const { width } = Dimensions.get('window');
class AddView extends React.Component {
	state = {
		slideAnim: new Animated.Value(0),
	};
	animAction() {
		Animated.timing(this.state.slideAnim, {
			toValue: -70,
			duration: 1000,
		}).start();
	}
	renderItem = ({ item, index }) => {
		return (
			<View style={styles.itemContainer}>
				<View style={[styles.item]}>
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
				<TouchableOpacity style={styles.deleteView} onPress={() => this.props.deleteTask(index, item.check)}>
					<Text style={{ color: '#ffff', paddingHorizontal: 5 }}>Delete</Text>
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
	itemContainer: {
		marginHorizontal: 10,
		marginVertical: 5,
		flexDirection: 'row',
	},
	item: {
		alignItems: 'center',
		borderRadius: 7,
		elevation: 1,
		backgroundColor: '#ffff',
		height: 65,
		width: width - 70,
		flexDirection: 'row',
		//{ transform: [{ translateX: this.state.slideAnim }] }
	},
	deleteView: {
		borderRadius: 7,
		elevation: 3,
		height: 65,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
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
