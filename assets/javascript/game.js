

var currentScore = 0;
var wins = 0;
var losses = 0; 
var math = Math.floor(Math.random() * (102)) + 19;

$(document).ready(function() {


function startGame () {


	$(".winner").html("Wins: " + wins);
	$(".loser").html("Losses: " + losses);

	var redCrystal = Math.floor(Math.random() * 12) + 1;
	var blueCrystal = Math.floor(Math.random() * 12) + 1;
	var yellowCrystal = Math.floor(Math.random() * 12) + 1;
	var greenCrystal = Math.floor(Math.random() * 12) + 1;
	

	$(".game-score").append("<h3>" + math + "</h3>");


	$("#red").on("click", function () {
		currentScore += redCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");
	})
	$("#blue").on("click", function () {
		currentScore += blueCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");	
	})
	$("#yellow").on("click", function () {
		currentScore += yellowCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");	
	})
	$("#green").on("click", function () {
		currentScore += greenCrystal; 
		$(".score").html("<h3>" + currentScore + "</h3>");
	})

}


function playGame () {

	if (currentScore === math) {
		wins += 1;
		$(".winner").text("Wins: " + wins);
		 console.log(wins);
	} else if (currentScore > math) {
		losses += 1;
		$(".loser").text("Losses: " + losses);
		 console.log(losses)
	}

}

function reset () {
	$(".score").html();
	currentScore = 0;
	math = Math.floor(Math.random() * (102)) + 19;
	var redCrystal = Math.floor(Math.random() * 12) + 1;
	var blueCrystal = Math.floor(Math.random() * 12) + 1;
	var yellowCrystal = Math.floor(Math.random() * 12) + 1;
	var greenCrystal = Math.floor(Math.random() * 12) + 1;

}


//reset();
startGame();
playGame();

});