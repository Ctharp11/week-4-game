

var gameNumber = [""];
var myNumber = "";
var wins = 0;
var losses = 0; 
var score = 0; 
var red = "";
var blue = "";
var yellow = "";
var green = "";

$(document).ready(function() {


function startGame () {
    	
	var redCrystal = Math.floor(Math.random() * 12) + 1;
	var blueCrystal = Math.floor(Math.random() * 12) + 1;
	var yellowCrystal = Math.floor(Math.random() * 12) + 1;
	var greenCrystal = Math.floor(Math.random() * 12) + 1;


}



	startGame() 



	var math = Math.floor(Math.random() * (102)) + 19;

	var redCrystal = Math.floor(Math.random() * 12) + 1;
	var blueCrystal = Math.floor(Math.random() * 12) + 1;
	var yellowCrystal = Math.floor(Math.random() * 12) + 1;
	var greenCrystal = Math.floor(Math.random() * 12) + 1;

	$(".game-score").append(math);


	$("#red").on("click", function () {
		$(".score").html(redCrystal);
	
	})
	$("#blue").on("click", function () {
		$(".score").html(blueCrystal);
		
	})
	$("#yellow").on("click", function () {
		$(".score").html(yellowCrystal);
		
	})
	$("#green").on("click", function () {
		$(".score").html(greenCrystal);
		
	})




function game () {
	//if myNumber === gameNumber, then I wins++
	//else if myNumber > gameNumber, then I losses++
}

function reset () {
	//if I win, then new gameNumber and myNumber is set back to 0
	//Each crystal recieves and new sum number between 1 - 12
}

});