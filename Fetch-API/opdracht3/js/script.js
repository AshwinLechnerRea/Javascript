$(document).ready(function () {
    //Gevonden via Stackoverflow
    jQuery.fn.reverse = function () {
        return this.pushStack(this.get().reverse(), arguments);
    };
    async function loadImages() {
        const response = await fetch("imagecrawler.php");
        const data = await response.text();
        return $(".images").html(data);
    }

    async function reverseOrder() {
        await loadImages();
        $("img").reverse().each(function () {
            $(".images").append($(this));
        })
    }
    loadImages();

    let timeout = 3000;
    let timesCalled = 0;
    let intervalId = setInterval(callback, timeout);

    function callback() {
        if (timesCalled < 2) {
            loadImages();
            timesCalled++;
        } else {
            reverseOrder();
        }
        clearInterval(intervalId);
        if (timeout < 9000) {
            timeout += 1000;
        }
        intervalId = setInterval(callback, timeout);
    }
});