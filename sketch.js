let imageBackground;
let imageGameOver;
let imageCharacter;
let imageSkeleton;
let imageGhost;
let imageBat;

let soundGame;
let soundGameOver;
let soundJump;

let background;
let points;
let character;
let skeleton;
let ghost;
let bat;

let actualEnemy = 0;

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

const matrixBat = [
  [0, 0],
  [0, 113],
  [0, 219]
];

const matrixCharacter = [
  [0, 0],
  [280, 0],
  [561, -75],
  [0, 485],
  [280, 485],
  [580, 520]
];

const enemies = [];

function preload() {
  imageBackground = loadImage('images/background/dark-florest.png');
  imageGameOver = loadImage('images/assets/game-over.png');
  imageCharacter = loadImage('images/character/fat-boy.png');
  imageSkeleton = loadImage('images/enemies/skeleton.png');
  imageGhost = loadImage('images/enemies/ghost.png');
  imageBat = loadImage('images/enemies/bat.png');
  soundGame = loadSound('sounds/track.mp3');
  soundGameOver = loadSound('sounds/game-over.mp3');
  soundJump = loadSound('sounds/jump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background = new Background(imageBackground, 3);
  points = new Points();
  character = new Character(matrixCharacter, imageCharacter, 0, 20, 195, 320, 292, 482);
  const skeleton = new Enemy(matrixSkeleton, imageSkeleton, width - 187, 30, 187, 210, 187, 210, 20, 100);
  const ghost = new Enemy(matrixGhost, imageGhost, width - 118, 250, 170, 88, 227, 118, 20, 100);
  const bat = new Enemy(matrixBat, imageBat, width - 128, 600, 128, 65, 128, 65, 40, 100);
  
  enemies.push(skeleton);
  enemies.push(ghost);
  enemies.push(bat);

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

  points.show();
  points.addPoint();
  
  character.show();
  character.applyGravity();

  const enemy = enemies[actualEnemy];

  const visibleEnemy = enemy.x < - enemy.width;

  enemy.show();
  enemy.move();
  
  if (visibleEnemy) {
    actualEnemy++;

    if (actualEnemy > 2) {
      actualEnemy = 0;
    };

    enemy.speed = parseInt(random(10, 30));
  };

    if (character.isColliding(enemy)) {
      image(imageGameOver, width/4, height/4);
      soundGame.stop();
      // soundGameOver.play();
      // noLopp();
    }

}
