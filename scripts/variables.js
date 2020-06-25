let imageInitialScreen;
let imageBackground;
let imageGameOver;
let imageCharacter;
let imageSkeleton;
let imageGhost;
let imageBat;

let soundGame;
let soundGameOver;
let soundJump;

let fontInitialScreen;

let background;
let points;
let character;
let skeleton;
let ghost;
let bat;
let game;
let initial;

let actualScreen = 'initialScreen';
let screens;
let initialScreen;
let buttonManager;

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