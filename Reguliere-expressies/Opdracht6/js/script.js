$(document).ready(function () {
    const phonePattern = /^(06|06[\s]|06-|\+31[\s]6[\s])[0-9]{8}$/;
    const birthdayPattern = /^([\d]{1,2})(-|[\s])([a-z]|[0-9]{2,})/;
    const streetPattern = /^([a-z]*)([\s]+)([0-9]{1,3})(((-|[\s])?)([a-z]?))$/i;
    const urlPattern = /^(http)s?:\/\//i;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

    $("#submit-number").click(function (e) {
        e.preventDefault();
        let phoneNumber = $("#phone-number").val();
        let birthday = $("#birthday").val();
        let street = $("#street").val();
        let url = $("#url").val();
        let password = $("#password").val();
        try {
            if (phonePattern.test(phoneNumber) == false) {
                $(".phone-error").show();
                throw "Invalid phone number!";
            }
        } catch (err) {
            console.warn(err);
        }
        try {
            if (birthdayPattern.test(birthday) == false) {
                $(".birthday-error").show();
                throw "Invalid birthday!";
            }
        } catch (err) {
            console.warn(err);
        }
        try {
            if (streetPattern.test(street) == false) {
                $(".street-error").show();
                throw "Invalid street!";
            }
        } catch (err) {
            console.warn(err);
        }
        try {
            if (urlPattern.test(url) == false) {
                $(".url-error").show();
                throw "Invalid street!";
            }
        } catch (err) {
            console.warn(err);
        }
        try {
            if (passwordPattern.test(password) == false) {
                $(".password-error").show();
                throw "Invalid password!";
            }
        } catch (err) {
            console.warn(err);
        }
    })
});