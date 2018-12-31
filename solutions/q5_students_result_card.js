// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

let list = [
    { name: 'Karthick', subjects: [{ Grammer: 50, Accounts: 90 }] },
    { name: 'Rajendran', subjects: [{ Grammer: 50, Accounts: 90 }] },
    { name: 'Nikitha', subjects: [{ Grammer: 50, Physics: 70 }] },
    { name: 'Vaishu', subjects: [{ Grammer: 50, Physics: 70 }] }
];
let resultArray=[];
const resultcard = () => {

    if (list.length > 0) {
        for (let i = 0; i < list.length; i += 1) {
            let subjects = list[i].subjects;
            console.log(list[i].name);
            let total = 0;
            for (let j = 0; j < subjects.length; j += 1) {
                if (subjects[j].Accounts !== null) {
                    total = total + subjects[j].Accounts;
                }
                else if (subjects[j].Grammer !== null) {
                    total = total + subjects[j].Grammer;
                }
                else if (subjects[j].Physics !== null) {
                    total = total + subjects[j].Physics;
                }
            }
            let percentage=(total/200)*100;
            resultArray=[{name:list[i].subjects,percentage:percentage}];

        }

    }
    return resultArray;
};


module.exports = resultcard;
