/*
Javascript file
Draws balls on the screen which bounce around

Key presses and their effects:
	Space bar -> creates a new ball
	r -> clears all balls
	up arrow -> increases radius of all balls
	down arrow -> decreases radius of all balls

Note: sometimes balls get lost when the page is resized quickly
Note: sometimes balls get stuck to the edges when the radius changes quickly
*/

//get the canvas and the context
var canvas = document.getElementById("myCanvas")
var context = canvas.getContext("2d")
var stage = "instructions"

//initialize arrays to hold data for balls
var ballsX = []
var ballsDX = []
var ballsY = []
var ballsDY = []
var ballsColor = []

//set the radius here
var radius = 20

//function to detect when up arrow is pressed
//when it is pressed, increase the ball radius by 2
//maximum ball radius is 100
document.addEventListener("keydown", function(event){
	if (event.key == "ArrowUp"){
		radius += 2
		if (radius > 100){
			radius = 100
		}
	}
})

//function to detect when down arrow is pressed
//when it is pressed, decrease the ball radius by 2
//minimum ball radius is 2
document.addEventListener("keydown", function(event){
	if (event.key == "ArrowDown"){
		radius -= 2
		if (radius < 2){
			radius = 2
		}
	}
})

//function that generates a random color
function randomColor(){
	var chars = "0123456789ABCDEF"
	var color = "#"
	for (i = 0; i < 6; i ++){
		color += chars[(Math.floor(Math.random() * 16))]
	}
	return color
}

//function that adds a new ball to the system
function addBall(){
	ballsX.push(Math.random() * canvas.width)
	ballsDX.push(Math.random() * 10)
	ballsY.push(Math.random() * canvas.height)
	ballsDY.push(Math.random() * 10)
	ballsColor.push(randomColor())
}

//function that clears all balls and resets the radius to 20
function clearBalls(){
	ballsX = []
	ballsDX = []
	ballsDY = []
	ballsColor = []
	radius = 20
}

//function to detect when space key is pressed
//when it is pressed, call the addBall function
//also, change the stage of the game to "bouncing"
document.addEventListener("keypress", function(event){
	if (event.keyCode == 32){
		addBall()
		stage = "bouncing"
	}
})

//function to detect when the r key is pressed
//when it is pressed, call the clearBalls function
document.addEventListener("keypress", function(event){
	if (event.code == "KeyR"){
		stage = "instructions"
		clearBalls()
	}
})

//function that draws a single ball
function drawBall(x, y, color) {
	context.beginPath()
	context.arc(x, y, radius, 0, Math.PI * 2)
	context.fillStyle = color
	context.fill()
	context.closePath()
}

//function that draws the bouncing ball stage
function drawBouncing() {
	//draw on the canvas
	for (i = 0; i < ballsX.length; i ++){
		x = ballsX[i]
		dx = ballsDX[i]
		y = ballsY[i]
		dy = ballsDY[i]
		color = ballsColor[i]
		drawBall(x, y, color)
		ballsX[i] += dx
		ballsY[i] += dy
		if (x + dx + (radius / 2) > canvas.width || x + dx - (radius / 2) < 0){
			ballsDX[i] *= -1
		}
		if (y + dy + (radius / 2) > canvas.height || y + dy - (radius / 2) < 0){
			ballsDY[i] *= -1
		}

	}

}

//function that draws the instructions stage
function drawInstructions() {
	//write the instructions
	instructions = []
	instructions.push("Instructions")
	instructions.push("Press 'space' to create a new ball")
	instructions.push("Press 'up arrow' to increase the radius of all balls")
	instructions.push("Press 'down arrow' to decrease the radius of all balls")
	instructions.push("Press 'r' to return to this instructions page and restart")
	instructions.push("Press 'space' to begin")
	for (i = 0; i < instructions.length; i ++){
		context.fillText(instructions[i], 50, i * 35 + 50)
	}
}

//general draw function
function draw(){
	//resize and clear the canvas
	canvas.width = window.innerWidth - 50
	canvas.height = window.innerHeight - 50
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.font = "30px Arial"
	if (stage == "instructions"){
		drawInstructions()
	}
	if (stage == "bouncing"){
		drawBouncing()
	}
}

//set the interval for how often to redraw the canvas
setInterval(draw, 10);
