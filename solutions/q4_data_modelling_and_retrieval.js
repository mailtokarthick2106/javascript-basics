// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

function getFruit(fruit) {
  let temp;
  for(var item of fruitList){
    if(item.name === fruit) {
      console.log("Fruit color :" +item.color);
      console.log("Fruit pricePerKg :" +item.pricePerKg);
    }
  }
}


const fruitList = [
 {"name" : "apple", "color" : "red", "pricePerKg" : "50"},
  {"name" : "orange", "color" : "Yellow", "pricePerKg" : "40"}
]

getFruit('orange');
