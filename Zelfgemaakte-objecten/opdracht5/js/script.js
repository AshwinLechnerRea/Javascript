$(document).ready(function () {
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let fuelPattern = /^(benzine|diesel)$/i
    let labelPattern = /^[a-g]$/i
    let audi = {
        _naam: "Audi A5 2.0",
        _bouwjaar: 2008,
        _kmStand: 165000,
        _energielabel: "A",
        _brandstof: "benzine",
        _prijs: 12750.00,
        _garantie: "nee",
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
        set naam(naam) {
            try {
                if (typeof naam === "string") {
                    this._naam = naam;
                } else {
                    throw "naam must be a string!"
                }
            } catch (error) {
                console.log(error);
            }
        },
        set bouwjaar(bouwjaar) {
            try {
                if (bouwjaar > 2007 && bouwjaar < currentYear) {
                    this._bouwjaar = bouwjaar;
                } else {
                    throw "bouwjaar must be between 2007 and now!"
                }
            } catch (error) {
                console.error(error);
            }
        },
        set kmStand(kmStand) {
            try {
                if (Number.isInteger(kmStand)) {
                    this._kmStand = kmStand;
                } else {
                    throw "kmStand must by an int!"
                }
            } catch (error) {
                console.log(error);
            }
        },
        set energielabel(energielabel) {
            try {
                if (labelPattern.test(energielabel)) {
                    this._energielabel = energielabel;
                } else {
                    throw "Invalid energielabel";
                }
            } catch (error) {
                console.log(error);
            }
        },
        set brandstof(brandstof) {
            try {
                if (fuelPattern.test(brandstof)) {
                    this._brandstof = brandstof;
                } else {
                    throw "Invalid brandstof type!"
                }
            } catch (error) {
                this._brandstof = error;
            }
        },
        set prijs(prijs) {
            try {
                if (typeof prijs === 'number') {
                    this._prijs = prijs;
                } else {
                    throw "prijs must be a number!";
                }
            } catch (error) {
                console.log(error);
            }
        },
        set garantie(garantie) {
            try {
                if (typeof garantie === "boolean") {
                    this._garantie = garantie;
                } else {
                    throw "garantie must be a boolean!"
                }
            } catch (error) {
                console.log(error);
            }
        },
        get naam() {
            return this._naam;
        },
        get bouwjaar() {
            return "Bouwjaar: " + this._bouwjaar;
        },
        get kmStand() {
            return "Km stand: " + this._kmStand;
        },
        get energielabel() {
            return "Energielabel: " + this._energielabel.toLocaleUpperCase();
        },
        get brandstof() {
            return "Brandstof: " + this._brandstof.toLowerCase();
        },
        get prijs() {
            return "Prijs: €" + this._prijs;
        },
        get garantie() {
            return "Garantie: " + this._garantie;
        }
    }

    let head = `<title>${audi.naam}</title>`
    let html = `    <article>
        <h3>${audi.naam}</h3>
        <div class="flex">
        <p>${audi.bouwjaar}</p>
        <p>${audi.brandstof}</p>
        </div>
        <div class="flex">
        <p>${audi.kmStand}</p>
        <p>${audi.prijs}</p>
         </div>
        <div class="flex">
        <p>${audi.energielabel}</p>
        <p>${audi.garantie}</p>
        </div>
    </article>`;
    $("head").append(head);
    $("body").append(html);
    console.log(audi);
});