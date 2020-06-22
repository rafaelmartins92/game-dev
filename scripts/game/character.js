class Character {
  constructor(image) {
    this.image = image;
    this.matrix = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ];
    this.actualFrame = 0;
  }

  show() {
    // image(imageName, x, y, width, height, spriteX, spriteY, pixelLenghtX, pixelLenghtY)
    image(
      this.image, 
      0, height - 135, 
      110, 135, 
      this.matrix[this.actualFrame][0], 
      this.matrix[this.actualFrame][1], 
      220, 270
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