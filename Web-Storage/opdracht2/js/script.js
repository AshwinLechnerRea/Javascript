let timeNow = new Date().getTime();
let startTime;


if (localStorage.getItem("startTime") !== null) {
    startTime = localStorage.getItem("startTime");
} else {
    localStorage.setItem("startTime", timeNow);
}
setInterval(function () {
    let currentTime = new Date().getTime();
    let timeDiff = currentTime - startTime;
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    $("#time").text(`${hours}:${minutes}:${seconds}`);

}, 1000);