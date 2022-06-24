let startTime;

if (sessionStorage.getItem("startTime") !== null) {
    startTime = sessionStorage.getItem("startTime");
} else {
    startTime = new Date().getTime();
    sessionStorage.setItem("startTime", startTime);
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