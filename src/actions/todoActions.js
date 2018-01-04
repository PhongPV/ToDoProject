const addTask = content => {
	return {
		type: 'addTask',
		content,
	};
};
const finishItem = content => {
	return {
		type: 'finishItem',
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
