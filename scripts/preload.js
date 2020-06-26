function preload() {
  imageInitialScreen = loadImage('images/background/light-florest.png');
  // Parallax Background 
  imageGameBackground_1 = loadImage('images/parallax/parallax1.png');
  imageGameBackground_3 = loadImage('images/parallax/parallax3.png');
  imageGameBackground_4 = loadImage('images/parallax/parallax4.png');
  imageGameBackground_5 = loadImage('images/parallax/parallax5.png');
  imageGameBackground_6 = loadImage('images/parallax/parallax6.png');
  imageGameBackground_7 = loadImage('images/parallax/parallax7.png');
  imageGameBackground_8 = loadImage('images/parallax/parallax8.png');
  imageGameBackground_9 = loadImage('images/parallax/parallax9.png');
  imageGameBackground_10 = loadImage('images/parallax/parallax10.png');
  // Parallax Background
  imageGameOver = loadImage('images/assets/game-over.png');
  imageLife = loadImage('images/assets/heart.png');
  imageCharacter = loadImage('images/character/fat-boy.png');
  imageSkeleton = loadImage('images/enemies/skeleton.png');
  imageGhost = loadImage('images/enemies/ghost.png');
  imageBat = loadImage('images/enemies/bat.png');
  
  soundGame = loadSound('sounds/track.mp3');
  soundGameOver = loadSound('sounds/game-over.mp3');
  soundJump = loadSound('sounds/jump.mp3');
  
  fontInitialScreen = loadFont('fonts/fontInitialScreen.otf');

  tape = loadJSON('tape/tape.json');
}