var timer = new Timer();

var ball = {
  x: 250,
  y: 200,
  size: 15,
  speed: 2,

  display: function () {
    // note that to access any of ball's properties, you must use dot notation, using the special keyword this
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.y += this.speed; // this line is the same as: this.x = this.x + 1;
  },

  checkForBounce: function () {
    if (this.y > height - this.size / 2) this.bounce();
    if (this.y < 0 + this.size / 2) this.bounce();
  },

  bounce: function () {
    this.speed = this.speed * -1; // your code goes here; a hint: this will require making your own variable as well as defining this function
    // another hint: notice that ball is defined using object literal notation
    // score one
    counter.scoreOne();
    // or: counter.number++; don't do this because it's a bad idea to manipulate somebody else's properties
  }
};
var counter = {
  number: 0,

  display: function () {
    textSize(15);
    fill("white");
    text(this.number, 60, 60);
    //  if (this.y > height - this.size / 2) this.bounce()counter+1;
  },

  update: function () {
    //if (ball.checkForBounce()) this.number += 1;
  },

  scoreOne: function() {
    this.number++;
    // is the same as this.number = this.number + 1;
    // is the same as this.number += 1;
  },
};

setup = function () {
createCanvas(600, 400);//var minute = minute();


};



//  setup = function() {
     // setup is called only when the sketch starts
//};
  draw = function() { // draw is called 60 times per second; animation goes here.
    background(100); // pay special attention to this line; what does it do?
    ball.update();
    ball.display();
    text(timer.getPrettyElapsedTime(), 20, 20);
    timer.getPrettyElapsedTime();
    counter.update();
    counter.display();

};
