$(document).ready(function () {
    // Opdracht 1.5 niet gelukt. Graag meer uitleg over wat ik precies moet doen.
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
        actions: [function motorStarten() {
                alert("Motor start...");
            },
            function accelereren() {
                alert("Vroem vroem...");
            },
            function remmen() {
                alert("Auto remt af...");
            }
        ],
    }
    console.log(audi);

});