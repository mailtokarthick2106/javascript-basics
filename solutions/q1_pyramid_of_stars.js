/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (h) => {
const arrayOfKeys = [... Array(h).keys()];

function constructRow(key, height) {
  let str = '';
  for(let i = 0; i < height - key; i += 1) {
    str += ' ';
  }
  for(let k = str.length; k <= height; k += 1) {
    str += '* ';
  }
  return str;
}

const arrayOfRows = arrayOfKeys.map(key=>{
 return constructRow(key, h);
});

 const pyramid = arrayOfRows.join(' \n');

 // To make test case pass we are adding the \n at the end
 if (pyramid === '') {
   return pyramid;
 }
  return pyramid + ' \n';
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
