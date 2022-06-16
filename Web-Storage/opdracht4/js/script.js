$(document).ready(function () {
    if (localStorage.getItem("backgroundColor") !== null) {
        let bgColor = localStorage.getItem("backgroundColor");
        $("body").css("background-color", bgColor);
        console.log(bgColor);
    }
    $("button").click(function () {
        let bgColor = $(this).data("bg-color")
        $("body").css("background-color", bgColor);
        localStorage.setItem("backgroundColor", bgColor);
    })
});