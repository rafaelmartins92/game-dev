let imageBackground;
let imageCharacter;
let imageEnemy;

let background;
let character;
let enemy;
let soundGame;

const matrixEnemy = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]

const matrixCharacter = [
  [0, 0],
  [254, 0],
  [0, 270],
  [260,280]
];

function preload() {
  imageBackground = loadImage('images/background/florest.png');
  imageCharacter = loadImage('images/character/cave-boy.png');
  imageEnemy = loadImage('images/enemies/drop.png');
  soundGame = loadSound('sounds/track.mp3');
  soundJump = loadSound('sounds/jump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background = new Background(imageBackground, 3);
  character = new Character(matrixCharacter, imageCharacter, 0, 160, 240, 160, 240);
  enemy = new Enemy(matrixEnemy, imageEnemy, width - 70, 70, 70, 100, 100);
  frameRate(10);
  // soundGame.loop();
}

function draw() {
  background.show();
  background.move();
  
  character.show();

  enemy.show();
  enemy.move();
}
