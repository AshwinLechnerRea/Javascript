$(document).ready(function () {
    //Problemen met error handling. Werkt niet bij goede nieuwe data type (RangeError: Maximum call stack size exceeded)
    function Game(name, releaseDate, platform, developer) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.platform = platform;
        this.developer = developer;

        Object.defineProperty(this, "name", {
            get: function () {
                return `<strong>${name}</strong>`;
            },
            set: function (name) {
                try {
                    if (typeof name === "string") {
                        this.name = name;
                    } else {
                        throw "name must be a string!"
                    }
                } catch (error) {
                    console.log(error);
                }
            },

        });
        Object.defineProperty(this, "releaseDate", {
            get: function () {
                return `<strong>${releaseDate}</strong>`;
            },
            set: function (release) {
                try {
                    if (Number.isInteger(release)) {
                        this.releaseDate = release;
                    } else {
                        throw "releaseDate must be an int!"
                    }
                } catch (error) {
                    console.log(error);
                }
            },
        });
        Object.defineProperty(this, "platform", {
            get: function () {
                return `<em>${platform}</em>`;
            },
            set: function (platform) {
                try {
                    if (typeof platform === "string") {
                        this.platform = platform;
                    } else {
                        throw "platform must be a string!"
                    }
                } catch (error) {
                    console.log(error);
                }
            },

        });
        Object.defineProperty(this, "developer", {
            get: function () {
                return `<em>${developer}</em>`;
            },
            set: function (developer) {
                try {
                    if (typeof developer === "string") {
                        this.developer = developer;
                    } else {
                        throw "developer must be a string!"
                    }
                } catch (error) {
                    console.log(error);
                }
            },

        });
        Object.defineProperty(this, "roll", {
            value: function (number) {
                return Math.floor(Math.random() * number) + 1;
            }
        })
    }

    let worldOfWarcraft = new Game("World of Warcraft", 2004, "pc", "Blizzard Entertainment");
    let marioKart = new Game("Mario Kart 8", 2014, "Nintendo Switch, Wii U", "Nintendo");
    let eldenRing = new Game("Elden Ring", 2022, "PlayStation 4, Project Scarlett, Xbox One, PlayStation 5, Microsoft Windows ", "From Software");


    worldOfWarcraft.releaseDate = "sa";
    console.log(worldOfWarcraft.roll(8));

    function makeList(game) {
        let values = Object.values(game);
        let html = ""
        html += "<ul>";
        for (let i = 0; i < values.length; i++) {
            html += `<li>${values[i]}</li>`;
        }
        html += "</ul>"
        $("body").append(html);
    }
    makeList(worldOfWarcraft);
    makeList(marioKart);
    makeList(eldenRing);
});