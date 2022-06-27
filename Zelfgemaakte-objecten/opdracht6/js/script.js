$(document).ready(function () {

    function Game(name, releaseDate, platform, developer) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.platform = platform;
        this.developer = developer;

        Object.defineProperty(this, "name", {
            get: function () {
                return `<strong>${name}</strong>`;
            },
            set: function (newName) {
                try {
                    if (typeof newName === "string") {
                        return name = newName;
                    } else {
                        throw new TypeError("name must be a string!");
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
                        return releaseDate = release;
                    } else {
                        throw new TypeError("releaseDate must be an int!");
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
            set: function (newPlatform) {
                try {
                    if (typeof newPlatform === "string") {
                        return platform = newPlatform;
                    } else {
                        throw new TypeError("platform must be a string!");
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
            set: function (newDeveloper) {
                try {
                    if (typeof newDeveloper === "string") {
                        return developer = newDeveloper;
                    } else {
                        throw new TypeError("developer must be a string!");

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


    worldOfWarcraft.name = "hello";
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