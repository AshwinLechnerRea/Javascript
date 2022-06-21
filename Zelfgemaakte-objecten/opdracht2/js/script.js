$(document).ready(function () {
    const audi = {
        naam: "Audi A5 2.0",
        bouwjaar: 2009,
        kmStand: 165000,
        energielabel: "A",
        brandstof: "benzine",
        prijs: "€12.750,00",
        garantie: "nee",
        opties: [
            "Cruise Control",
            "Boordcomputer",
            "Navigatiesysteem",
            "Airconditioning",
            "ABS",
        ],
        extraInfo: {
            verbruik: "15, 62 km / l",
            motorinhoud: "1.984 cc",
            topsnelheid: "250 km / h",
            vermogen: "211 pk",
        },
        motorStarten: function () {
            alert("Motor start...");
        },
        accelereren: function () {
            alert("Vroem vroem...");
        },
        remmen: function () {
            alert("Auto remt af...");
        },

    }

    function readObject(obj) {
        let output = "";
        for (let property in obj) {
            output += "<tr>";
            if (
                typeof obj[property] === 'object' &&
                //Hulp gehad van ome Google voor het voorkomen dat de array hier in wordt
                !Array.isArray(obj[property]) &&
                obj[property] !== null
            ) {
                readObject(obj[property]);
            } else if (typeof obj[property] === 'function') {
                continue
            } else {
                output += "<td>" + property + ": </td>";
                output += "<td>" + obj[property] + "</td>";
            }
            output += "</tr>";
        }
        $("table").append(output);
    }
    readObject(audi)
});