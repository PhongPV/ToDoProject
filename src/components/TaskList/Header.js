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
var day = 1;
var dateValue = currentDate.getDate();
function getDaysInMonth(month, year, day) {
	var date = new Date(year, month, day);
	var days = [];
	while (date.getMonth() === month) {
		var dateName = date.getDate() + '';
		days.push({ key: dateName, day: weekday[date.getDay()], month: month + 1, year: year, color: '#f7f7f7' });
		date.setDate(date.getDate() + 1);
	}
	days[dateValue - 1].color = '#ce93d8';
	return days;
}
function splitString(text) {
	return text.split(' ');
}
class Header extends React.Component {
	state = {
		color: '#f7f7f7',
		data: '',
		newData: getDaysInMonth(month, year, day),
		pickItem: 'January 2018',
	};
	pickItem = item => {
		this.setState({ pickItem: item });
		var name = splitString(this.state.pickItem);
	};
	getDateValue(item, index) {
		var newData1 = getDaysInMonth(month, year, day);
		for (var i = 0; i < newData1.length; i++) {
			newData1[i].color = this.state.color;
		}
		newData1[index].color = '#ce93d8';
		this.setState({ newData: newData1 });
		var data = item.key + '/' + item.month + '/' + item.year;
		this.props.onChange({ data });
	}
	renderItem = ({ item, index }) => {
		return (
			<TouchableOpacity onPress={() => this.getDateValue(item, index)}>
				<View style={[styles.item, { backgroundColor: item.color }]}>
					<Text>{item.key}</Text>
					<Text style={{ fontSize: 20 }}>{item.day}</Text>
					<Entypo name="dot-single" color="red" size={25} />
				</View>
			</TouchableOpacity>
		);
	};
	getItemLayout = (data, index) => ({ length: 50, offset: 50 * index, index });
	render() {
		return (
			<View style={styles.header}>
				<View style={styles.headerTitle}>
					<TouchableOpacity>
						<Entypo name="menu" size={32} />
					</TouchableOpacity>
					<Picker style={{ width: 200 }} selectedValue={this.state.pickItem} onValueChange={this.pickItem}>
						<Picker.Item label="JANUARY 2018" value="JANUARY 2018" />
					</Picker>
					<TouchableOpacity>
						<EvilIcons name="search" size={32} />
					</TouchableOpacity>
				</View>
				<View style={styles.headerDate}>
					<FlatList
						data={this.state.newData}
						initialScrollIndex={dateValue}
						getItemLayout={this.getItemLayout}
						horizontal
						renderItem={this.renderItem}
					/>
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
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
};
export default Header;
