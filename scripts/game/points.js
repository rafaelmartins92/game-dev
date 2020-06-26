class Points {
  constructor() {
    this.points = 0;
  }

  show() {
    textSize(50);
    textAlign('right');
    fill('#e5ba54')
    text(parseInt(this.points), width - 30, 50);
  }

  addPoint() {
    this.points = this.points + 0.2;
  }
}