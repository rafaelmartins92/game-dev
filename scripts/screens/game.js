class Game {
  constructor() {
    this.index = 0;

    this.map = tape.map;
  };

  setup() {
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
    life = new Life(tape.settings.maxLife, tape.settings.initialLife);
    character = new Character(matrixCharacter, imageCharacter, 0, 20, 195, 320, 292, 482);
    const skeleton = new Enemy(matrixSkeleton, imageSkeleton, width - 187, 30, 187, 210, 187, 210, 20);
    const ghost = new Enemy(matrixGhost, imageGhost, width - 118, 250, 170, 88, 227, 118, 25);
    const bat = new Enemy(matrixBat, imageBat, width - 128, 400, 128, 65, 128, 65, 40);
    
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

    life.draw();
    
    character.show();
    character.applyGravity();

    const actualLine = this.map[this.index];
    const enemy = enemies[actualLine.enemy];
    const visibleEnemy = enemy.x < - enemy.width;

    enemy.speed = actualLine.speed;
    enemy.show();
    enemy.move();
    
    if (visibleEnemy) {
      this.index++;
      enemy.reapper();

      if (this.index > this.map.length - 1) {
        this.index = 0; 
      };
    };

    if (character.isColliding(enemy)) {
      soundOuch.play();
      life.loseLife();
      character.beInvincible();

      if (life.lifes === 0) {
        image(imageGameOver, ((windowWidth/2) - (imageGameOver.width/2)), ((windowHeight/3) - (imageGameOver.height/2)));
        textFont(fontInitialScreen);
        textAlign('center');
        fill(236,167,62);
        textSize(40);
        strokeWeight(7);
        stroke(0,0,0);
        text('pressione enter para jogar novamente', width/2, height/3 * 1.5)
        soundGame.stop();
        soundGameOver.play();
        noLoop();
        endOfGame = true;
      };
    };    
  };
};