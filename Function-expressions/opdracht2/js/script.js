$(document).ready(function () {
    // let sectionMaker = function (inputText) {
    //     let result = "<section><p>" + inputText + "</p></section>";
    //     return result;
    // }
    let sectionMaker = inputText => "<section><p>" + inputText + "</p></section>";
    $("body").append(sectionMaker("Hallo Jumbo"));
});