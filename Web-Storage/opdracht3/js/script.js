$(document).ready(function () {
    const text = [];
    $("figure").each(function () {
        $(this).data("clickCount", 0);
        text.push($(this).find("figcaption").text());
    })
    $("figure").click(function () {
        let clicks = $(this).data("clickCount");
        $(this).data("clickCount", ++clicks);
        $(this).find("figcaption").text(`${text[$(this).index()]} - ${clicks}`);
        alert(`U heeft geklik op het album ${$(this).find("img").attr("alt")} van ${$(this).data("artist")} uit ${$(this).data("year")}.`);
    })
    console.log($("figcaption"));
});