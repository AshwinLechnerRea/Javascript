$(document).ready(function () {
    let squared = function (a, b, c) {
        try {
            if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
                a = a ** 2;
                b = b ** 2;
                c = c ** 2;
                return a + b + c;
            } else {
                throw "Only numbers allowed!"
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log(squared(1, 2, 3));
    console.log(squared(3, 4, 5));
});