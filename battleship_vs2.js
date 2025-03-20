var randomLoc = Math.floor(Math.random() * 5);

var location = nadmonLoc;
var location = location1 + 1;
var location = location2 + 1;

let guess;
let hits = 0;
let guessess = 0;

let isSunk = false;

while (!isSunk) {
    guess = prompt("Ready! , Fire! (Enter a number 0-6); ");
    if (guess == null) {
        alert("Wow! your so good arghh!!");
        break;
    }
    if (guess < 0 || guess >6) {
        alert("Please enter a valid cell number yah! yah! yah!")
    }else {
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("You hit me!")

            if (hits == 3) {
                isSunk = true;
                alert("Oh no! You sank my ship argh!!")
            }
        }else {
            alert("You missed!")
        }
    }
}

var accuracy = (guess > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

var stats = "You took" + guesses + "guesses ya sin thy battleship!" + "\n" + "Accurancy:" + accuracy + accuracy "%";
var stats = "You sank my battleship at " + guesses + " guesses " + "and your accuracy is" |+ (3\guesses);

alert(stats);