const initState = {
	data: [
		{
			title: 'TO DO ()',
			data: [{ content: 'Chua xong dau', check: false }, { content: 'Sap xong roi', check: false }],
		},
		{
			title: 'DONE ()',
			data: [
				{ content: 'Xong roi', check: true },
				{ content: 'Done roi', check: true },
				{ content: 'Ok roi', check: true },
			],
		},
	],
};

export default function todoReducer(state = initState, action) {
	switch (action.type) {
		case 'addTask':
			return Object.assign(
				{},
				{
					...state.data.get(0),
					data: [...state.data.get(0), { content: action.content, check: false }],
				}
			);
		case 'deleteTask':
			return Object.assign(
				{},
				{
					...state,
					data: state.data.get(0).filter((item, i) => i != action.index),
					data: state.data.get(1).filter((item, i) => i != action.index),
				}
			);
		case 'finishItem':
			state.data[1].data.push({ content: action.content, check: true });
			let newData = state.data;
			return Object.assign(
				{},
				{
					...state.data,
					data: newData,
				}
			);
		default:
			return state;
	}
}
