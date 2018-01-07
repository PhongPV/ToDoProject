const addTask = content => {
	return {
		type: 'addTask',
		content,
	};
};
const finishItem = (content, check, index) => {
	return {
		type: 'finishItem',
		index,
		check,
		content,
	};
};
const deleteTask = index => {
	return {
		type: 'deleteTask',
		index,
	};
};

export { addTask, finishItem, deleteTask };
