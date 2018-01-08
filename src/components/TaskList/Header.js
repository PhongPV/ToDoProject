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
	var weekday = new Array(7);
	weekday[0] = 'SUN';
	weekday[1] = 'MON';
	weekday[2] = 'TUE';
	weekday[3] = 'WED';
	weekday[4] = 'THU';
	weekday[5] = 'FRI';
	weekday[6] = 'SAT';
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var month = currentDate.getMonth();
	var day = currentDate.getDate();
	function getDaysInMonth(month, year, day) {
		var date = new Date(year, month, day);
		var days = [];
		while (date.getMonth() === month) {
			var dateName = date.getDate() + '';
			//var dayName = weekday.get(date.getDay());
			days.push({ key: dateName, day: weekday[date.getDay()] });
			date.setDate(date.getDate() + 1);
		}
		return days;
	}
	console.log('date---', getDaysInMonth(month, year, day));
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
					data={getDaysInMonth(month, year, day)}
					horizontal
					renderItem={({ item }) => (
						<TouchableOpacity>
							<View style={styles.item}>
								<Text>{item.key}</Text>
								<Text style={{ fontSize: 20 }}>{item.day}</Text>
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
