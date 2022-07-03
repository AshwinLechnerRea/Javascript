$(document).ready(function () {
    function loadImages() {
        fetch("imagecrawler.php")
            .then(response => response.text())
            .then(data => {
                $(".images").html(data);
            })
            .catch(error => {
                console.error("Niet gelukt.");
            });
    }
    loadImages();
    setInterval(() => {
        loadImages();
    }, 30000);

});