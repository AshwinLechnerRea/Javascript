$(document).ready(function () {
    let squared = function (a, b, c) {
        try {
            if (isNaN(a) || isNaN(b) || isNaN(c)) {
                throw "Only numbers allowed!"
            } else {
                a = a ** 2;
                b = b ** 2;
                c = c ** 2;
                return a + b + c;
            }
        } catch (error) {
            console.log(error);
        }
    }
    let squaredTwo = function () {
        let sum = 0;
        try {
            for (let i = 0; i < arguments.length; i++) {
                if (isNaN(arguments[i])) {
                    throw "Only numbers allowed!"
                } else {
                    arguments[i] = arguments[i] ** 2;
                    sum += arguments[i];
                }
            }
        } catch (error) {
            console.log(error);
        }
        return sum;
    }
    console.log(squared(1, 2, 3));
    console.log(squared(4, 5, 6));
    console.log(squaredTwo(1, 2, 3));
});