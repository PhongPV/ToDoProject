import _ from 'lodash';

const initState = {
	data: [
		{
			title: 'TO DO',
			data: [
				{ color: 'red', time: '11:00', content: 'Chua xong dau', check: false },
				{ color: 'red', time: '11:00', content: 'Sap xong roi', check: false },
			],
			total: 2,
		},
		{
			title: 'DONE',
			data: [
				{ color: 'red', time: '11:00', content: 'Xong roi', check: true },
				{ color: 'red', time: '11:00', content: 'Done roi', check: true },
				{ color: 'red', time: '11:00', content: 'Ok roi', check: true },
			],
			total: 3,
		},
	],
};

export default function todoReducer(state = initState, action) {
	switch (action.type) {
		case 'addTask':
			const newState = _.cloneDeep(state);
			newState.data[0].data.push({
				color: action.color,
				time: action.time,
				content: action.content,
				check: false,
			});
			newState.data[0].total += 1;
			return newState;
		case 'deleteTask':
			const newData = _.cloneDeep(state);
			if (action.check === false) {
				newData.data[0].data.splice(action.index, 1);
			} else {
				newData.data[1].data.splice(action.index, 1);
			}
			return newData;
		case 'finishItem':
			if (action.check === false) {
				const newState = _.cloneDeep(state);
				newState.data[0].data.splice(action.index, 1);
				newState.data[1].data.push({
					color: action.color,
					time: action.time,
					content: action.content,
					check: true,
				});
				return newState;
			} else {
				return state;
			}
		default:
			return state;
	}
}
