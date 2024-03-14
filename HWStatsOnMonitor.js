//id;firstName;lastName;age
const persons = [];
 const idInp = document.getElementById('id');
 const fName = document.getElementById('fName');
 const lName = document.getElementById('lName');
 const ageInp = document.getElementById('age');

 function addPerson() {
     const id = +(idInp.value);
     const firstName = fName.value.trim();
     const lastName = lName.value.trim();
     const age = +(ageInp.value);

     if(!isNaN(id) && firstName && lastName &&!isNaN(age)) {
         if(findPerson(persons,id === -1)) {
             const person = new Person(id,firstName,lastName,age);
             persons.push(person);
             printPersons(persons);
             printStats(persons)
         } else {
             alert(`Person with this id:${id} already in list`);
         }
     }

 }



function findPerson(persons, id) {
    return persons.findIndex(p => p.id === +id);
}

function printPersons(persons) {
    persons.forEach(p => console.log(p.toString()));
}

function printStats(persons) {
    if (persons.length) {
        const start = persons[0].age;
        const minAge = persons.reduce((min, p) => min <= p.age ? min : p.age, start);
        const maxAge = persons.reduce((max, p) => max <= p.age ? p.age : max, start);
        const sumAge = persons.reduce((sum,p)=> sum+p.age,0);
        const avgAge = sumAge/persons.length;

        document.getElementById('minAge').innerText = `Min Age: ${minAge}`;
        document.getElementById('maxAge').innerText = `Max Age: ${maxAge}`;
        document.getElementById('sumAge').innerText = `Sum Age: ${sumAge}`;
        document.getElementById('avgAge').innerText = `Avg Age: ${avgAge}`;
    }
}

function Person(id, firstName, lastName, age) {
    this.id = +id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    this.toString = function () {
        return `Id: ${this.id}, firstName: ${this.firstName}, lastName: ${this.lastName}, age: ${this.age}`
    }
}