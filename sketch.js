let imageBackground;
let imageCharacter;
let background;
let soundGame;
let character;

function preload() {
  imageBackground = loadImage('images/background/florest.png');
  imageCharacter = loadImage('images/character/cave-boy.png');
  soundGame = loadSound('sounds/track.mp3');
  soundJump = loadSound('sounds/jump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background = new Background(imageBackground, 3);
  character = new Character(imageCharacter);
  frameRate(10);
  // soundGame.loop();
}

function draw() {
  background.show();
  background.move();

  character.show();
}
