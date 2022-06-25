$(document).ready(function () {
    let persons = [{
            name: "Tom",
            age: 33,
            loc: "Weert"
        }, {
            name: "Ashwin",
            age: 30,
            loc: "Heerlen"
        },
        {
            name: "Dominique",
            age: 35,
            loc: "Nuth"
        },
        {
            name: "Kayleigh",
            age: 30,
            loc: "Gulpen"
        },
        {
            name: "Yannick",
            age: 31,
            loc: "Maastricht"
        },
    ]
    let formatPerson = function (person) {
        let name = person.name.substring(0, 1) + ".";
        let age = ++person.age;
        let loc = person.loc.toUpperCase();
        return {
            name,
            age,
            loc
        };
    };

    let formattedPersons = persons.map(formatPerson);
    console.log(formattedPersons);

    function displayPersons(data) {
        let html = "";
        data.forEach(person => {
            html += "<section>";
            for (let value in person) {
                if (value === "name") {
                    html += `<h1>${person[value]}</h1>`;
                } else {
                    html += `<p>${person[value]}</p>`;
                }
            }
            html += "</section>";
        });
        return html;
    }
    $("body").append(displayPersons(formattedPersons));
});