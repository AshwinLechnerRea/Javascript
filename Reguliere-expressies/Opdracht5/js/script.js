$(document).ready(function () {
    let dice = Math.floor(Math.random() * 6) + 1;
    const d = new Date();
    let day = d.getDay();

    $(".roll").text(dice);
    $(".weekday").text(day);
    try {
        if (dice === 1) {
            throw " Helaas, je hebt de skill check niet gehaald!";
        }
    } catch (err) {
        console.error(err);
    }
    try {
        if (day === 0 || day === 6) {
            throw "STOP! Het is weekend!"
        }
    } catch (err) {
        console.warn(err);
    }
});