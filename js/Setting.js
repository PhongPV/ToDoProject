import React from 'react';
import { View, Text, TouchableOpacity, Picker, FlatList, TextInput } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

class Setting extends React.Component {
	static navigationOptions = {
		title: 'ADD NEW TASK',
		headerTitleStyle: {
			alignSelf: 'center',
		},
		headerStyle: {
			backgroundColor: 'purple',
		},
		headerRight: (
			<TouchableOpacity style={{ paddingRight: 10 }}>
				<MaterialIcons name="more-horiz" color="#ffff" size={32} />
			</TouchableOpacity>
		),
		headerTintColor: '#ffff',
	};
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.textStyle}>
					<Text style={styles.titleText}>Name</Text>
					<TextInput style={styles.textInputStyle} underlineColorAndroid="transparent">
						Thanks For Watching
					</TextInput>
				</View>
				<View style={styles.dashedLine} />
				<View style={styles.textStyle}>
					<Text style={styles.titleText}>Date</Text>
					<Picker style={styles.contentText}>
						<Picker.Item label="Wed, August 23, 2017" value="java" />
						<Picker.Item label="JavaScript" value="js" />
					</Picker>
				</View>
				<View style={styles.dashedLine} />
				<View style={styles.textStyle}>
					<Text style={styles.titleText}>Time</Text>
					<Text style={styles.contentText}>18:00</Text>
				</View>
				<View style={styles.dashedLine} />
				<View style={styles.textStyle}>
					<Text style={styles.titleText}>Priority</Text>
					<View style={styles.contentText}>
						<FlatList
							data={[
								{ key: 'red' },
								{ key: 'yellow' },
								{ key: 'green' },
								{ key: 'purple' },
								{ key: 'grey' },
							]}
							horizontal
							renderItem={({ item }) => (
								<TouchableOpacity
									style={styles.radioStyle}
									onPress={() => this.setState({ checked: !this.state.checked })}
								>
									{this.state.checked === true ? (
										<MaterialIcons name="radio-button-checked" size={20} color={item.key} />
									) : (
										<MaterialCommunityIcons name="circle" size={20} color={item.key} />
									)}
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
				<View style={styles.iconStyle}>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
						<MaterialIcons color="green" size={64} name="check-circle" />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
	iconStyle: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		alignSelf: 'flex-end',
	},
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
	contentText: {
		flex: 3,
	},
	radioStyle: {
		paddingLeft: 10,
	},
	dashedLine: {
		borderStyle: 'dashed',
		borderBottomWidth: 1,
		marginTop: 10,
	},
};

export default Setting;
