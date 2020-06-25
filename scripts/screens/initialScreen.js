class InitialScreen {
  constructor() {

  };

  draw() {
    this._imageBackground();
    this._text();
    this._button();
  };

  _imageBackground() {
    image(imageInitialScreen, 0, 0, width, height);
  };

  _text() {
    textFont(fontInitialScreen);
    textAlign('center');  
    textSize(50);
    text('As aventuras de', width/2, height/3);
    textSize(150);
    text('Chubby', width/2, height/5 * 3)
  };

  _button() {
    buttonManager.y = height/7 * 5;
    buttonManager.draw();
  };
}