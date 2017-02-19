

var currentScore = 0;
var wins = 0;
var losses = 0; 
var math = Math.floor(Math.random() * (102)) + 19;

$(document).ready(function() {

	var redCrystal = Math.floor(Math.random() * 12) + 1;
	var blueCrystal = Math.floor(Math.random() * 12) + 1;
	var yellowCrystal = Math.floor(Math.random() * 12) + 1;
	var greenCrystal = Math.floor(Math.random() * 12) + 1;

	$("#red").on("click", function () {
		playGame();
		currentScore += redCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");
	})
	$("#blue").on("click", function () {
		playGame();
		currentScore += blueCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");	
	})
	$("#yellow").on("click", function () {
		playGame();
		currentScore += yellowCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");	
	})
	$("#green").on("click", function () {
		playGame();
		currentScore += greenCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");
	})

function startGame () {

	$(".winner").html("Wins: " + wins);
	$(".loser").html("Losses: " + losses);
	$(".game-score").append("<h3>" + math + "</h3>");


}

function playGame () {

	if (currentScore === math) {
		wins += 1;
		$(".winner").text("Wins: " + wins);
		 alert("You Win! \n The Random Number has been reset. Play again! \n Wins: " + wins);
		 reset();
	} else if (currentScore > math) {
		losses += 1;
		$(".loser").text("Losses: " + losses);
		 alert("You lose. \n The Random Number has been reset. Play again! \n Losses: " + losses)
		 reset();
	}

}

function reset () {	
	math = Math.floor(Math.random() * (102)) + 19;
	redCrystal = Math.floor(Math.random() * 12) + 1;
	blueCrystal = Math.floor(Math.random() * 12) + 1;
	yellowCrystal = Math.floor(Math.random() * 12) + 1;
	greenCrystal = Math.floor(Math.random() * 12) + 1;
	currentScore = 0;
	$(".score").html("0");
	$(".game-score").html("<h3> Random number: <br>	"+  + math + "</h3>");

}

startGame();
playGame();

});