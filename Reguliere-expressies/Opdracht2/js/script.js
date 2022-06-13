$(document).ready(function () {
    let pattern = /^(06|06[\s]|06-|\+31[\s]6[\s])[0-9]{8}$/;
    $("#submit-number").click(function (e) {
        e.preventDefault();
        let phoneNumber = $("#phone-number").val();
        if (pattern.test(phoneNumber) == false) {
            $(".error").show();
            console.warn("Invalid phone number!");
        }
    })
});