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
        extrInfo: {
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
        functies: [

        ]
    }
    console.log(audi);

});