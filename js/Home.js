import React from 'react';
import { View, Text, TouchableOpacity, Picker, Dimensions, StatusBar, FlatList, SectionList } from 'react-native';
import { MaterialIcons, Entypo, EvilIcons, Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			doneCheck: false,
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} />
				<View style={styles.header}>
					<View style={styles.headerTitle}>
						<TouchableOpacity>
							<Entypo name="menu" size={32} />
						</TouchableOpacity>
						<Picker style={{ width: 180 }} pickerStyleType={{ justifyContent: 'center' }}>
							<Picker.Item label="AUGUST 2017" value="java" />
							<Picker.Item label="JavaScript" value="js" />
						</Picker>
						<TouchableOpacity>
							<EvilIcons name="search" size={32} />
						</TouchableOpacity>
					</View>
					<View style={styles.headerDate}>
						<FlatList
							data={[
								{ key: 'MON', day: 21 },
								{ key: 'TUE', day: 22 },
								{ key: 'WED', day: 23 },
								{ key: 'THUR', day: 24 },
								{ key: 'FRI', day: 25 },
							]}
							horizontal
							renderItem={({ item }) => (
								<TouchableOpacity>
									<View
										style={{
											width: width / 5,
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<Text>{item.key}</Text>
										<Text style={{ fontSize: 25 }}>{item.day}</Text>
										<Entypo name="dot-single" color="red" size={25} />
									</View>
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
				<View style={{ flex: 1 }}>
					<SectionList
						sections={[
							{ title: 'TO DO (2)', data: ['Helocon', 'Hicon'] },
							{ title: 'DONE (3)', data: ['Xong roi nhe', 'Tao xong roi', 'Xong roi con hoi'] },
						]}
						renderItem={({ item }) => (
							<View style={styles.item}>
								<View style={{ width: 7, height:65, backgroundColor: 'green', borderBottomLeftRadius:7, borderTopLeftRadius:7 }} />
								<View style={{flex:3, paddingLeft:10}}>
									<Text>19:00</Text>
									<Text style={{ fontWeight: 'bold' }}>{item}</Text>
								</View>
								<TouchableOpacity style={{paddingRight:10}} onPress={() => this.setState({ doneCheck: !this.state.doneCheck })}>
									{this.state.doneCheck === false ? (
										<MaterialIcons size={25} name="radio-button-unchecked" />
									) : (
										<MaterialIcons name="check-circle" color="green" size={25} />
									)}
								</TouchableOpacity>
							</View>
						)}
						renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
						keyExtractor={(item, index) => index}
					/>
				</View>
				<View style={styles.iconStyle}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')}>
						<MaterialIcons color="red" size={64} name="add-circle" />
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
	header: {
		height: height / 4.5,
		width: width,
		elevation: 3,
		backgroundColor: '#f7f7f7',
	},
	iconStyle: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		alignSelf: 'flex-end',
		zIndex: 9999,
	},
	headerTitle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
	headerDate: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 15,
	},
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
};

export default Home;
