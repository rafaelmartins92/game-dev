class Character extends Animation {
  constructor(matrix, image, x, variationY, width, altura, widthSprite, heightSprite) {
    super(matrix, image, x, variationY, width, altura, widthSprite, heightSprite)
    
    this.variationY = variationY;
    this.yInitial = height - this.altura - this.variationY;
    this.y = this.yInitial;

    this.speedJump = 0;
    this.gravity = 3;
  }

  jump() {
    this.speedJump = - 40;
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