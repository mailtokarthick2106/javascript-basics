/* Write a program to build a `Pyramid of stars` of given height */
let oddrow = '';
const buildPyramid = (height) => {
  if (typeof height === 'string') {
    return '';
  }
  if (height % 2 === 0) {
    let evenrow = '';
    for (let i = 1; i <= height; i += 1) {
      for (let k = 1; k <= (height - i); k += 1) {
        evenrow = evenrow + ' ';
      }
      for (let j = 1; j <= i; j += 1) {
        evenrow = evenrow + ' *';
        //if (j === i) {

        // }
      }
      evenrow += '  \n';
    }
    return evenrow;
  }
  if (height % 2 !== 0) {
   
    for (let i = 1; i <= height; i += 1) {
      for (let k = 1; k <= (height - i); k += 1) {
        oddrow = oddrow + ' ';
      }
      for (let j = 1; j <= i; j += 1) {
        oddrow = oddrow + ' *';
        //if (j === i) {     
        //}
      }
      oddrow += '  \n';

    }
    //return oddrow;
  }
return oddrow; 
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
