$(document).ready(function () {
    let employees = {
        design: [{
            name: 'Ruud',
            salary: 1200
        }, {
            name: 'Nancy',
            salary: 2100
        }],
        development: {
            frontend: {
                angular: [{
                    name: 'Mika',
                    salary: 1900
                }, {
                    name: 'Jeffrey',
                    salary: 1900
                }],
                react: [{
                    name: 'Julio',
                    salary: 2400
                }]
            },
            backend: [{
                name: 'Aron',
                salary: 2600
            }]
        },
        seo: [{
            name: 'Alex',
            salary: 1800
        }]
    };

    let salaryCombined = 0;

    let minusOne = function (num) {
        if (num > 0) {
            console.log(num);
            minusOne(--num);
        } else {
            console.log(num);
        }
    }

    function totalSalary(obj) {
        for (let prop in obj) {
            if (prop === "salary") {
                return salaryCombined += obj[prop];
            } else if (typeof obj[prop] === "object") {
                totalSalary(obj[prop]);
            }
        }
        return salaryCombined;
    }

    minusOne(10);
    console.log(totalSalary(employees));
});