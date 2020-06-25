function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  soundGame.loop();
  game = new Game();
  initialScreen = new InitialScreen();
  game.setup();
  screens = {
    game,
    initialScreen
  };
  buttonManager = new ButtonManager('Iniciar', width/2, height/2);
};

function keyPressed() {
  game.keyPressed(key);
};

function draw() {
  screens[actualScreen].draw();
};
