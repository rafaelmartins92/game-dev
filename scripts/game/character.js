class Character extends Animation {
  constructor(matrix, image, x, width, altura, widthSprite, heightSprite) {
    super(matrix, image, x, width, altura, widthSprite, heightSprite)
    
    this.yInitial = height - this.altura;
    this.y = this.yInitial;

    this.speedJump = 0;
    this.gravity = 3;
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
}