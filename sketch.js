let imageBackground;
let imageGameOver;
let imageCharacter;
let imageSkeleton;
let imageGhost;

let background;
let character;
let skeleton;
let ghost;
let soundGame;
let soundGameOver;
let soundJump;

const matrixSkeleton = [
  [0, 0],
  [235, 0],
  [500, 0],
  [770, 0]
];

const matrixGhost = [
  [0, 0],
  [241, 0],
  [468, 0],
  [709, 0]
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
  imageSkeleton = loadImage('images/enemies/skeleton.png');
  imageGhost = loadImage('images/enemies/ghost.png');
  soundGame = loadSound('sounds/track.mp3');
  soundGameOver = loadSound('sounds/game-over.mp3');
  soundJump = loadSound('sounds/jump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background = new Background(imageBackground, 3);
  character = new Character(matrixCharacter, imageCharacter, 0, 20, 195, 320, 292, 482);
  skeleton = new Enemy(matrixSkeleton, imageSkeleton, width - 187, 30, 187, 210, 187, 210);
  ghost = new Enemy(matrixGhost, imageGhost, width - 118, 150, 227, 118, 227, 118);
  frameRate(10);
  // soundGame.loop();
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

  skeleton.show();
  skeleton.move();
  
  ghost.show();
  ghost.move();

  if (character.isColliding(skeleton)) {
    image(imageGameOver, width/4, height/4);
    soundGame.stop();
    // soundGameOver.play();
    noLopp();
  }
}
