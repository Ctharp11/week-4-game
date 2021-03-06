
$(document).ready(function() {

var currentScore = 0;
var wins = 0;
var losses = 0; 
var math = Math.floor(Math.random() * (102)) + 19;

var redCrystal = Math.floor(Math.random() * 12) + 1;
var blueCrystal = Math.floor(Math.random() * 12) + 1;
var yellowCrystal = Math.floor(Math.random() * 12) + 1;
var greenCrystal = Math.floor(Math.random() * 12) + 1;

	$("#red").on("click", function () {
		currentScore += redCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");
		playGame();
	})
	$("#blue").on("click", function () {
		currentScore += blueCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");	
		playGame();
	})
	$("#yellow").on("click", function () {
		currentScore += yellowCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");	
		playGame();
	})
	$("#green").on("click", function () {
		currentScore += greenCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");
		playGame();
	})

function startGame () {


	$(".winner").html("Wins: " + wins);
	$(".loser").html("Losses: " + losses);
	$(".game-score").append("<h3>" + math + "</h3>");
	$(".game-over").text("Click the crystals to start playing!");

}

function playGame () {

	if (currentScore === math) {
		wins += 1;
		$(".winner").text("Wins: " + wins);
		$(".game-over").text("You win! Play again.");
		 reset();
		
	} else if (currentScore > math) {
		losses += 1;
		$(".loser").text("Losses: " + losses);
		$(".game-over").html("You lose. Play again.");
		 reset();

	}

}

function reset () {	
	math = Math.floor(Math.random() * (102)) + 19;
	redCrystal = Math.floor(Math.random() * 12) + 1;
	blueCrystal = Math.floor(Math.random() * 12) + 1;
	yellowCrystal = Math.floor(Math.random() * 12) + 1;
	greenCrystal = Math.floor(Math.random() * 12) + 1;
	$(".score").empty();
	$(".game-score").html("<h3> Random number: <br>	"+  + math + "</h3>");
	currentScore = 0;
}

startGame();


});