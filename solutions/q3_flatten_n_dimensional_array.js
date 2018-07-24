/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
  if(arr instanceof Array) {
   return arr.reduce((acc, value)=> {
     return acc.concat(value instanceof Array ? flatten(value) : value);
   }, []);
 }
   return null;
};


// AnotherSolution
// if(!r){ r = null}
// if(a instanceof Array) {
//   for(var i=0; i<a.length; i++){
//     if(r === null){ r = []}
//     if(a[i].constructor == Array){
//       flatten(a[i],r);
//     }else{
//       r.push(a[i]);
//     }
//   }
// }
// return r;
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/
module.exports = flatten;
