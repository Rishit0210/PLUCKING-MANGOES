class Mango {
    constructor(x,y,r) {
      var options = {
          'restitution':0,
          'friction':1,
           isStatic:true
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.image = loadImage("mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      strokeWeight(4);
      imageMode(CENTER);
      ellipseMode(CENTER);
	    image(this.image, 0,0,this.r*2, this.r*2)
      pop();
    }
  }