module.exports = opts => {
	opts = opts || {};
	const date = opts.date || new Date();
	const separator = opts.separator != undefined ? opts.separator : "-";
	return date.getFullYear() + separator + ('0' + (date.getMonth() + 1)).slice(-2) + separator + ('0' + (date.getDate())).slice(-2);
}