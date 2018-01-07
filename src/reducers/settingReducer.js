const settingState = {
	data: [
		{ key: 'red', choose: false },
		{ key: 'yellow', choose: false },
		{ key: 'green', choose: false },
		{ key: 'purple', choose: true },
		{ key: 'grey', choose: false },
	],
};

export default function settingReducer(state = settingState, action) {
	switch (action.type) {
		case 'chooseColor':
			for (var i = 0; i < state.data.length; i++) {
				state.data[i].choose = false;
			}
			let newData = state.data.concat([]);
			newData[action.index].choose = true;
			return Object.assign(
				{},
				{
					...state,
					data: newData,
				}
			);
		default:
			return state;
	}
}
