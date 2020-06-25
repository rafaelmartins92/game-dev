class ButtonManager {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
    this.button.mousePressed(() => this._changeScreen());
    this.button.addClass('button-screen-initial');
  };

  draw() {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  };

  _changeScreen() {
    this.button.remove();
    actualScreen = 'game';
  };
};