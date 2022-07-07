$(document).ready(function () {
    let users = []

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
    const customerForm = `
        <div class="customer">
            <label for="firstName">Voornaam:</label><br>
            <input type="text" name="firstName" id="firstName"><br>
            <label for="lastName">Achnernaam:</label><br>
            <input type="text" name="lastName" id="lastName"><br>
            <label for="location">Locatie:</label><br>
            <input type="text" name="location" id="location">
        </div>`;
    const adminForm = `       
         <div class="admin">
            <label for="auth">Authenticatieniveau:</label><br>
            <input type="text" name="auth" id="auth">
        </div>`
    $("#user").change(function () {
        if ($(this).val() === "customer") {
            $(".admin").remove();
            $(".form-default").append(customerForm);
        }
        if ($(this).val() === "admin") {
            $(".customer").remove();
            $(".form-default").append(adminForm);
        }
    })
    $("form").submit(function (e) {
        e.preventDefault();

        let username = $("#username").val();
        if (users.find(user => user.username === username)) {
            $(".error").show();
        } else if ($("#user").val() === "customer") {
            $(".error").hide();
            let name = $("#firstName").val();
            let surname = $("#lastName").val();
            let location = $("#location").val();
            let newCustomer = new Customer(username, name, surname, location);
            users.push(newCustomer);
            makeTableCustomers(newCustomer);
        } else if ($("#user").val() === "admin") {
            $(".error").hide();
            let auth = $("#auth").val();
            let newAdmin = new Admin(username, auth);
            users.push(newAdmin);
            makeTableAdmins(newAdmin);
        }
        $("form")[0].reset();
    })
    $(".form-default").append(customerForm);

    function makeTableAdmins(user) {
        let html = `
        <tr>
            <td>${user.username}</td>
            <td>${user.auth}</td>
        </tr>`
        $("#admins").append(html);
    }

    function makeTableCustomers(user) {
        let html = `
        <tr>
            <td>${user.username}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.location}</td>
        </tr>`
        $("#customers").append(html);
    }
});