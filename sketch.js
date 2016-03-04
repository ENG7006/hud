var timer = new Timer();

setup = function () {
  createCanvas(600, 600);

};

draw = function() {
  background(100);
  text(timer.getPrettyElapsedTime(), 300, 500);
};
