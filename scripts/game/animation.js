class Animation {
  constructor(matrix, image, x, width, altura, widthSprite, heightSprite) {
    this.matrix = matrix;
    this.image = image;
    this.width = width;
    this.altura = altura;
    this.x = x;
    this.y = height - this.altura;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;

    this.actualFrame = 0;
  }

  show() {
    // image(imageName, x, y, width, height, spriteX, spriteY, pixelLenghtX, pixelLenghtY)
    image(
      this.image, 
      this.x, this.y, 
      this.width, this.altura, 
      this.matrix[this.actualFrame][0], 
      this.matrix[this.actualFrame][1], 
      this.widthSprite, this.heightSprite
    );

    this.animate();
  }

  animate() {
    this.actualFrame++;

    if (this.actualFrame >= this.matrix.length -1) {
      this.actualFrame = 0;
    }
  }
}