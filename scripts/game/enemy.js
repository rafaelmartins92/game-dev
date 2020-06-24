class Enemy extends Animation {
  constructor(matrix, image, x, variationY, width, altura, widthSprite, heightSprite, speed, delay) {
    super(matrix, image, x, variationY, width, altura, widthSprite, heightSprite)

    this.speed = speed;
    this.delay = delay;
    this.x = width + this.delay;
  }

  move() {
    this.x = this.x - this.speed;

    if (this.x < -this.width - this.delay) {
      this.x = width;
    }
  }
}