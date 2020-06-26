class Life {
  constructor(total, initial) {
    this.total = total;
    this.initial = initial;
    this.lifes = this.initial;

    this.width = 50;
    this.altura = 50;
    this.initialX = 20;
    this.y = 20;
  };

  draw() {
    for(let i = 0; i < this.lifes; i++) {
      const margin = i * 50;
      const position = this.initialX * (i + 1);

      image(imageLife, position + margin, this.y, this.width, this.altura);
    };
  };

  getLife() {
    if (this.lifes <= this.total) {
      this.lifes++;
    };
  };

  loseLife() {
    this.lifes--;
  };

};