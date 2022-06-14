$(document).ready(function () {
    let phonePattern = /^(06|06[\s]|06-|\+31[\s]6[\s])[0-9]{8}$/;
    let birthdayPattern = /^([\d]{1,2})(-|[\s])([a-z]|[0-9]{2,})/;
    let streetPattern = /^([a-z]*)([\s]+)([0-9]{1,3})(((-|[\s])?)([a-z]?))$/i;
    let urlPattern = /^(http)s?:\/\//i;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

    $("#submit-number").click(function (e) {
        e.preventDefault();
        let phoneNumber = $("#phone-number").val();
        let birthday = $("#birthday").val();
        let street = $("#street").val();
        let url = $("#url").val();
        let password = $("#password").val();
        if (phonePattern.test(phoneNumber) == false) {
            $(".phone-error").show();
            console.warn("Invalid phone number!");
        }
        if (birthdayPattern.test(birthday) == false) {
            $(".birthday-error").show();
            console.warn("Invalid birthday!");
        }
        if (streetPattern.test(street) == false) {
            $(".street-error").show();
            console.warn("Invalid street!");
        }
        if (urlPattern.test(url) == false) {
            $(".url-error").show();
            console.warn("Invalid street!");
        }
        if (passwordPattern.test(password) == false) {
            $(".password-error").show();
            console.warn("Invalid password!");
        }
    })
});