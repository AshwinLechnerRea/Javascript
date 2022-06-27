$(document).ready(function () {
    const numbers = [];

    for (let i = 0; i < 30; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumber);
    }
    let isEven = (number) => number % 2 ? false : true;
    let evenNumbers = (numbers.filter(isEven));

    function isDivisibleBy(num1) {
        return function (num2) {
            if (num2 % num1 === 0) {
                return num2;
            }
        }
    }

    let sum = (total, num) => total + num;
    let product = (total, num) => total * num;


    let evenAdded = evenNumbers.reduce(sum);
    let productAll = numbers.reduce(product);
    let dividebleByThree = numbers.filter(isDivisibleBy(3));
    let dividebleByFour = numbers.filter(isDivisibleBy(4));
    let dividebleByFive = numbers.filter(isDivisibleBy(5));
    let dividedByThree = dividebleByThree.map((x) => x / 3)
    let dividedByFour = dividebleByFour.map(function (x) {
        return x / 4;
    })
    let dividedByFive = dividebleByFive.map(function (x) {
        return x / 5;
    })
    //Gevonden op Google, snap alleen ht "-Infinity" gedeelte neit echt
    let maxThree = dividedByThree.reduce(function (a, b) {
        return Math.max(a, b);
    }, -Infinity);
    let maxFour = dividedByFour.reduce(function (a, b) {
        return Math.max(a, b);
    }, -Infinity);
    let maxFive = dividedByFive.reduce(function (a, b) {
        return Math.max(a, b);
    }, -Infinity);

    console.log(evenAdded);
    console.log(productAll);
    console.log(numbers);
    console.log(dividebleByThree);
    console.log(dividebleByFour);
    console.log(dividebleByFive);
    console.log(dividedByThree);
    console.log(dividedByFour);
    console.log(dividedByFive);
    console.log(maxThree);
    console.log(maxFour);
    console.log(maxFive);
});