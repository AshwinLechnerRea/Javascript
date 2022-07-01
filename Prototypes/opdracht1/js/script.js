$(document).ready(function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;

        Object.defineProperty(this, "name", {
            enumerable: true,
            writable: false,
        })
        Object.defineProperty(this, "price", {
            enumerable: true,
            writable: true,
        })
    }
    let cc = new Product("Chromecast", 39.99);
    let atv = new Product("Apple TV", 159.99);
    console.log(cc);
    console.log(atv);
    cc.name = "Google";
    cc.price = 40.99;
    atv.name = "Apple";
    atv.price = 100.50;
    console.log(cc);
    console.log(atv);

});