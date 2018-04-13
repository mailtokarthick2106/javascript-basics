/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (p) => {
  var str = '';
  for (var i = 1; i <= p; i++) {
    for (var j = 0; j <= p-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= i; k++) {      
      str = str + '*' + ' ';
    }
    str = str  + ' \n';
  }
  console.log(str);
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
