var timer = new Timer();

var counter = 0;

mouseClicked=function(){
  counter++;
};

setup = function () {
  createCanvas(800,600);
  this.timer.initialize();
};

draw = function() {
  background(100);
  textSize(30);
  text('Total Count:' +counter, 10, 50);
  text('Time Elapsed:'+this.timer.getPrettyElapsedTime(),10, 500);
};
