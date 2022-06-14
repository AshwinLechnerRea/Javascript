const users = "Branford, Terra\nCole, Locke\n Garamonde, Cyan";
const users2 = "Branford, Terra\nCole, Locke\nGaramonde, Cyan\nChère, Celes";

function toUpper(match, $1, $2) {
    return $2 + " " + $1.toUpperCase();
}

console.log(users.replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));
console.log(users2.replace(/([A-zÀ-ú]+), ([A-zÀ-ú]+)/g, "$2 $1"));
console.log(users2.replace(/([A-zÀ-ú]+), ([A-zÀ-ú]+)/g, toUpper));