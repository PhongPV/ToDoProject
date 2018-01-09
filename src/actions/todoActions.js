const addTask = (color, time, content, date) => {
	return {
		type: 'addTask',
		color,
		time,
		content,
		date,
	};
};
const finishItem = (color, time, content, date, check, index) => {
	return {
		type: 'finishItem',
		index,
		check,
		color,
		time,
		content,
		date,
	};
};
const deleteTask = (index, check) => {
	return {
		type: 'deleteTask',
		index,
		check,
	};
};

export { addTask, finishItem, deleteTask };
