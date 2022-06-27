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

    let pet = {
        name: "Odin",
        favFood: ["wortel", "koekje", "stroomkabel"],
        showName: function () {
            alert(this.name); // this.name verwijst naar "Odin" 
        },
        eatFoods: function (test = this.name) {
            // this.name verwijst niet meer naar "Odin"!
            this.favFood.forEach(function (food) {
                alert(test + " eet een " + food);
            });
        }
    };
    pet.eatFoods("Frits");
    // function totalSalary(obj) {
    //     let salaryCombined;
    //     for (let prop in obj) {
    //         if (typeof obj[prop] === "object") {
    //             totalSalary(obj[prop]);
    //         } else if (prop === "salary") {
    //             return salaryCombined += obj[prop];
    //         }
    //     }
    //     console.log(salaryCombined);
    // }
    // let employeeSalary = totalSalary(employees);
    // console.log(employeeSalary)
});