class Game {
  constructor() {
    this.actualEnemy = 0;
  };

  setup() {
    // background = new Background(imageBackground, 3);

    // Start Parallax
    background_1 = new Background(imageGameBackground_1, 4);
    background_3 = new Background(imageGameBackground_3, 3);
    background_4 = new Background(imageGameBackground_4, 2);
    background_5 = new Background(imageGameBackground_5, 1.9);
    background_6 = new Background(imageGameBackground_6, 1.6);
    background_7 = new Background(imageGameBackground_7, 1.3);
    background_8 = new Background(imageGameBackground_8, 1);
    background_9 = new Background(imageGameBackground_9, 1);
    background_10 = new Background(imageGameBackground_10, 1);
    // End Parallax

    points = new Points();
    character = new Character(matrixCharacter, imageCharacter, 0, 20, 195, 320, 292, 482);
    const skeleton = new Enemy(matrixSkeleton, imageSkeleton, width - 187, 30, 187, 210, 187, 210, 20, 50);
    const ghost = new Enemy(matrixGhost, imageGhost, width - 118, 250, 170, 88, 227, 118, 25, 75);
    const bat = new Enemy(matrixBat, imageBat, width - 128, 400, 128, 65, 128, 65, 40, 150);
    
    enemies.push(skeleton);
    enemies.push(ghost);
    enemies.push(bat);
  };

  keyPressed() {
    if (key === 'ArrowUp') {
      character.jump();
      soundJump.play();
    }
  };

  draw() {
  // background.show();
  // background.move();

  // Start Parallax
  background_10.show();
  background_10.move();
  background_9.show();
  background_9.move();
  background_8.show();
  background_8.move();
  background_6.show();
  background_6.move();
  background_7.show();
  background_7.move();
  background_5.show();
  background_5.move();
  background_4.show();
  background_4.move();
  // End Parallax

  points.show();
  points.addPoint();
  
  character.show();
  character.applyGravity();

  const enemy = enemies[this.actualEnemy];

  const visibleEnemy = enemy.x < - enemy.width;

  enemy.show();
  enemy.move();
  
  if (visibleEnemy) {
    this.actualEnemy++;

    if (this.actualEnemy > 2) {
      this.actualEnemy = 0;
    };

    enemy.speed = parseInt(random(25, 50));
  };

    if (character.isColliding(enemy)) {
      image(imageGameOver, width/4, height/4);
      soundGame.stop();
      soundGameOver.play();
      noLopp();
    }

    // Stop Parallax
    background_3.show();
    background_1.show();
    background_1.move();
    background_3.move();
  };
}