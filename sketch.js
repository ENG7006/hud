var timer = new Timer();

var counter = {
  number: 0,

  display: function () {
    fill(255);
    text("Number of Bubbles: " + this.number, 250, 525);
  },
  update: function () {
    this.addNumber();
  },
  addNumber: function () {
    counter.number = counter.number + 1;
  },
};

var Bubble = function (x, y) {
  this.x = x;
  this.y = y;
};

Bubble.prototype = {

  radius: 5,

  update: function() {
    this.x += random(-1, 1);
    this.y += random(0, -2);
    if (this.y - this.radius <= 0) this.y = this.radius + random(0, 2);
  },

  display: function () {
    noStroke();
    fill(102, 217, 255, 100);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
};

var bubbles = [];

setup = function () {
  createCanvas(600, 600);
};

draw = function() {
  background(100);
  text(timer.getPrettyElapsedTime(), 300, 500);
  if (mouseIsPressed) {
    bubbles.push(new Bubble(mouseX, mouseY));
    counter.addNumber();
  }
  for (var i = 0; i < bubbles.length; ++i) {
    bubbles[i].update();
    bubbles[i].display();
  }
  counter.display();
};
