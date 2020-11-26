class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic: false,
        'restitution':0.8,
        'friction':1.0,
        'density':0.4
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display(){
    push();
    var pos= this.body.position;
    fill("lavender");
    strokeWeight(3);
    stroke("black");
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rect(0, 0, this.width, this.height);
    //imageMode(CENTER);
    //image(this.image, 0, 0, this.width, this.height);
    pop();
  }

};
