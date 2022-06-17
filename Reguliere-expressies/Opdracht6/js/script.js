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
                throw "Invalid phone number!";
            }
        } catch (err) {
            $(".phone-error").show();
            console.warn(err);
        }
        try {
            if (birthdayPattern.test(birthday) == false) {
                throw "Invalid birthday!";
            }
        } catch (err) {
            $(".birthday-error").show();
            console.warn(err);
        }
        try {
            if (streetPattern.test(street) == false) {
                throw "Invalid street!";
            }
        } catch (err) {
            $(".street-error").show();
            console.warn(err);
        }
        try {
            if (urlPattern.test(url) == false) {
                throw "Invalid street!";
            }
        } catch (err) {
            $(".url-error").show();
            console.warn(err);
        }
        try {
            if (passwordPattern.test(password) == false) {
                throw "Invalid password!";
            }
        } catch (err) {
            $(".password-error").show();
            console.warn(err);
        }
    })
});