const addTask = (color, time, content) => {
	return {
		type: 'addTask',
		color,
		time,
		content,
	};
};
const finishItem = (color, time, content, check, index) => {
	return {
		type: 'finishItem',
		index,
		check,
		color,
		time,
		content,
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
