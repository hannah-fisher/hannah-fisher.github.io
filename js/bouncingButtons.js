/*
JavaScript file
Draws rectangles on the screen which bounce around and link to other pages
*/

//get the canvas and the context
var canvas = document.getElementById("myCanvas")
var context = canvas.getContext("2d")

///////////////////////////////////////////////////////////////////////////////
//Bouncing button class

class BouncingButton {

  //constructor function
  constructor(text, fillColor, outlineColor, textColor, redirectPage, x, y, dx, dy, width, height){
    this.text = text
    this.fillColor = fillColor
    this.outlineColor = outlineColor
    this.textColor = textColor
    this.redirectPage = redirectPage
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.width = width
    this.height = height
  }

  //function for use in the click event listener
  //gives button functionality sort of
  clickCheck(eX, eY){
    if (eX > this.x && eX < this.x + this.width && eY > this.y && eY < this.y + this.height){
      window.location.href = this.redirectPage
    }
  }

  //draw this button function
  //also move it by the specified amount
  //and check whether it has hit the edge, if so then bounce
  drawAndMove(){
    //filled in rectangle
    context.beginPath()
    context.fillStyle = this.fillColor
    context.fillRect(this.x, this.y, this.width, this.height)
    //outline
    context.beginPath()
    context.strokeStyle = this.outlineColor
    context.rect(this.x, this.y, this.width, this.height)
    context.lineWidth = 5
    context.stroke()
    //text
    context.fillStyle = this.textColor
    context.fillText(this.text, this.x + 10, this.y + this.height / 2)
    context.stroke()
    //move
    this.x += this.dx
    this.y += this.dy
    //check for edge and bounce
    if (this.x < 0 || this.x + this.width > canvas.width){
      this.dx *= -1
    }
    if (this.y < 100 || this.y + this.height > canvas.height){
      this.dy *= -1
    }

  }

}

///////////////////////////////////////////////////////////////////////////////

//create buttons and add clickability
canvas.width = window.innerWidth
canvas.height = window.innerHeight


aboutMeButton = new BouncingButton("About Me", "#75DDDD", "#004346", "#172A3A", "aboutMe.html", 0, 0, 0, 0, canvas.width / 2, 100)
hireMeButton = new BouncingButton("Hire Me", "#75DDDD", "#004346", "#172A3A", "hireMe.html", canvas.width / 2, 0, 0, 0, canvas.width / 2, 100)
bouncingBallButton = new BouncingButton("Bouncing Balls Javascript", "#09BC8A", "#004346", "#172A3A", "bouncingBalls.html", 200, 300, -1, 1, 350, 200)
hsProgProjButton = new BouncingButton("HS Programming Projects", "#09BC8A", "#004346", "#172A3A", "hsProgrammingProjects.html", 200, 200, 1, 1.5, 300, 200)
crochetButton = new BouncingButton("Crocheting", "#09BC8A", "#004346", "#172A3A", "crochet.html", 300, 300, 1.5, -1, 200, 200)
canvas.addEventListener("click", function(e){aboutMeButton.clickCheck(e.x, e.y)})
canvas.addEventListener("click", function(e){hireMeButton.clickCheck(e.x, e.y)})
canvas.addEventListener("click", function(e){bouncingBallButton.clickCheck(e.x, e.y)})
canvas.addEventListener("click", function(e){hsProgProjButton.clickCheck(e.x, e.y)})
canvas.addEventListener("click", function(e){crochetButton.clickCheck(e.x, e.y)})
buttonList = [aboutMeButton, hireMeButton, bouncingBallButton, hsProgProjButton, crochetButton]

//function that draws everything
function draw(){
  //resize the canvas and clear it
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  context.clearRect(0, 0, canvas.width, canvas.height);
  //background color
  context.beginPath()
  context.fillStyle = "#172A3A"
  context.fillRect(0, 0, canvas.width, canvas.height)
  //draw buttons
  context.font = "24px Arial"
  for (button of buttonList){
    button.drawAndMove();
  }


}

//set the interval for how often to redraw the canvas
setInterval(draw, 10);
