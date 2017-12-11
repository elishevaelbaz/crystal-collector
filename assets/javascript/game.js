
var targetNum;


var counter = 0;
var wins = 0;
var losses = 0;
var gameOver = false;

// initialize this variable at 4 
//so if we want to change the number of crystals
//in the program, we just have to change this value
// numCrystals = 4;

var imageArray = ["assets/images/green-gem.png", "assets/images/green-gem.png",
"assets/images/green-gem.png", "assets/images/green-gem.png"]


var gemVal = [];
generateVals();


// var gemVal1 = Math.floor((Math.random()* 12) + 1);
// var gemVal2 = Math.floor((Math.random()* 12) + 1);
// var gemVal3 = Math.floor((Math.random()* 12) + 1);
// var gemVal4 = Math.floor((Math.random()* 12) + 1);


for (var i = 0; i < imageArray.length; i++){

	var imageCrystal = $("<img>");

	imageCrystal.addClass("crystal-image");

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
	// alert("crystal value: " + crystalValue + " Your Score: " + counter)

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

// $(".btn").on("click", function(){
// 	resetGame();
// })
function generateVals(){

	targetNum = Math.floor((Math.random()* 102) + 19);
	$("#number-to-guess").text(targetNum);

	for (var i = 0; i < imageArray.length; i++) {

		gemVal[i] = Math.floor((Math.random()* 12) + 1);

	}
}

function resetGame() {
	counter = 0;
	$("#score").html(counter);
	generateVals();
	// gameOver = false;
}


