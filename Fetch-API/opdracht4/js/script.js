$(document).ready(function () {
    $("#files").change(function () {
        $.ajax({
            url: `${$(this).val()}.html`,
            method: "GET"
        }).done(function (result) {
            $("section").html(result);
        }).fail(function () {
            $("section").html("ERROR! Sorry not sorry.");
        });
    })
});