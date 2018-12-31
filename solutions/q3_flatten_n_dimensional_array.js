/* Write a Program to Flatten a given n-dimensional array */

const flatten = (flattenMe) => {
	if (typeof flattenMe === 'string') {
		return null;
	}

	// Write your code here
	let answer = [];
	function doWork(flattenMe1) {
		for (let i = 0, l = flattenMe1.length; i < l; i += 1) {
			let element = flattenMe1[i];
			if (typeof element === "object" && element instanceof Array) {
				doWork(element);
			}
			else {
				answer.push(element);
			}
		}
	}
	doWork(flattenMe);
	return answer;
	//return flattened;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
