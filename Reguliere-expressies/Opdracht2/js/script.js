$(document).ready(function () {
    const pattern = /^(06|\+31[\s]6[\s])(([\s]|-)?)[0-9]{8}$/;

    $("#submit-number").click(function (e) {
        e.preventDefault();
        let phoneNumber = $("#phone-number").val();
        if (pattern.test(phoneNumber) == false) {
            $(".error").show();
            console.warn("Invalid phone number!");
        } else {
            console.log("Correct syntex");
        }
    })
});