var BouncingBall = function (startingX, startingY) {
  this.position = new p5.Vector (startingX, startingY);
  this.direction = p5.Vector.random2D();
  this.direction.setMag(2);
};

BouncingBall.prototype = {
  collisionCount: 0,
  radius : 10,
  initialize: function () {
  },

  update: function () {
    this.position.add(this.direction);
    this.checkForBounce();
  },

  display: function () {
    noStroke();
    fill(255, 50);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  },

  checkForBounce: function () {
    if (this.position.y > height - this.radius) this.bounceY();
    if (this.position.y < this.radius) this.bounceY();
    if (this.position.x > width - this.radius) this.bounceX();
    if (this.position.x < this.radius) this.bounceX();
  },

  bounceX: function () {
    this.direction.x *= -1;
    this.collisionCount ++;
  },

  bounceY: function() {
    this.direction.y *= -1;
    this.collisionCount ++;
  },

  getCollisionCount: function() {
    return this.collisionCount;
  }

};
