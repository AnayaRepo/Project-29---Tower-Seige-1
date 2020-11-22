class Polygon{
    constructor(x,y,radius) {
        var options = {
            isStatic: true,
            //restitution:0,
            //friction:1,
        }
        this.x=x; this.y=y; 
        this.r=radius;
        this.image=loadImage("polygon.png"); 
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
    }
    display(){
        //console.log(this.body.position);
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        //ellipseMode(RADIUS);
        image(this.image, pos.x, pos.y, 50, 50);
        pop();
    }
}