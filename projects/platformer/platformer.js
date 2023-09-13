$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    createPlatform(500, 300, 200, 20);
    createPlatform(800, 400, 60, 30);
    createPlatform(30, 100, 200, 20);
    createPlatform(700, 500, 200, 20);
    createPlatform(600, 600, 200, 20);
    createPlatform(30, 800, 200, 20);
    createPlatform(400, 700, 200, 20);
    createPlatform(300, 300, 200, 20);
    createPlatform(150, 200, 200, 20);


    
    // TODO 2
    // Create collectables
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("grace", 500, 320, 0, 4);
    createCollectable("steve", 500, 300, 20, 0.5);
    createCollectable("kennedi", 150, 50, 0, 0.5);



    // TODO 3
    // Create cannons
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("right", 600, 1300,);
    createCannon("right", 800, 100, 150, 30,);
    createCannon("right", 300, 1300,);



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
