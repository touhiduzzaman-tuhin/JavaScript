let person = {
    name: 'Touhiduzzaman',
    age: 26,
    country: 'Bangladesh'
}

console.log(person);
console.log(typeof(person));
console.log(person.name);

// Dot Notation
person.age = 27;
console.log(person);
console.log(person.country);

//Braket Notation
person['name'] = 'Tuhin';
console.log(person);
console.log(person['age']);