class Enemy extends Animation {
  constructor(matrix, image, x, width, height, widthSprite, heightSprite) {
    super(matrix, image, x, width, height, widthSprite, heightSprite)

    this.speed = 20;
  }

  move() {
    this.x = this.x - this.speed;

    if (this.x < -this.width) {
      this.x = width;
    }
  }
}