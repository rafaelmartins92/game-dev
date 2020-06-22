let imageBackground;
let imageCharacter;
let background;
let soundGame;
let character;

function preload() {
  imageBackground = loadImage('images/background/florest.png');
  imageCharacter = loadImage('images/character/running.png');
  soundGame = loadSound('sounds/track_game.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background = new Background(imageBackground, 3);
  character = new Character(imageCharacter);
  frameRate(40);
  soundGame.loop();
}

function draw() {
  background.show();
  background.move();

  character.show();
}
