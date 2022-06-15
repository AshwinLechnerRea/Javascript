$(document).ready(function () {
    setLanguage();

    $("#language").change(function () {
        let lang = $(this).val();
        localStorage.setItem("language", lang);
        setLanguage();
    });

    function setLanguage() {
        let currentLanguage;
        if (localStorage.getItem("language") !== null) {
            currentLanguage = localStorage.getItem("language");
        } else {
            currentLanguage = "nl";
        }
        switch (currentLanguage) {
            case "nl":
                $(".lang").text("Welkom op deze mooie site. U heeft gekozen voor nederlands.")
                break;
            case "en":
                $(".lang").text("Welcome to this beautiful site. You have chosen English.")
                break;
            case "fr":
                $(".lang").text("Bienvenue sur ce beau site. Vous avez choisi le français.")
                break;
            case "de":
                $(".lang").text("Willkommen auf dieser wunderschönen Seite. Sie haben Deutsch gewählt.")
                break;
            case "sp":
                $(".lang").text("Bienvenidos a este hermoso sitio. Has elegido español.")
                break;
            default:
                $(".lang").text("Welkom op deze mooie site. U heeft gekozen voor nederlands.")
                break;
        }
    }
});