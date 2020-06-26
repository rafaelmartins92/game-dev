class Enemy extends Animation {
  constructor(matrix, image, x, variationY, largura, altura, widthSprite, heightSprite, speed) {
    super(matrix, image, x, variationY, largura, altura, widthSprite, heightSprite)

    this.speed = speed;
    this.x = width;
  };

  move() {
    this.x = this.x - this.speed;
  };

  reapper() {
    this.x = width;
  };
}