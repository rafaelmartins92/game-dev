class Character extends Animation {
  constructor(matrix, image, x, width, altura, widthSprite, heightSprite) {
    super(matrix, image, x, width, altura, widthSprite, heightSprite)
    
    this.yInitial = height - this.altura;
    this.y = this.yInitial;

    this.speedJump = 0;
    this.gravity = 2;
  }

  jump() {
    this.speedJump = - 30;
  }

  applyGravity() {
    this.y = this.y + this.speedJump;
    this.speedJump = this.speedJump + this.gravity;

    if (this.y > this.yInitial) {
      this.y = this.yInitial
    }
  }

  isColliding(enemy) {
    const accuracy = 0.7;
    const collide = collideRectRect(
      this.x,
      this.y,
      this.width * accuracy,
      this.altura * accuracy,
      enemy.x,
      enemy.y,
      enemy.width * accuracy,
      enemy.altura * accuracy,
    );

    return collide;
  }
}