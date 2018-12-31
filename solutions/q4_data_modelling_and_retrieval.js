// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

function Fruits(name, color, pricePerKg) {
    this.name = name;
    this.color = color;
    this.pricePerKg = pricePerKg;
}
let fruit1 = new Fruits('Apple', 'Red', '100');
let fruit2 = new Fruits('Orange', 'yellow', '80');
let fruit3 = new Fruits('mongo', 'yellow', '50');
let fruit4 = new Fruits('Pomgrate', 'Red', '150');
let fruit5 = new Fruits('Gova', 'greeen', '70');
let list = [fruit1, fruit2, fruit3, fruit4, fruit5];
let color = '';
const formatFruit = (flattenMe) => {
    if (typeof flattenMe === 'number') {
        return null;
    }
    if (list.length > 0) {
       
        for (let i = 0; i < list.length; i += 1) {
            if (flattenMe === list[i].name) {
                color = list[i].color;
            }
        }
    }
    return color;

};


module.exports = formatFruit;