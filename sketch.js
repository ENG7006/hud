var timer = new Timer();
var counter = 0;

var bouncingBalls = [];
var numberOfBallsToStart = 20;

var initializeBall = function (ball) {
  ball.initialize();
};

var updateAndDisplay = function(ball) {
  ball.update();
  ball.display();
  this.counter += ball.getCollisionCount();
};

setup = function () {
  createCanvas(600, 600);
  this.timer.initialize();

  while (bouncingBalls.length < numberOfBallsToStart) bouncingBalls.push(new BouncingBall(width/2, height/2));
  bouncingBalls.forEach(initializeBall);
};

draw = function() {
  background('#151515');
  this.counter = 0;
  bouncingBalls.forEach(updateAndDisplay);

  textSize(32);
  fill(255,0,0);
  text('Collision Detection Count: ' + this.counter, 50, 100);

  text('Time Elapsed: ' + this.timer.getPrettyElapsedTime(), 50, 500);
};
