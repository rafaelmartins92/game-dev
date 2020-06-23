class Character extends Animation {
  constructor(matrix, image, x, width, height, widthSprite, heightSprite) {
    super(matrix, image, x, width, height, widthSprite, heightSprite)
    
    this.actualFrame = 0;
  }
}