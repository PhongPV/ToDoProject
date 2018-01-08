const chooseColor = (index, choose) => {
	return {
		type: 'chooseColor',
		index,
		choose,
	};
};

export { chooseColor };
