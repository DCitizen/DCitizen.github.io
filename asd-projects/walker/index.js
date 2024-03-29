/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
 
function runProgram(){ 
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
  }
}
  // Game Item Objects

  var walker = {
    x: 10, // the x-coordinate location for the box
    y: 10, // the y-coordinate location for the box
    xSpeed: 0, // the speed for the box along the x-axis
    ySpeed: 0, // the speed for the box along the y-axis
    it: -1,
    allSpeed: 5,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp);    

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /*
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
var tick = 0
  function newFrame() {
    tick += 1
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }
 
  /*
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === key.left) {
      walker.xSpeed = - walker.allSpeed
    }
    if (event.which === key.up) {
      walker.ySpeed = - walker.allSpeed
    }
    if (event.which === key.right) {
      walker.xSpeed = walker.allSpeed
    }
    if (event.which === key.down) {
      walker.ySpeed = walker.allSpeed
    }
  }
  function handleKeyUp(event) {
    if (event.which === key.left) {
      walker.xSpeed = 0
    }
    if (event.which === key.up) {
      walker.ySpeed = 0
    }
    if (event.which === key.right) {
      walker.xSpeed = 0
    }
    if (event.which === key.down) {
      walker.ySpeed = 0
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

 
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
 
  function repositionGameItem(){
    walker.x += walker.xSpeed; // update the position of the walker along the x-axis
    walker.y += walker.ySpeed; // update the position of the walker along the y-axis
  }
  function redrawGameItem(){
    $("#walker").css("left", walker.x); // draw the walker in the new location, walker.x pixels away from the "left"
    $("#walker").css("top", walker.y); // draw the walker in the new location, walker.y pixels away from the "top"
  }
boardWandH = $("#board").width()
  function wallCollision(){
    if (walker.x === 0) {
      walker.x -= walker.xSpeed
    }
    if (walker.y === 0) {
      walker.y -= walker.ySpeed
    }
    if (walker.x === 390 ) { // the width of the board - the width of the walker
      walker.x -= walker.xSpeed
    }
    if (walker.y === 390) { // the height of the board - the height of the walker 
      walker.y -= walker.ySpeed
    }
  }