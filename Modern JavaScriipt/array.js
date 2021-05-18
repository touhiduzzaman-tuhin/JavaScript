// function number(n){
//     return n;
// }
// console.log(number(55));

// Array functions
let number = (a, b) => a + b;
console.log(number(5, 6));

// var javaScript = {
//     name: 'JavaScript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printFunctions: function() {
//         console.log(this)
//         let self = this;
//         this.libraries.forEach( function(a) {
//             // console.log(this)
//             console.log(`${this.name} Loves ${a}`)
//             console.log(`${self.name} Loves ${a}`)
//         })
//     }
// }

// javaScript.printFunctions();

var javaScript = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printFunctions: function() {
        this.libraries.forEach((a) => console.log(`${this.name} Loves ${a}`));
    }
}

javaScript.printFunctions();