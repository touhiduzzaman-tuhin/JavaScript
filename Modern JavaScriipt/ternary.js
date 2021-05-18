var value = -4;

var result = (value > 0) ? 'Positve' : 'Negative';
console.log(result);

var age = 6;
var type = (age >= 18)
                      ? 'Adult' 
                      : (age <= 10)
                                    ? 'Child'
                                    : 'Young'
console.log(type);

var isLoggedIn = true;
var access = isLoggedIn && 'Good';
console.log(access)