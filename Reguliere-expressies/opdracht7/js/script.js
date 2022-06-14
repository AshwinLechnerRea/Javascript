$(document).ready(function () {
    let string = $("p").text();
    const pattern = /[A-Z]{2}[\s][0-9]{5}/g;
    let matches = string.match(pattern);
    for (let i = 0; i < matches.length; i++) {
        $(".lotery-numbers").append(`<li>${matches[i]}</li>`);
        console.log(matches[i]);
    }
});