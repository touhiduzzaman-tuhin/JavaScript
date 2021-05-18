const numbers = [5, 6, 7, 8, 9, 10, 11];

const result = numbers.findIndex(function (currentValue, currentIndex, arr){
    return currentValue > 5;
}) 
console.log(numbers);
console.log(result);