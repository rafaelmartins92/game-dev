//Paralax 
let imageGameBackground_1;
let imageGameBackground_3;
let imageGameBackground_4;
let imageGameBackground_5;
let imageGameBackground_6;
let imageGameBackground_7;
let imageGameBackground_8;
let imageGameBackground_9;
let imageGameBackground_10;

let background_1;
let background_3;
let background_4;
let background_5;
let background_6;
let background_7;
let background_8;
let background_9;
let background_10;
// Fim Paralax

// let imageBackground;
let imageInitialScreen;
let imageGameOver;
let imageCharacter;
let imageSkeleton;
let imageGhost;
let imageBat;

let soundGame;
let soundGameOver;
let soundJump;


let fontInitialScreen;

// let background;
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