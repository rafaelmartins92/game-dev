function preload() {
  imageInitialScreen = loadImage('images/background/light-florest.png');
  imageBackground = loadImage('images/background/dark-florest.png');
  imageGameOver = loadImage('images/assets/game-over.png');
  imageCharacter = loadImage('images/character/fat-boy.png');
  imageSkeleton = loadImage('images/enemies/skeleton.png');
  imageGhost = loadImage('images/enemies/ghost.png');
  imageBat = loadImage('images/enemies/bat.png');
  
  soundGame = loadSound('sounds/track.mp3');
  soundGameOver = loadSound('sounds/game-over.mp3');
  soundJump = loadSound('sounds/jump.mp3');
  
  fontInitialScreen = loadFont('fonts/fontInitialScreen.otf');
}