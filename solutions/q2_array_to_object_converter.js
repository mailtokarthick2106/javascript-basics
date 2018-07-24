/* Write a Program to convert an array of objects to an object
	based on a given key */

const convert = (objectList, property) => {
let output = {};
let x = Array.isArray(objectList);
if(x === true) {
  for(let i = 0; i < objectList.length; i += 1) {
  if(typeof objectList[i][property] === 'undefined') {
    output = null;
  } else {
    output[objectList[i][property]] = Object.assign({}, objectList[i]);
  }
}
} else {
  output = null;
}
return output;
// AnotherSolution using forEach
  // var objMap = {};
  // objectList.forEach(function(obj) {
  //   if(typeof obj[property] === 'undefined') {
  //     objMap = null;
  //   } else {
  //     objMap[obj[property]] = obj;
  //   }
  // });
  // return objMap;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
