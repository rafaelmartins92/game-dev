class ButtonManager {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
    this.button.mousePressed(() => this._changeScreen());
  };

  draw() {
    this.button.position(this.x, this.y);
  };

  _changeScreen() {
    this.button.delete();
    actualScreen = 'game';
  };
};