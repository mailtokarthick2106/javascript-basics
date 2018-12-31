/* Write a Program to convert an array of objects to an object
	based on a given key */

	let result = {};
const convert = (arr, role) => {
	if (role === null) {
		return null;
	}
	if (typeof arr === 'string') {
		return null;
	}
	// Write your code here
	
	for (let i = 0, len = arr.length; i < len; i += 1) {

		result[arr[i].role] = arr[i];

	}
	return result;

};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
