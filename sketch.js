let imageBackground;
let imageGameOver;
let imageCharacter;
let imageEnemy;

let background;
let character;
let enemy;
let soundGame;
let soundGameOver;
let soundJump;

const matrixEnemy = [
  [0, 0],
  [235, 0],
  [500, 0],
  [770, 0]
];

const matrixCharacter = [
  [0, 0],
  [280, 0],
  [561, -75],
  [0, 485],
  [280, 485],
  [580, 520]
];

function preload() {
  imageBackground = loadImage('images/background/dark-florest.png');
  imageGameOver = loadImage('images/assets/game-over.png');
  imageCharacter = loadImage('images/character/fat-boy.png');
  imageEnemy = loadImage('images/enemies/skeleton.png');
  soundGame = loadSound('sounds/track.mp3');
  soundGameOver = loadSound('sounds/game-over.mp3');
  soundJump = loadSound('sounds/jump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background = new Background(imageBackground, 3);
  character = new Character(matrixCharacter, imageCharacter, 0, 195, 320, 292, 482);
  enemy = new Enemy(matrixEnemy, imageEnemy, width - 187, 187, 210, 187, 210);
  frameRate(10);
  soundGame.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    character.jump();
    soundJump.play();
  }
}

function draw() {
  background.show();
  background.move();
  
  character.show();
  character.applyGravity();

  enemy.show();
  enemy.move();

  if (character.isColliding(enemy)) {
    image(imageGameOver, width/4, height/4);
    soundGame.stop();
    soundGameOver.play();
    noLopp();
  }
}
