$(document).ready(function () {
    let phonePattern = /^(06|06[\s]|06-|\+31[\s]6[\s])[0-9]{8}$/;
    let birthdayPattern = /^([\d]{1,2})(-|[\s])([a-z]|[0-9]{2,})/;
    $("#submit-number").click(function (e) {
        e.preventDefault();
        let phoneNumber = $("#phone-number").val();
        let birthday = $("#birthday").val();
        if (phonePattern.test(phoneNumber) == false) {
            $(".phone-error").show();
            console.warn("Invalid phone number!");
        }
        if (birthdayPattern.test(birthday) == false) {
            $(".phone-error").show();
            console.warn("Invalid birthday!");
        }
    })
});