$(document).ready(function () {
    const numbers = [];

    for (let i = 0; i < 30; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumber);
    }
    let isEven = (number) => number % 2 ? false : true;
    let evenNumbers = (numbers.filter(isEven));

    let sum = (total, num) => total + num;
    let product = (total, num) => total * num;

    let evenAdded = evenNumbers.reduce(sum);
    let productAll = numbers.reduce(product);

    console.log(evenAdded);
    console.log(productAll);
});