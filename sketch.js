function setup() {
  game = new Game();
  initial = new Initial();
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  game.setup();
  soundGame.loop();
  screens = {
    game,
    initial
  };
};

function keyPressed() {
  game.keyPressed(key);
};

function draw() {
  screens[actualScreen].draw();
};
