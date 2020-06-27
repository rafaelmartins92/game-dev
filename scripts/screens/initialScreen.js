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
    textAlign('right'); 
    strokeWeight(5);
    stroke(255,255,255); 
    fill(74, 76, 105);
    textSize(80);
    text('As aventuras de', width/2, height/10 * 4);
    textAlign('left');  
    textSize(160);
    text(' chubby', width/2, height/10 * 4.4);
    textAlign('center');
    fill(90, 92, 120);
    textSize(40);
    text('chubby se perdeu no meio da floresta !!!', width/2, height/10 * 5.1)
    text('dizem que pela noite', width/2, height/10 * 5.6)
    text('monstros costumam vagar por la ...', width/2, height/10 * 6.1)
  };

  _button() {
    buttonManager.y = height/7 * 5;
    buttonManager.draw();
  };
}