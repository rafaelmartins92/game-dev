class Points {
  constructor() {
    this.points = 0;
  }

  show() {
    textSize(50);
    textAlign('right');
    fill(236,167,62)
    strokeWeight(7);
    stroke(0,0,0);
    text(parseInt(this.points), width - 30, 50);
  }

  addPoint() {
    this.points = this.points + 0.2;
  }
}