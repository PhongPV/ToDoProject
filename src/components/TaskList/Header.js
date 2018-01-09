import React from 'react';
import { View, Text, TouchableOpacity, Picker, FlatList, Dimensions } from 'react-native';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
// import ReactNativeComponentTree from 'react-native/Libraries/Renderer/shims/ReactNativeComponentTree';
// ReactNativeComponentTree.getInstanceFromNode(e.target);
const { width, height } = Dimensions.get('window');
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
		days.push({ key: dateName, day: weekday[date.getDay()], month: month + 1, year: year });
		date.setDate(date.getDate() + 1);
	}
	return days;
}
class Header extends React.Component {
	state = {
		color: '',
		data: '',
	};
	getDateValue(item) {
		var data = item.key + '/' + item.month + '/' + item.year;
		this.props.onChange({ data });
	}
	renderItem = ({ item, index }) => {
		return (
			<TouchableOpacity onPress={() => this.getDateValue(item)}>
				<View style={styles.item}>
					<Text>{item.key}</Text>
					<Text style={{ fontSize: 20 }}>{item.day}</Text>
					<Entypo name="dot-single" color="red" size={25} />
				</View>
			</TouchableOpacity>
		);
	};
	render() {
		return (
			<View style={styles.header}>
				<View style={styles.headerTitle}>
					<TouchableOpacity>
						<Entypo name="menu" size={32} />
					</TouchableOpacity>
					<Picker style={{ width: 180 }}>
						<Picker.Item label="JANUARY 2018" value="1" />
						<Picker.Item label="FEBRUARY 2018" value="2" />
						<Picker.Item label="MARCH 2018" value="3" />
						<Picker.Item label="APRIL 2018" value="4" />
						<Picker.Item label="MAY 2018" value="5" />
						<Picker.Item label="JUNE 2018" value="6" />
						<Picker.Item label="JULY 2018" value="7" />
						<Picker.Item label="AUGUST 2018" value="8" />
						<Picker.Item label="SEPTEMBER 2018" value="9" />
						<Picker.Item label="OCTOBER 2018" value="10" />
						<Picker.Item label="NOVEMBER 2018" value="11" />
						<Picker.Item label="DECEMBER 2018" value="12" />
					</Picker>
					<TouchableOpacity>
						<EvilIcons name="search" size={32} />
					</TouchableOpacity>
				</View>
				<View style={styles.headerDate}>
					<FlatList data={getDaysInMonth(month, year, day)} horizontal renderItem={this.renderItem} />
				</View>
			</View>
		);
	}
}
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
export default Header;
