$(document).ready(function () {
    let pattern = /((?<=LOCATION\:)(.*)|(?<=OBTAINED BY\:)(.*))/g;


    fetch('text/oot-heart-pieces.txt')
        .then(response => response.text())
        .then(data => {
            let hi = "hi";
            let match = data.match(pattern);
            for (let i = 0; i < match.length; i++) {
                $("tbody").append(`<tr><td>${match[i]}</td><td>${match[++i]}</td></tr>`)
            }
            console.log(match);
        });
});