$(document).ready(function () {
    let audi = {
        _naam: "Audi A5 2.0",
        _bouwjaar: 2009,
        _kmStand: 165000,
        _energielabel: "A",
        _brandstof: "benzine",
        _prijs: "€12.750,00",
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
            this._naam = naam;
        },
        set bouwjaar(bouwjaar) {
            this._bouwjaar = bouwjaar;
        },
        set kmStand(kmStand) {
            this._kmStand = kmStand;
        },
        set energielabel(energielabel) {
            this._energielabel = energielabel;
        },
        set brandstof(brandstof) {
            this._brandstof = brandstof;
        },
        set prijs(prijs) {
            this._prijs = prijs;
        },
        set garantie(garantie) {
            this._garantie = garantie;
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
            return "Energielabel: " + this._energielabel;
        },
        get brandstof() {
            return "Brandstof: " + this._brandstof;
        },
        get prijs() {
            return "Prijs: " + this._prijs;
        },
        get garantie() {
            return "Garantie: " + this._garantie;
        }
    }
    console.log(audi);
    audi.prijs = "€ 11.500,00";
    console.log(audi.prijs);
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
});