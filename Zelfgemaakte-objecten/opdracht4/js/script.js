$(document).ready(function () {
    function Movie(name, releaseDate, genre, directors, writers, actors) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.directors = directors;
        this.writers = writers;
        this.actors = actors;
    }
    let vampirsKiss = new Movie("Vampire's Kiss", 1988, "Comedy", ["Robert Bierman"], ["Joseph Minion"], ["Nicolas Cage", "Maria Conchita Alonso", "Jennifer Beals"]);
    let singham = new Movie("Singham", 2011, "Action", ["Rohit Shetty"], ["Hari", "Yunus Sajawal", "Sajid", "Farhad Samji"], ["Ajay Devgn ", "MPrakash Raj", "Sudhanshu Pandey"]);
    let theAmazingBulk = new Movie("The Amazing Bulk", 2012, "Animation", ["Lewis Schoenbrun"], ["Keith Schaffner", "Jeremiah Campbell", "Keith Schaffner"], ["Terence Lording", "Shevaun Kastl", "Randal Malone"]);
    let movies = [vampirsKiss, singham, theAmazingBulk];
    console.log(movies);
});