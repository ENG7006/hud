var timer = new Timer();

//var minute = minute();
var counter = {
  number: 0,

  display: function () {
    textSize(15);
    fill("white");
    text(this.number, 60, 60 );
  },

  update: function () {
  },

  addOneToScore: function() {
    this.number++;
  }

};

var ball = {
  x: 300,
  y: 380,
  size: 15,
  direction: -3,

  display: function () {
    // note that to access any of ball's properties, you must use dot notation, using the special keyword this
    ellipse(this.x, this.y, this.size, this.size);

  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.y += this.direction; // this line is the same as: this.x = this.x + 1;
  },

  checkForBounce: function () {
    if (this.y > height - this.size / 2) this.bounce();
    if (this.y < 0 + this.size / 2) this.bounce();
  },

  bounce: function () {
    // your code goes here; a hint: this will require making your own variable as well as defining this function
    // another hint: notice that ball is defined using object literal notation
    this.direction = this.direction*-1;
    counter.addOneToScore();
  },

};

var setup = function() { // setup is called only when the sketch starts
  createCanvas(600, 400);
};

var draw = function() { // draw is called 60 times per second; animation goes here.
  background(100); // pay special attention to this line; what does it do?
  ball.display();
  ball.update();
  timer.getPrettyElapsedTime();
  text(timer.getPrettyElapsedTime(), 20, 20);
  counter.display();
  counter.update();


};
