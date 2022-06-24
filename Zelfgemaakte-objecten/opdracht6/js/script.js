$(document).ready(function () {
    //Net als bij opdracht 5 problemen met Exception handling
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
                    }
                } catch (error) {
                    console.log(error);
                }
                t
            },
        });
        Object.defineProperty(this, "releaseDate", {
            get: function () {
                return `<strong>${releaseDate}</strong>`;
            },
            set: function (releaseDate) {
                try {
                    if (Number.isInteger(releaseDate)) {
                        this.releaseDate = releaseDate;
                    }
                } catch (error) {
                    this.releaseDate = error;
                }

            },
        });
        Object.defineProperty(this, "platform", {
            get: function () {
                return `<em>${platform}</em>`;
            },
            set: function (platform) {
                this.platform = platform;
            },
        });
        Object.defineProperty(this, "developer", {
            get: function () {
                return `<em>${developer}</em>`;
            },
            set: function (developer) {
                this.developer = developer;
            },
        });
        Object.defineProperty(this, "roll", {
            value: function (number) {
                return Math.floor(Math.random() * number) + 1;
            }
        })
    }

    let worldOfWarcraft = new Game("World of Warcraft", "hi", "pc", "Blizzard Entertainment");
    let marioKart = new Game("Mario Kart 8", 2014, "Nintendo Switch, Wii U", "Nintendo");
    let eldenRing = new Game("Elden Ring", 2022, "PlayStation 4, Project Scarlett, Xbox One, PlayStation 5, Microsoft Windows ", "From Software");


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