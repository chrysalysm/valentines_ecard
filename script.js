/*
Valentines e-Card Script
Version: 1.1
Last Updated: December 11th, 2014
Script: milkmandan - http://intechnicolor.net
Special Thanks to Clone.Manga - http://manga.clone-army.org/
*/

// Javascript 4 Kids
window.onload = function() {
	window.imgArray = new Array();
	imgArray[0] = "valentines_donthateme.jpg";
	imgArray[1] = "valentines_friend.jpg";
	imgArray[2] = "valentines_hurtme.jpg";
	imgArray[3] = "valentines_talktome.jpg";
	window.name = prompt("Please enter your name:", "Guybrush Threepwood");
	// input validation
	if (name === null || name == "null" || name == "") {
		name = "idiot that didn't enter a name";
	}
	window.canvas = document.getElementById("vCanvas");
	window.context = canvas.getContext("2d");
	window.x = (canvas.width / 2) + 3;
	window.randNum = Math.floor(Math.random()*4);
	window.newrandNum = randNum;
	var image = new Image();
	image.onload = function() {
		context.drawImage(image, 0, 0);
		if (name == "idiot that didn't enter a name") {
			context.font = "16pt Tahoma";
		} else {
			context.font = "21pt Tahoma";
		}
		context.textAlign = "center";
		context.fillStyle = "#7B4D1B";
		context.fillText(name, x, 100);
		context.font = "15pt Tahoma";
		// Altruism, because I am not selfish
		context.fillText("Yours Truly", 230, 575);
	};
	image.src = imgArray[randNum];
};

function imgRotation() {
	var newImage = new Image();
	newrandNum++;
	if (newrandNum > 3) {
		newrandNum = 0;
	}
	newImage.onload = function() {
		context.drawImage(newImage, 0, 0);
		if (name == "idiot that didn't enter a name") {
			context.font = "16pt Tahoma";
		} else {
			context.font = "21pt Tahoma";
		}
		context.textAlign = "center";
		context.fillStyle = "#7B4D1B";
		context.fillText(name, x, 100);
		context.font = "15pt Tahoma";
		context.fillText("Yours Truly", 230, 575);
	};
	newImage.src = imgArray[newrandNum];
}
