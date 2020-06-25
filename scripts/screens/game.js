class Game {
  constructor() {
    this.actualEnemy = 0;
  };

  setup() {
    background = new Background(imageBackground, 3);
    points = new Points();
    character = new Character(matrixCharacter, imageCharacter, 0, 20, 195, 320, 292, 482);
    const skeleton = new Enemy(matrixSkeleton, imageSkeleton, width - 187, 30, 187, 210, 187, 210, 20, 100);
    const ghost = new Enemy(matrixGhost, imageGhost, width - 118, 250, 170, 88, 227, 118, 20, 100);
    const bat = new Enemy(matrixBat, imageBat, width - 128, 600, 128, 65, 128, 65, 40, 100);
    
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
  background.show();
  background.move();

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

    enemy.speed = parseInt(random(10, 30));
  };

    if (character.isColliding(enemy)) {
      image(imageGameOver, width/4, height/4);
      soundGame.stop();
      soundGameOver.play();
      // noLopp();
    }

  };
}