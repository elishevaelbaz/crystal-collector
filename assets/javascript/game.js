// initialize the game
var targetNum;
var counter = 0;
var wins = 0;
var losses = 0;
var gameOver = false;

var imageArray = ["assets/images/yellow-gem.png", "assets/images/green-gem.png",
"assets/images/heart-gem.png", "assets/images/blue-gem2.png"]

var idArray = ["gem1", "gem2", "gem3", "gem4"];
var gemVal = [];

generateVals();

//create the crystals, give them ids (from the id array) 
//and other attributes
//and append them to the crystals div
for (var i = 0; i < imageArray.length; i++){

	var imageCrystal = $("<img>");

	imageCrystal.addClass("crystal-image");

	// give each crystal an id so it can be called later
	//to reset the values
	imageCrystal.attr("id", idArray[i]);

	imageCrystal.attr("src", imageArray[i]);

	imageCrystal.attr("data-crystalvalue", gemVal[i]);

	$("#crystals").append(imageCrystal);

}

// When a crystal is clicked
$(".crystal-image").on("click", function(){

	var crystalValue = ($(this).attr("data-crystalValue"));
	crystalValue = parseInt(crystalValue);

	counter += crystalValue;
	$("#score").html(counter);

	if (counter == targetNum) {
		wins++;
		$("#wins").html(wins);
		resetGame();
		}

	else if (counter > targetNum) { 
		losses++;
		$("#losses").html(losses);
		resetGame();	
	}
})

function generateVals(){

	targetNum = Math.floor((Math.random()* 102) + 19);
	$("#number-to-guess").text(targetNum);

	//generate 4 random numbers 
	//and put them in the gemVal array
	for (var i = 0; i < imageArray.length; i++) {

		gemVal[i] = Math.floor((Math.random()* 12) + 1);

	}
//Give the new values to each gem, referenced by IDs
	$("#gem1").attr("data-crystalvalue", gemVal[0]);
	$("#gem2").attr("data-crystalvalue", gemVal[1]);
	$("#gem3").attr("data-crystalvalue", gemVal[2]);
	$("#gem4").attr("data-crystalvalue", gemVal[3]);

}

function resetGame() {
	counter = 0;
	$("#score").html(counter);
	generateVals();
}


