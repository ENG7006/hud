var timer = new Timer();

var ball = {
  x: 20,
  y: 200,
  size: 15,
  speed: 3,

  display: function () {
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.x += this.speed;
  },

  checkForBounce: function () {
    if (this.x > width - this.size / 2) this.bounce();
    if (this.x < 0 + this.size / 2) this.unbounce();
  },

  bounce: function () {
    this.speed = -3;
    score.plus();
  },

  unbounce: function () {
    this.speed = 3;
    score.plus();
  }
};

var score = {
  number: 0,

  display: function () {
    textSize(40);
    textAlign(CENTER);
    fill(0);
    text(this.number, 560, 40);
  },

  plus: function () {
    this.number++;
  },

  update: function () {
  },
};

setup = function() {
  createCanvas(600, 400);
};

draw = function() {
  background(100);
  ball.display();
  ball.update();
  score.display();
  score.update();
  textSize(40);
  textAlign(CENTER);
  fill(0);
  text(timer.getPrettyElapsedTime(), 60, 40);
  textStyle(ITALIC);
  text("Hang in there, baby", 300, 300);
};
