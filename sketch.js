var counter = {
   number: 0,
   display: function () {
     textSize(40);
     fill(255);
     text(this.number, 350, 350);
 },
     update: function () {
    },

     addOneToScore:function(){
       this.number++;
     }
       };


 var ball = {
   x: 300,
   y: 390,
   size: 15,
   speed: -5,

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
    this.speed = this.speed * -1;
    // your code goes here; a hint: this will require making your own variable as well as defining this function
    // another hint: notice that ball is defined using object literal notation
  counter.addOneToScore();
},
};

  var timer = new Timer();


  setup = function () {
  createCanvas(400,400);
  myTimer = new Timer();
  myTimer.initialize();


  };

  draw = function() {
 background(0);
 text(timer.getPrettyElapsedTime(), 50, 350);
 textSize(40);
 fill(255);
 ball.update();
 ball.display();
 counter.display();
 counter.update();
 };
