class Ball {
    constructor(x, y, r) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':0.08,
      }
      this.body = Bodies.circle(x, y,r, options);
      this.r = r;
      this.x = x
      this.y = y
      
      World.add(myWorld, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("turquoise");
      fill("turquoise");
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }