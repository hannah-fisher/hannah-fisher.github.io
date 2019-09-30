/*
JavaScript file
Creates a playable game of minesweeper
*/

//TODO
//make press r to restart actually work
//make a way for the game to be won

//////////////////////////////////////////////////////////////////////

//variables to store important game info
var rows = 10
var cols = 20
var clicked
var values
var bombs = 30
var lost = false

//////////////////////////////////////////////////////////////////////////////

//get the canvas and the context and add event listeners
var canvas = document.getElementById("myCanvas")
var context = canvas.getContext("2d")
canvas.addEventListener("click", canvasClicked)
window.addEventListener("keydown", keyPress, false)

///////////////////////////////////////////////////////

//function that set all the spots for a new game
function setSpots(){
  //set clicked to false for all spots
  clicked = []
  for (r = 0; r < rows; r ++){
    var row = []
    for (c = 0; c < cols; c ++){
      row.push(false)
    }
    clicked.push(row)
  }
  //set value to all spots to 0 to create all spots in array
  values = []
  for (r = 0; r < rows; r ++){
    var row = []
    for (c = 0; c < cols; c ++){
      row.push(0)
    }
    values.push(row)
  }

  //randomly place the bombs
  var bombsPlaced = 0
  while (bombsPlaced < bombs){
    r = Math.floor(Math.random() * rows)
    c = Math.floor(Math.random() * cols)
    if (values[r][c] != -1){
      values[r][c] = -1
      bombsPlaced += 1
    }
  }
  //calculate and assign values for all non-bomb locations
  for (r = 0; r < rows; r ++){
    for (c = 0; c < cols; c ++){
      if (values[r][c] != -1){ //only calculate if this is not a bomb
        var bombCount = 0
        for (r2 = r - 1; r2 <= r + 1; r2 ++){
          for (c2 = c - 1; c2 <= c + 1; c2 ++){
            if (r2 >= 0 && r2 < rows && c2 >= 0 && c2 < cols){ //if this neighbor is not out of bounds
              if (values[r2][c2] == -1){
                bombCount += 1
              }
            }
          }
        }
        values[r][c] = bombCount
      }
    }
  }
}

//////////////////////////////////////////////////////////////////

//function that redraws the page
function draw(){
  //resize the canvas and clear it
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  context.clearRect(0, 0, canvas.width, canvas.height);
  //draw the row lines
  const rowWidth = Math.floor(canvas.height / rows)
  for (r = 0; r <= rows; r ++){
      context.moveTo(0, r * rowWidth)
      context.lineTo(canvas.width, r * rowWidth)
      context.stroke()
  }
  //draw the column lines
  const colWidth = Math.floor(canvas.width / cols)
  for (c = 0; c <= cols; c ++){
    context.moveTo(c * colWidth, 0)
    context.lineTo(c * colWidth, canvas.height)
    context.stroke()
  }

  //draw the values numbers for clicked cells
  context.font = (rowWidth * 0.8) + "px Arial"
  for (r = 0; r < rows; r ++){
    for (c = 0; c < cols; c ++){
      if (clicked[r][c] == true){
        var num = values[r][c]
        context.fillStyle = "black"
        if (num == -1){
          context.fillStyle = "red"
        }
        context.fillText(String(num), colWidth * (c + 0.2), rowWidth * (r + 0.8))
      }
    }
  }

}

////////////////////////////////////////////////////////////////////////////

//function that is called when the canvas is clicked
function canvasClicked(e){
  if (lost == false){
    const x = e.clientX
    const y = e.clientY
    //use the location to figure out which cell was clicked, set clicked = true
    const rowWidth = Math.floor(canvas.height / rows)
    const colWidth = Math.floor(canvas.width / cols)
    const r = Math.floor(y / rowWidth)
    const c = Math.floor(x / colWidth)
    clicked[r][c] = true
    //redraw
    draw()
    //check if lost game
    if (values[r][c] == -1){
      lost = true;
      alert("You have clicked a bomb and lost the game! \nPress 'r' to restart")
    }
  }
}

/////////////////////////////////////////////////////////////////////////

//function that listens for keypresses

function keyPress(e){
  if (e.keyCode === 82){
    restart()
  }
}

///////////////////////////////////////////////////////////////////////////

//function that restarts the game

function restart(){
  lost = false;
  setSpots()
  draw()
}

////////////////////////////////////////////////////////////////////////////

//initial setup of game
restart()
