var numCircles = 90;
var colors = []; 
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var circles = document.querySelectorAll(".circle");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var modeContainer = document.querySelector("#container");
var modeNew = document.querySelectorAll(".first");



init();

function removeFirst(){

	var element = document.getElementById("container");
	element.classList.remove("first");

// 	if(modeButtons.textContent === "Hard"){ 
// 	var element = document.getElementById("container");
// 	element.classList.remove("first");
// } else {
// 	false
// }
}

function addFirst(){
	var element = document.getElementById("container");
	element.classList.add("first");
}




function init(){
	// mode buttons event listener
	setupModeButtons();
	setupCircles();
	reset();
	removeFirst();
}

function setupModeButtons(){
 	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");		
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");				
			
		this.classList.add("selected");				
		// ternary operator does exactly the same thing as the if statment below
		this.textContent === "Easy" ? numCircles = 9: this.textContent === "Medium" ? numCircles = 27: numCircles = 90;
		// if(this.textContent === "Easy"){
		// 	numCircles = 3;
		// } else {
		// 	numCircles = 6;
		// }

		

	reset();
	
	});	
	}
}



function setupCircles(){
	for (var i = 0; i < circles.length; i++) {
	// add click listeners to circles
	circles[i].addEventListener("click", function() {
		//grab color of clicked circle
		 var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
	}
}




function reset(){
	// generate all new colors
	colors = generateRandomColors(numCircles);
	// pick a new random color from arr
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";	
	messageDisplay.textContent = "";
	// change colors of circles
	for (var i = 0; i < circles.length; i++){
		if(colors[i]){
			circles[i].style.display = "block";
			circles[i].style.backgroundColor = colors[i];
		} else {
			circles[i].style.display = "none";
		}
		circles[i].style.backgroundColor = colors[i];
	}
	// reset the color of the stripe back to background
	h1.style.backgroundColor = "steelblue";
} 

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numCircles = 3;
// 	colors = generateRandomColors(numCircles);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < circles.length; i++) {
// 		if(colors[i]){
// 			circles[i].style.backgroundColor = colors[i];
// 		} else {
// 			circles[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numCircles = 6;
// 	colors = generateRandomColors(numCircles);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < circles.length; i++) {
		
// 			circles[i].style.backgroundColor = colors[i];
		
// 			circles[i].style.display = "block";
		
// 	}
// });

resetButton.addEventListener("click", function() {
	reset();
})

	function changeColors(color) {
		//loop through all circles
		for(var i = 0; i < circles.length; i++){
			// change each color to match given color
			circles[i].style.backgroundColor = color;
		}
		
	}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}


function generateRandomColors(num) {
	// make an array
	var arr = []
	// repeat num times
	for(var i = 0; i < num; i++){
	//get random color and push into arr
	arr.push(randomColor())
		
	}
	// return that array
	return arr;
}	


function randomColor() {
	// pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}