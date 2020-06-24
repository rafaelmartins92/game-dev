class Enemy extends Animation {
  constructor(matrix, image, x, variationY, width, altura, widthSprite, heightSprite) {
    super(matrix, image, x, variationY, width, altura, widthSprite, heightSprite)

    this.speed = 20;
  }

  move() {
    this.x = this.x - this.speed;

    if (this.x < -this.width) {
      this.x = width;
    }
  }
}