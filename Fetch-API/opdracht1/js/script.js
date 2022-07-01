$(document).ready(function () {
    const config = {
        method: "GET",
        mode: "same-origin",
        cache: "no-store"
    };

    function loadFile(file) {
        fetch(`files/${file}.txt`, config)
            .then(response => response.text())
            .then(data => {
                $("p").text(data);
            })
    }
    $("#ff").change(function () {
        loadFile($(this).val());
    })
    loadFile("ff4");
});