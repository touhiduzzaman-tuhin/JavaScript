const numbers = [4, 5, 6, 7, 10, 11, 12, 13, 14, 15];

const result = numbers.find(function (currentValue, currentIndex, arr) {
    return currentValue > 4;
})
console.log(numbers);
console.log(result);