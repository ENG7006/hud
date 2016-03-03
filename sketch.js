var timer = new Timer();

var counter = {
  number: 0,

  display: function () {
    text(this.number, 20, 40);
  },

  addCount: function () {
    counter.number = counter.number + 1;
  },

};

var ball = {
  x: 20,
  y: 200,
  size: 30,
  xspeed: 4,

  display: function () {
    noStroke();
    fill(150, 100, 200);
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.x += this.xspeed; // this line is the same as: this.x = this.x + this.xspeed;


  },

  checkForBounce: function () {
    //if (this.x > width - this.size / 2 || this.x < 0 + this.size / 2)  {
    //this.xspeed = this.xspeed * -1;
    //counter.addCount();

    if (this.x > width - this.size / 2) {
        this.xspeed = this.xspeed * -1;
        counter.addCount();
    };

    if (this.x < 0 + this.size / 2) {
        this.xspeed = this.xspeed * -1;
        counter.addCount();
    };

  },

};

  setup = function() {
    createCanvas(600, 400);
};

  draw = function() {
    background(225);
    ball.display();
    ball.update();
    text(timer.getPrettyElapsedTime(), 20, 20);
    counter.display();
};
