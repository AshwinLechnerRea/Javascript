$(document).ready(function () {
    function User(username) {
        this.username = username;
    }

    function Admin(username, auth) {
        User.call(this, username);
        this.auth = auth;
    }

    function Customer(username, firstName, lastName, location) {
        User.call(this, username);
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
    }
    User.prototype.login = function () {
        $(".message").append(`User ${this.username} has logged in!</br>`)
    }
    User.prototype.logout = function () {
        $(".message").append(`User ${this.username} has logged out!</br>`)
    }
    Admin.prototype = Object.create(User.prototype);
    Customer.prototype = Object.create(User.prototype);
    let admin1 = new Admin("Donkeh", true);
    let customer1 = new Customer("MellowRush", "Ashwin", "Lechner", "Heerlen");
    console.log(admin1);
    console.log(customer1);
    console.log(admin1 instanceof Admin);
    console.log(admin1 instanceof User);
    console.log(customer1 instanceof Customer);
    console.log(customer1 instanceof User);
    customer1.login();
    customer1.logout();
    admin1.login();
    admin1.logout();
});