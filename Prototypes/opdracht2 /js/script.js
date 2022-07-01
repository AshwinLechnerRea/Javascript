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
    Product.prototype.inStock = true;
    atv.inStock = false;
    Product.prototype.addToCard = function () {
        if (this.inStock === true) {
            alert(`U heeft de ${this.name} toegevoegd aan uw winkelwagen!`)
        } else {
            alert(`Helaas, de ${this.name} is momenteel niet op voorraad.`)
        }
    }
    console.log(cc);
    console.log(atv);
    console.log(cc.inStock);
    console.log(atv.inStock);
    cc.addToCard();
    atv.addToCard();
});