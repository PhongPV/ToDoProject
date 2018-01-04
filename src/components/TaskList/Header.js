import React from 'react';
import { View, Text, TouchableOpacity, Picker, FlatList, Dimensions } from 'react-native';
import { Entypo, EvilIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
const Header = props => {
	const styles = {
		header: {
			height: height / 4.5,
			width: width,
			elevation: 3,
			backgroundColor: '#f7f7f7',
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
			width: width / 5,
			alignItems: 'center',
			justifyContent: 'center',
		},
	};
	return (
		<View style={styles.header}>
			<View style={styles.headerTitle}>
				<TouchableOpacity>
					<Entypo name="menu" size={32} />
				</TouchableOpacity>
				<Picker style={{ width: 180 }}>
					<Picker.Item label="AUGUST 2018" value="java" />
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
							<View style={styles.item}>
								<Text>{item.key}</Text>
								<Text style={{ fontSize: 25 }}>{item.day}</Text>
								<Entypo name="dot-single" color="red" size={25} />
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
};
export default Header;
