// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics


// Write your code here

  class Student {
      constructor(name, subjects) {
          this.name = name;
          this.subjects = subjects;
      }
      getTotalScore() {
        return this.subjects.reduce((accumulator,item) => {
            return accumulator = accumulator + item.score;
        }, 0);
      }
      getTotalMaxScore() {
        return this.subjects.reduce((accumulator,item) => {
            return accumulator = accumulator + item.maxScore;
        }, 0);
      }
      getPercentage() {
        return (this.getTotalScore()/this.getTotalMaxScore())*100;
      }
  }

  const accountsStudents = [];
  for(let i=1;i<=50;i=i+1) {
      accountsStudents.push(new Student(`Student${i}`, [
          {name: 'grammer', score: Math.floor(Math.random()*100), maxScore: 100},
          {name: 'accounts', score: Math.floor(Math.random()*100), maxScore: 150},
      ]))
  }

  const physicsStudents = [];
  for(let i=1;i<=50;i=i+1) {
      accountsStudents.push(new Student(`Student${i}`, [
          {name: 'grammer', score: Math.floor(Math.random()*100), maxScore: 100},
          {name: 'physics', score: Math.floor(Math.random()*100), maxScore: 150},
      ]))
  }

  const accountRecord = accountsStudents.map(s=> Object.assign({}, {name : s.name}, {percentage : s.getPercentage()}))
  console.log(accountRecord);
